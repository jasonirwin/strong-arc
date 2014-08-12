// Copyright StrongLoop 2014
IA.service('IAService', [
  '$modal',
  'AppStorageService',
  'ModelService',
  'PropertyService',
  'DatasourceService',
  '$q',
  function($modal, AppStorageService, ModelService, PropertyService, DatasourceService, $q) {
    var svc = {};

    var currentlySelected = [];

    svc.getContainerWidth = function(selector) {
      if (selector) {
        return jQuery(selector).width();
      }
      return 0;
    };
    svc.openContainer = function(selector) {
      var dragTabWidth = 20;
      var mainWidth = (svc.getMainContentWidth() - dragTabWidth);
      jQuery(selector).animate({width: mainWidth}, 500 );

    };
    svc.closeContainer = function(selector) {
      return jQuery(selector).animate({width: 60}, 500 );
    };
    svc.getMainContentWidth = function() {
      return svc.getContainerWidth('[data-id="MainContentContainer"]');
    };
    svc.getViewportWidth = function() {
      return (window.innerWidth - 40);
    };




   // instances

    svc.getOpenInstanceRefs = function() {
      var retRefs = AppStorageService.getItem('openInstanceRefs');
      var activeInstance = AppStorageService.getItem('activeInstance');
      // TODO clean this up
      // make sure we don't have left overs from an abandoned create new model flow
      if (!retRefs) {
        retRefs = [];
      }
      if ((!activeInstance) || (!activeInstance.name)) {
        if ((retRefs.length === 1) && (!retRefs[0].id)) {
          // clear retRefs
          retRefs = [];
          AppStorageService.setItem('openInstanceRefs', retRefs);
        }
      }
      return retRefs;
    };
    svc.closeInstanceById = function(id) {
      var sourceInstances = svc.getOpenInstanceRefs();
      for (var i = 0;i < sourceInstances.length;i++) {
        if (sourceInstances[i].id === id) {
          sourceInstances.splice(i, 1);
          break;
        }
      }
      AppStorageService.setItem('openInstanceRefs', sourceInstances);
      return sourceInstances;
    };
    svc.activateInstanceById = function(id, type) {
      var openInstanceRefs = AppStorageService.getItem('openInstanceRefs');

      var newInstance = {};
      var isOpen = false;
      var instanceType = type;

      if (openInstanceRefs) {
        // first check if it is open already
        for (var i = 0;i < openInstanceRefs.length;i++) {

          if (openInstanceRefs[i].id === id) {
            isOpen = true;
            instanceType = openInstanceRefs[i].type;
            break;

          }
        }
      }



      // activate instance from respective repository
      switch(instanceType) {

        case 'model':
          newInstance = ModelService.getModelById(id);
          newInstance.type = 'model';
          break;

        case 'datasource':
          newInstance = DatasourceService.getDataSourceById(id);
          newInstance.type = 'datasource';
          break;

        default:
          // there is no instance type
          console.warn('trying to open instance by name but no type available: ' + id);


      }

      // set as active and update open refs if necessary
      if (newInstance) {
        svc.setActiveInstance(newInstance, instanceType);
        if (!isOpen) {
          var currRefs = AppStorageService.getItem('openInstanceRefs');
          if (!currRefs) {
            currRefs = [];
            AppStorageService.setItem('openInstanceRefs', currRefs);
          }
          currRefs.push({id: newInstance.id, name:newInstance.name,type:instanceType});
          AppStorageService.setItem('openInstanceRefs', currRefs);
        }
      }

      return newInstance;

    };
    svc.setActiveInstance = function(instance, type) {
      var targetInstance = {};

      if (type === 'model') {
        targetInstance = instance;
      }
      else if (type === 'datasource') {
        targetInstance = instance;
      }
      targetInstance.type = type;
      AppStorageService.setItem('activeInstance', targetInstance);
      return targetInstance;
    };
    svc.updateOpenInstanceRefs = function(instance, type) {
      // ensure the included instance is in the open instance refs
      var isAlreadyOpen = false;
      var currentOpenIntances = svc.getOpenInstanceRefs();
      if (currentOpenIntances.length) {
        var x = currentOpenIntances.map(function(instanceRef) {
            if (instance.name === instanceRef.name) {
              isAlreadyOpen = true;
            }
          }
        );

      }
      if (!isAlreadyOpen) {
        currentOpenIntances.push({id:instance.id, name: instance.name, type: 'model'});
        AppStorageService.setItem('openInstanceRefs', currentOpenIntances);
      }
    };
    svc.getActiveInstance = function() {
      var deferred  = $q.defer();
      // getting the active instance
      // should already pre-exist
      // may already have properties
      //





      var instance = AppStorageService.getItem('activeInstance');




      if (instance) {


        // get the model definition from the api
        instance = ModelService.getModelById(instance.id).
          then(function(response) {
            deferred.resolve(response);
          });

      }
      else {
        deferred.resolve({});
      }
      return deferred.promise;
    };
    /*
    *
    * Helpers
    *
    * */
    svc.getOpenModelNames =  function() {
      var retVal = [];
      var sourceInstances = svc.getOpenInstanceRefs();
      for (var i = 0;i < sourceInstances.length;i++) {
        if (sourceInstances[i].type === 'model') {
          retVal.push(sourceInstances[i].name);
        }
      }
      return retVal;
    };
    svc.getOpenDatasourceNames =  function() {
      var retVal = [];
      var sourceInstances = svc.getOpenInstanceRefs();
      for (var i = 0;i < sourceInstances.length;i++) {
        if (sourceInstances[i].type === 'datasource') {
          retVal.push(sourceInstances[i].name);
        }
      }
      return retVal;
    };
    svc.getInstanceType = function(instance) {
      var instanceName = instance;
      if(instance.type) {
        return instance.type;
      }
      else {
        if (instance.name) {
          instanceName = instance.name;
        }
        var dsDefs = DatasourceService.getAllDatasources();
        for (var i = 0;i < dsDefs.length;i++) {
          if (dsDefs[i].name === instanceName) {
            return 'datasource';
          }
        }
        return 'model';
      }
    };




    /*
     *
     * Selections
     *
     * */
    svc.addToCurrentInstanceSelections = function(instanceName, type) {

      // check if there are already some model instances open
      if (!currentlySelected) {

        currentlySelected = [];
      }
      // net new so add to list of open models
      // instantiate model by name
      // set as active instance
      if (currentlySelected.indexOf(instanceName) === -1) {
        currentlySelected.push(instanceName);

      }
      return currentlySelected;
    };
    svc.getCurrentInstanceSelections = function() {
      return currentlySelected;
    };
    svc.clearInstanceSelections = function() {
      currentlySelected = [];
      return currentlySelected;
    };

    /*
     *
     * end Selections
     *
     *
     * */

/*
* preview
* */



    svc.setPreviewInstance = function(instance) {
      return AppStorageService.setItem('previewInstance', instance);
    };
    svc.clearPreviewInstance = function() {
      return AppStorageService.removeItem('previewInstance');
    };
    svc.getPreviewInstance = function() {
      return AppStorageService.getItem('previewInstance');
    };

    /*
    *
    * end new preview
    *
    * */

    svc.setExplorerViewXPos = function(x) {
      try{
        var xPos = parseInt(x);
        if ((xPos > 0) && (xPos < (svc.getViewportWidth() + 1))){
          AppStorageService.setItem('explorerViewXPos', x);
        }
      }
      catch(e){
        console.warn('unable to save explorer view x pos: ' + e);
      }
    };
    svc.getExplorerViewXPos = function() {

//      var posX = AppStorageService.getItem('explorerViewXPos');
//      if (!posX) {
//        posX = svc.getViewportWidth();
//      }
//      posX = parseInt(posX);
//      svc.setExplorerViewXPos(posX);


      return 1000;

    };
    svc.clearViews = function() {
      svc.closeContainer('[data-id="CommonInstanceContainer"]');
      svc.closeContainer('[data-id="PreviewInstanceMainContainer"]');
      svc.closeContainer('[data-id="ExplorerContainer"]');
    };
    svc.showCanvasView = function() {
      // hide all slide outs that may be open
      svc.clearViews();
    };
    svc.showInstanceView = function() {
      //svc.clearViews();
      svc.closeContainer('[data-id="ExplorerContainer"]');

      svc.openContainer('[data-id="CommonInstanceContainer"]');


      // jQuery('[data-id="ModelEditorMainContainer"]').animate({width: 1000}, 500 );
    };

    svc.isViewOpen = function(viewId) {
      var xWidth = jQuery('[data-id="' + viewId + '"]').width();
      if (parseInt(xWidth) > 100) {
        return true;
      }
      return false;
    };
    svc.showExplorerView = function() {
      //svc.clearViews();
      if (svc.isViewOpen('ExplorerContainer')){
        svc.closeContainer('[data-id="ExplorerContainer"]');
      }
      else {
        svc.openContainer('[data-id="ExplorerContainer"]');
      }

    };
    // rename
    svc.toggleInstanceView = function() {
      if (svc.isViewOpen('CommonInstanceContainer')){
        svc.closeContainer('[data-id="CommonInstanceContainer"]');
      }
      else {
        svc.openContainer('[data-id="CommonInstanceContainer"]');
      }

    };
    svc.openModal = function(config) {
      return $modal.open(config);
    };
    return svc;
  }
]);
