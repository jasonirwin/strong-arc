(function(window, angular, undefined) {'use strict';

var localHost = "http://0.0.0.0:4001";
var urlBase = localHost + "/api";

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Workspace
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Workspace` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Workspace",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Workspaces/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Workspace#getAvailableTemplates
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `templates` – `{array=}` -
         */
        "getAvailableTemplates": {
          url: urlBase + "/Workspaces/component-templates",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#addComponent
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "addComponent": {
          url: urlBase + "/Workspaces/component",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#createFromTemplate
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `templateName` – `{string=}` -
         *
         *  - `name` – `{string=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "createFromTemplate": {
          url: urlBase + "/Workspaces",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#listAvailableConnectors
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workspace` object.)
         * </em>
         */
        "listAvailableConnectors": {
          url: urlBase + "/Workspaces/connectors",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#create
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workspace` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Workspaces",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#upsert
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workspace` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Workspaces",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#exists
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Workspaces/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#findById
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workspace` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Workspaces/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#find
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workspace` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Workspaces",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#findOne
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workspace` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Workspaces/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#updateAll
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Workspaces/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#deleteById
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Workspaces/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#count
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Workspaces/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Workspace#prototype$updateAttributes
         * @methodOf lbServices.Workspace
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Workspace` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Workspaces/:id",
          method: "PUT",
        },
      }
    );


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Facet
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Facet` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Facet",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Facets/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__findById__settings
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.findById() instead.
         *
         * @description
         *
         * Find a related item by id for settings
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for settings
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__findById__settings": {
          url: urlBase + "/Facets/:id/settings/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__destroyById__settings
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for settings
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for settings
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__settings": {
          url: urlBase + "/Facets/:id/settings/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__updateById__settings
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for settings
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for settings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__updateById__settings": {
          url: urlBase + "/Facets/:id/settings/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__get__settings
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings() instead.
         *
         * @description
         *
         * Queries settings of Facet.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__get__settings": {
          url: urlBase + "/Facets/:id/settings",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__create__settings
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.create() instead.
         *
         * @description
         *
         * Creates a new instance in settings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__create__settings": {
          url: urlBase + "/Facets/:id/settings",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__delete__settings
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.destroyAll() instead.
         *
         * @description
         *
         * Deletes all settings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__settings": {
          url: urlBase + "/Facets/:id/settings",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__findById__modelConfigs
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.findById() instead.
         *
         * @description
         *
         * Find a related item by id for modelConfigs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for modelConfigs
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__findById__modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__destroyById__modelConfigs
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for modelConfigs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for modelConfigs
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__updateById__modelConfigs
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for modelConfigs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for modelConfigs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__updateById__modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__get__modelConfigs
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs() instead.
         *
         * @description
         *
         * Queries modelConfigs of Facet.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__get__modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__create__modelConfigs
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.create() instead.
         *
         * @description
         *
         * Creates a new instance in modelConfigs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__create__modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__delete__modelConfigs
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.destroyAll() instead.
         *
         * @description
         *
         * Deletes all modelConfigs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__findById__models
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.findById() instead.
         *
         * @description
         *
         * Find a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__findById__models": {
          url: urlBase + "/Facets/:id/models/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__destroyById__models
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__models": {
          url: urlBase + "/Facets/:id/models/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__updateById__models
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__updateById__models": {
          url: urlBase + "/Facets/:id/models/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__get__models
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models() instead.
         *
         * @description
         *
         * Queries models of Facet.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__get__models": {
          url: urlBase + "/Facets/:id/models",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__create__models
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.create() instead.
         *
         * @description
         *
         * Creates a new instance in models of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__create__models": {
          url: urlBase + "/Facets/:id/models",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__delete__models
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.destroyAll() instead.
         *
         * @description
         *
         * Deletes all models of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__models": {
          url: urlBase + "/Facets/:id/models",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__findById__datasources
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.findById() instead.
         *
         * @description
         *
         * Find a related item by id for datasources
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for datasources
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__findById__datasources": {
          url: urlBase + "/Facets/:id/datasources/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__destroyById__datasources
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for datasources
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for datasources
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__datasources": {
          url: urlBase + "/Facets/:id/datasources/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__updateById__datasources
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for datasources
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for datasources
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__updateById__datasources": {
          url: urlBase + "/Facets/:id/datasources/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__get__datasources
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources() instead.
         *
         * @description
         *
         * Queries datasources of Facet.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__get__datasources": {
          url: urlBase + "/Facets/:id/datasources",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__create__datasources
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.create() instead.
         *
         * @description
         *
         * Creates a new instance in datasources of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$__create__datasources": {
          url: urlBase + "/Facets/:id/datasources",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$__delete__datasources
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.destroyAll() instead.
         *
         * @description
         *
         * Deletes all datasources of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__datasources": {
          url: urlBase + "/Facets/:id/datasources",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#create
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Facets",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#upsert
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Facets",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#exists
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Facets/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#findById
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Facets/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#find
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Facets",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#findOne
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Facets/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#updateAll
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Facets/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#deleteById
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Facets/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#count
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Facets/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Facet#prototype$updateAttributes
         * @methodOf lbServices.Facet
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Facets/:id",
          method: "PUT",
        },

        // INTERNAL. Use FacetSetting.facet() instead.
        "::get::FacetSetting::facet": {
          url: urlBase + "/FacetSettings/:id/facet",
          method: "GET",
        },

        // INTERNAL. Use ModelConfig.facet() instead.
        "::get::ModelConfig::facet": {
          url: urlBase + "/ModelConfigs/:id/facet",
          method: "GET",
        },

        // INTERNAL. Use ModelDefinition.facet() instead.
        "::get::ModelDefinition::facet": {
          url: urlBase + "/ModelDefinitions/:id/facet",
          method: "GET",
        },

        // INTERNAL. Use DataSourceDefinition.facet() instead.
        "::get::DataSourceDefinition::facet": {
          url: urlBase + "/DataSourceDefinitions/:id/facet",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.Facet#settings
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings() instead.
         *
         * @description
         *
         * Queries settings of Facet.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        R.settings = function() {
          var TargetResource = $injector.get("FacetSetting");
          var action = TargetResource["::get::Facet::settings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#settings.create
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.create() instead.
         *
         * @description
         *
         * Creates a new instance in settings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        R.settings.create = function() {
          var TargetResource = $injector.get("FacetSetting");
          var action = TargetResource["::create::Facet::settings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#settings.destroyAll
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.destroyAll() instead.
         *
         * @description
         *
         * Deletes all settings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.settings.destroyAll = function() {
          var TargetResource = $injector.get("FacetSetting");
          var action = TargetResource["::delete::Facet::settings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#settings.destroyById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for settings
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for settings
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.settings.destroyById = function() {
          var TargetResource = $injector.get("FacetSetting");
          var action = TargetResource["::destroyById::Facet::settings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#settings.findById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.findById() instead.
         *
         * @description
         *
         * Find a related item by id for settings
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for settings
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        R.settings.findById = function() {
          var TargetResource = $injector.get("FacetSetting");
          var action = TargetResource["::findById::Facet::settings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#settings.updateById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.settings.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for settings
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for settings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        R.settings.updateById = function() {
          var TargetResource = $injector.get("FacetSetting");
          var action = TargetResource["::updateById::Facet::settings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#modelConfigs
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs() instead.
         *
         * @description
         *
         * Queries modelConfigs of Facet.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        R.modelConfigs = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::get::Facet::modelConfigs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#modelConfigs.create
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.create() instead.
         *
         * @description
         *
         * Creates a new instance in modelConfigs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        R.modelConfigs.create = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::create::Facet::modelConfigs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#modelConfigs.destroyAll
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.destroyAll() instead.
         *
         * @description
         *
         * Deletes all modelConfigs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.modelConfigs.destroyAll = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::delete::Facet::modelConfigs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#modelConfigs.destroyById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for modelConfigs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for modelConfigs
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.modelConfigs.destroyById = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::destroyById::Facet::modelConfigs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#modelConfigs.findById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.findById() instead.
         *
         * @description
         *
         * Find a related item by id for modelConfigs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for modelConfigs
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        R.modelConfigs.findById = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::findById::Facet::modelConfigs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#modelConfigs.updateById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.modelConfigs.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for modelConfigs
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for modelConfigs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        R.modelConfigs.updateById = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::updateById::Facet::modelConfigs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#models
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models() instead.
         *
         * @description
         *
         * Queries models of Facet.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        R.models = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::get::Facet::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#models.create
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.create() instead.
         *
         * @description
         *
         * Creates a new instance in models of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        R.models.create = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::create::Facet::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#models.destroyAll
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.destroyAll() instead.
         *
         * @description
         *
         * Deletes all models of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.models.destroyAll = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::delete::Facet::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#models.destroyById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.models.destroyById = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::destroyById::Facet::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#models.findById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.findById() instead.
         *
         * @description
         *
         * Find a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        R.models.findById = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::findById::Facet::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#models.updateById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.models.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        R.models.updateById = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::updateById::Facet::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#datasources
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources() instead.
         *
         * @description
         *
         * Queries datasources of Facet.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        R.datasources = function() {
          var TargetResource = $injector.get("DataSourceDefinition");
          var action = TargetResource["::get::Facet::datasources"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#datasources.create
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.create() instead.
         *
         * @description
         *
         * Creates a new instance in datasources of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        R.datasources.create = function() {
          var TargetResource = $injector.get("DataSourceDefinition");
          var action = TargetResource["::create::Facet::datasources"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#datasources.destroyAll
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.destroyAll() instead.
         *
         * @description
         *
         * Deletes all datasources of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.datasources.destroyAll = function() {
          var TargetResource = $injector.get("DataSourceDefinition");
          var action = TargetResource["::delete::Facet::datasources"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#datasources.destroyById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for datasources
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for datasources
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.datasources.destroyById = function() {
          var TargetResource = $injector.get("DataSourceDefinition");
          var action = TargetResource["::destroyById::Facet::datasources"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#datasources.findById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.findById() instead.
         *
         * @description
         *
         * Find a related item by id for datasources
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for datasources
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        R.datasources.findById = function() {
          var TargetResource = $injector.get("DataSourceDefinition");
          var action = TargetResource["::findById::Facet::datasources"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Facet#datasources.updateById
         * @methodOf lbServices.Facet
         * @deprecated Use Facet.datasources.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for datasources
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for datasources
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        R.datasources.updateById = function() {
          var TargetResource = $injector.get("DataSourceDefinition");
          var action = TargetResource["::updateById::Facet::datasources"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.FacetSetting
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FacetSetting` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "FacetSetting",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/FacetSettings/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#prototype$__get__facet
         * @methodOf lbServices.FacetSetting
         * @deprecated Use FacetSetting.facet() instead.
         *
         * @description
         *
         * Fetches belongsTo relation facet
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        "prototype$__get__facet": {
          url: urlBase + "/FacetSettings/:id/facet",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#create
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/FacetSettings",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#upsert
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/FacetSettings",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#exists
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/FacetSettings/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#findById
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/FacetSettings/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#find
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/FacetSettings",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#findOne
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/FacetSettings/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#updateAll
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/FacetSettings/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#deleteById
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/FacetSettings/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#count
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/FacetSettings/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#prototype$updateAttributes
         * @methodOf lbServices.FacetSetting
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FacetSetting` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/FacetSettings/:id",
          method: "PUT",
        },

        // INTERNAL. Use Facet.settings.findById() instead.
        "::findById::Facet::settings": {
          url: urlBase + "/Facets/:id/settings/:fk",
          method: "GET",
        },

        // INTERNAL. Use Facet.settings.destroyById() instead.
        "::destroyById::Facet::settings": {
          url: urlBase + "/Facets/:id/settings/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Facet.settings.updateById() instead.
        "::updateById::Facet::settings": {
          url: urlBase + "/Facets/:id/settings/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Facet.settings() instead.
        "::get::Facet::settings": {
          url: urlBase + "/Facets/:id/settings",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Facet.settings.create() instead.
        "::create::Facet::settings": {
          url: urlBase + "/Facets/:id/settings",
          method: "POST",
        },

        // INTERNAL. Use Facet.settings.destroyAll() instead.
        "::delete::Facet::settings": {
          url: urlBase + "/Facets/:id/settings",
          method: "DELETE",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.FacetSetting#facet
         * @methodOf lbServices.FacetSetting
         * @deprecated Use FacetSetting.facet() instead.
         *
         * @description
         *
         * Fetches belongsTo relation facet
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        R.facet = function() {
          var TargetResource = $injector.get("Facet");
          var action = TargetResource["::get::FacetSetting::facet"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ModelConfig
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ModelConfig` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ModelConfig",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ModelConfigs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#prototype$__get__facet
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.facet() instead.
         *
         * @description
         *
         * Fetches belongsTo relation facet
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "prototype$__get__facet": {
          url: urlBase + "/ModelConfigs/:id/facet",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#prototype$__get__definition
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.definition() instead.
         *
         * @description
         *
         * Queries definition of ModelConfig.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "prototype$__get__definition": {
          url: urlBase + "/ModelConfigs/:id/definition",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#prototype$__create__definition
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.definition.create() instead.
         *
         * @description
         *
         * Creates a new instance in definition of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "prototype$__create__definition": {
          url: urlBase + "/ModelConfigs/:id/definition",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#prototype$__delete__definition
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.definition.destroyAll() instead.
         *
         * @description
         *
         * Deletes all definition of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__definition": {
          url: urlBase + "/ModelConfigs/:id/definition",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#prototype$__get__dataSource
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.dataSource() instead.
         *
         * @description
         *
         * Fetches belongsTo relation dataSource
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "prototype$__get__dataSource": {
          url: urlBase + "/ModelConfigs/:id/dataSource",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#create
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ModelConfigs",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#upsert
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ModelConfigs",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#exists
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/ModelConfigs/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#findById
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ModelConfigs/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#find
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/ModelConfigs",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#findOne
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ModelConfigs/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#updateAll
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ModelConfigs/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#deleteById
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ModelConfigs/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#count
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/ModelConfigs/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#prototype$updateAttributes
         * @methodOf lbServices.ModelConfig
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ModelConfigs/:id",
          method: "PUT",
        },

        // INTERNAL. Use Facet.modelConfigs.findById() instead.
        "::findById::Facet::modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs/:fk",
          method: "GET",
        },

        // INTERNAL. Use Facet.modelConfigs.destroyById() instead.
        "::destroyById::Facet::modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Facet.modelConfigs.updateById() instead.
        "::updateById::Facet::modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Facet.modelConfigs() instead.
        "::get::Facet::modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Facet.modelConfigs.create() instead.
        "::create::Facet::modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs",
          method: "POST",
        },

        // INTERNAL. Use Facet.modelConfigs.destroyAll() instead.
        "::delete::Facet::modelConfigs": {
          url: urlBase + "/Facets/:id/modelConfigs",
          method: "DELETE",
        },

        // INTERNAL. Use DataSourceDefinition.models.findById() instead.
        "::findById::DataSourceDefinition::models": {
          url: urlBase + "/DataSourceDefinitions/:id/models/:fk",
          method: "GET",
        },

        // INTERNAL. Use DataSourceDefinition.models.destroyById() instead.
        "::destroyById::DataSourceDefinition::models": {
          url: urlBase + "/DataSourceDefinitions/:id/models/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use DataSourceDefinition.models.updateById() instead.
        "::updateById::DataSourceDefinition::models": {
          url: urlBase + "/DataSourceDefinitions/:id/models/:fk",
          method: "PUT",
        },

        // INTERNAL. Use DataSourceDefinition.models() instead.
        "::get::DataSourceDefinition::models": {
          url: urlBase + "/DataSourceDefinitions/:id/models",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use DataSourceDefinition.models.create() instead.
        "::create::DataSourceDefinition::models": {
          url: urlBase + "/DataSourceDefinitions/:id/models",
          method: "POST",
        },

        // INTERNAL. Use DataSourceDefinition.models.destroyAll() instead.
        "::delete::DataSourceDefinition::models": {
          url: urlBase + "/DataSourceDefinitions/:id/models",
          method: "DELETE",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#facet
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.facet() instead.
         *
         * @description
         *
         * Fetches belongsTo relation facet
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        R.facet = function() {
          var TargetResource = $injector.get("Facet");
          var action = TargetResource["::get::ModelConfig::facet"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#definition
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.definition() instead.
         *
         * @description
         *
         * Queries definition of ModelConfig.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        R.definition = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::get::ModelConfig::definition"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#definition.create
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.definition.create() instead.
         *
         * @description
         *
         * Creates a new instance in definition of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        R.definition.create = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::create::ModelConfig::definition"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#definition.destroyAll
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.definition.destroyAll() instead.
         *
         * @description
         *
         * Deletes all definition of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.definition.destroyAll = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::delete::ModelConfig::definition"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelConfig#dataSource
         * @methodOf lbServices.ModelConfig
         * @deprecated Use ModelConfig.dataSource() instead.
         *
         * @description
         *
         * Fetches belongsTo relation dataSource
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        R.dataSource = function() {
          var TargetResource = $injector.get("DataSourceDefinition");
          var action = TargetResource["::get::ModelConfig::dataSource"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ModelDefinition
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ModelDefinition` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ModelDefinition",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ModelDefinitions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__get__facet
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.facet() instead.
         *
         * @description
         *
         * Fetches belongsTo relation facet
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__get__facet": {
          url: urlBase + "/ModelDefinitions/:id/facet",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__findById__methods
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.findById() instead.
         *
         * @description
         *
         * Find a related item by id for methods
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for methods
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__findById__methods": {
          url: urlBase + "/ModelDefinitions/:id/methods/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__destroyById__methods
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for methods
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for methods
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__methods": {
          url: urlBase + "/ModelDefinitions/:id/methods/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__updateById__methods
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for methods
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for methods
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__updateById__methods": {
          url: urlBase + "/ModelDefinitions/:id/methods/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__get__methods
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods() instead.
         *
         * @description
         *
         * Queries methods of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__get__methods": {
          url: urlBase + "/ModelDefinitions/:id/methods",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__create__methods
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.create() instead.
         *
         * @description
         *
         * Creates a new instance in methods of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__create__methods": {
          url: urlBase + "/ModelDefinitions/:id/methods",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__delete__methods
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.destroyAll() instead.
         *
         * @description
         *
         * Deletes all methods of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__methods": {
          url: urlBase + "/ModelDefinitions/:id/methods",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__findById__relations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.findById() instead.
         *
         * @description
         *
         * Find a related item by id for relations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for relations
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__findById__relations": {
          url: urlBase + "/ModelDefinitions/:id/relations/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__destroyById__relations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for relations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for relations
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__relations": {
          url: urlBase + "/ModelDefinitions/:id/relations/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__updateById__relations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for relations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for relations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__updateById__relations": {
          url: urlBase + "/ModelDefinitions/:id/relations/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__get__relations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations() instead.
         *
         * @description
         *
         * Queries relations of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__get__relations": {
          url: urlBase + "/ModelDefinitions/:id/relations",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__create__relations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.create() instead.
         *
         * @description
         *
         * Creates a new instance in relations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__create__relations": {
          url: urlBase + "/ModelDefinitions/:id/relations",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__delete__relations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.destroyAll() instead.
         *
         * @description
         *
         * Deletes all relations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__relations": {
          url: urlBase + "/ModelDefinitions/:id/relations",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__findById__accessControls
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.findById() instead.
         *
         * @description
         *
         * Find a related item by id for accessControls
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for accessControls
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__findById__accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__destroyById__accessControls
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for accessControls
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for accessControls
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__updateById__accessControls
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for accessControls
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for accessControls
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__updateById__accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__get__accessControls
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls() instead.
         *
         * @description
         *
         * Queries accessControls of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__get__accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__create__accessControls
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.create() instead.
         *
         * @description
         *
         * Creates a new instance in accessControls of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__create__accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__delete__accessControls
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.destroyAll() instead.
         *
         * @description
         *
         * Deletes all accessControls of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__findById__properties
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.findById() instead.
         *
         * @description
         *
         * Find a related item by id for properties
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for properties
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__findById__properties": {
          url: urlBase + "/ModelDefinitions/:id/properties/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__destroyById__properties
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for properties
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for properties
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__properties": {
          url: urlBase + "/ModelDefinitions/:id/properties/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__updateById__properties
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for properties
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for properties
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__updateById__properties": {
          url: urlBase + "/ModelDefinitions/:id/properties/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__get__properties
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties() instead.
         *
         * @description
         *
         * Queries properties of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__get__properties": {
          url: urlBase + "/ModelDefinitions/:id/properties",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__create__properties
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.create() instead.
         *
         * @description
         *
         * Creates a new instance in properties of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__create__properties": {
          url: urlBase + "/ModelDefinitions/:id/properties",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__delete__properties
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.destroyAll() instead.
         *
         * @description
         *
         * Deletes all properties of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__properties": {
          url: urlBase + "/ModelDefinitions/:id/properties",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__findById__validations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.findById() instead.
         *
         * @description
         *
         * Find a related item by id for validations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for validations
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__findById__validations": {
          url: urlBase + "/ModelDefinitions/:id/validations/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__destroyById__validations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for validations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for validations
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__validations": {
          url: urlBase + "/ModelDefinitions/:id/validations/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__updateById__validations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for validations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for validations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__updateById__validations": {
          url: urlBase + "/ModelDefinitions/:id/validations/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__get__validations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations() instead.
         *
         * @description
         *
         * Queries validations of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__get__validations": {
          url: urlBase + "/ModelDefinitions/:id/validations",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__create__validations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.create() instead.
         *
         * @description
         *
         * Creates a new instance in validations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__create__validations": {
          url: urlBase + "/ModelDefinitions/:id/validations",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__delete__validations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.destroyAll() instead.
         *
         * @description
         *
         * Deletes all validations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__validations": {
          url: urlBase + "/ModelDefinitions/:id/validations",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__findById__views
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.findById() instead.
         *
         * @description
         *
         * Find a related item by id for views
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for views
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__findById__views": {
          url: urlBase + "/ModelDefinitions/:id/views/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__destroyById__views
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for views
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for views
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__views": {
          url: urlBase + "/ModelDefinitions/:id/views/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__updateById__views
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for views
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for views
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__updateById__views": {
          url: urlBase + "/ModelDefinitions/:id/views/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__get__views
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views() instead.
         *
         * @description
         *
         * Queries views of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__get__views": {
          url: urlBase + "/ModelDefinitions/:id/views",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__create__views
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.create() instead.
         *
         * @description
         *
         * Creates a new instance in views of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$__create__views": {
          url: urlBase + "/ModelDefinitions/:id/views",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$__delete__views
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.destroyAll() instead.
         *
         * @description
         *
         * Deletes all views of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__views": {
          url: urlBase + "/ModelDefinitions/:id/views",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#create
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ModelDefinitions",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#upsert
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ModelDefinitions",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#exists
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/ModelDefinitions/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#findById
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ModelDefinitions/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#find
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/ModelDefinitions",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#findOne
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ModelDefinitions/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#updateAll
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ModelDefinitions/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#deleteById
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ModelDefinitions/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#count
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/ModelDefinitions/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#prototype$updateAttributes
         * @methodOf lbServices.ModelDefinition
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ModelDefinitions/:id",
          method: "PUT",
        },

        // INTERNAL. Use Facet.models.findById() instead.
        "::findById::Facet::models": {
          url: urlBase + "/Facets/:id/models/:fk",
          method: "GET",
        },

        // INTERNAL. Use Facet.models.destroyById() instead.
        "::destroyById::Facet::models": {
          url: urlBase + "/Facets/:id/models/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Facet.models.updateById() instead.
        "::updateById::Facet::models": {
          url: urlBase + "/Facets/:id/models/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Facet.models() instead.
        "::get::Facet::models": {
          url: urlBase + "/Facets/:id/models",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Facet.models.create() instead.
        "::create::Facet::models": {
          url: urlBase + "/Facets/:id/models",
          method: "POST",
        },

        // INTERNAL. Use Facet.models.destroyAll() instead.
        "::delete::Facet::models": {
          url: urlBase + "/Facets/:id/models",
          method: "DELETE",
        },

        // INTERNAL. Use ModelConfig.definition() instead.
        "::get::ModelConfig::definition": {
          url: urlBase + "/ModelConfigs/:id/definition",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use ModelConfig.definition.create() instead.
        "::create::ModelConfig::definition": {
          url: urlBase + "/ModelConfigs/:id/definition",
          method: "POST",
        },

        // INTERNAL. Use ModelConfig.definition.destroyAll() instead.
        "::delete::ModelConfig::definition": {
          url: urlBase + "/ModelConfigs/:id/definition",
          method: "DELETE",
        },

        // INTERNAL. Use ModelRelation.model() instead.
        "::get::ModelRelation::model": {
          url: urlBase + "/ModelRelations/:id/model",
          method: "GET",
        },

        // INTERNAL. Use ModelAccessControl.model() instead.
        "::get::ModelAccessControl::model": {
          url: urlBase + "/ModelAccessControls/:id/model",
          method: "GET",
        },

        // INTERNAL. Use ModelProperty.model() instead.
        "::get::ModelProperty::model": {
          url: urlBase + "/ModelProperties/:id/model",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#facet
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.facet() instead.
         *
         * @description
         *
         * Fetches belongsTo relation facet
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        R.facet = function() {
          var TargetResource = $injector.get("Facet");
          var action = TargetResource["::get::ModelDefinition::facet"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#methods
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods() instead.
         *
         * @description
         *
         * Queries methods of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        R.methods = function() {
          var TargetResource = $injector.get("ModelMethod");
          var action = TargetResource["::get::ModelDefinition::methods"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#methods.create
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.create() instead.
         *
         * @description
         *
         * Creates a new instance in methods of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        R.methods.create = function() {
          var TargetResource = $injector.get("ModelMethod");
          var action = TargetResource["::create::ModelDefinition::methods"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#methods.destroyAll
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.destroyAll() instead.
         *
         * @description
         *
         * Deletes all methods of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.methods.destroyAll = function() {
          var TargetResource = $injector.get("ModelMethod");
          var action = TargetResource["::delete::ModelDefinition::methods"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#methods.destroyById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for methods
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for methods
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.methods.destroyById = function() {
          var TargetResource = $injector.get("ModelMethod");
          var action = TargetResource["::destroyById::ModelDefinition::methods"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#methods.findById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.findById() instead.
         *
         * @description
         *
         * Find a related item by id for methods
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for methods
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        R.methods.findById = function() {
          var TargetResource = $injector.get("ModelMethod");
          var action = TargetResource["::findById::ModelDefinition::methods"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#methods.updateById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.methods.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for methods
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for methods
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        R.methods.updateById = function() {
          var TargetResource = $injector.get("ModelMethod");
          var action = TargetResource["::updateById::ModelDefinition::methods"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#relations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations() instead.
         *
         * @description
         *
         * Queries relations of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        R.relations = function() {
          var TargetResource = $injector.get("ModelRelation");
          var action = TargetResource["::get::ModelDefinition::relations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#relations.create
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.create() instead.
         *
         * @description
         *
         * Creates a new instance in relations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        R.relations.create = function() {
          var TargetResource = $injector.get("ModelRelation");
          var action = TargetResource["::create::ModelDefinition::relations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#relations.destroyAll
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.destroyAll() instead.
         *
         * @description
         *
         * Deletes all relations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.relations.destroyAll = function() {
          var TargetResource = $injector.get("ModelRelation");
          var action = TargetResource["::delete::ModelDefinition::relations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#relations.destroyById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for relations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for relations
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.relations.destroyById = function() {
          var TargetResource = $injector.get("ModelRelation");
          var action = TargetResource["::destroyById::ModelDefinition::relations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#relations.findById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.findById() instead.
         *
         * @description
         *
         * Find a related item by id for relations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for relations
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        R.relations.findById = function() {
          var TargetResource = $injector.get("ModelRelation");
          var action = TargetResource["::findById::ModelDefinition::relations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#relations.updateById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.relations.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for relations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for relations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        R.relations.updateById = function() {
          var TargetResource = $injector.get("ModelRelation");
          var action = TargetResource["::updateById::ModelDefinition::relations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#accessControls
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls() instead.
         *
         * @description
         *
         * Queries accessControls of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        R.accessControls = function() {
          var TargetResource = $injector.get("ModelAccessControl");
          var action = TargetResource["::get::ModelDefinition::accessControls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#accessControls.create
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.create() instead.
         *
         * @description
         *
         * Creates a new instance in accessControls of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        R.accessControls.create = function() {
          var TargetResource = $injector.get("ModelAccessControl");
          var action = TargetResource["::create::ModelDefinition::accessControls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#accessControls.destroyAll
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.destroyAll() instead.
         *
         * @description
         *
         * Deletes all accessControls of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessControls.destroyAll = function() {
          var TargetResource = $injector.get("ModelAccessControl");
          var action = TargetResource["::delete::ModelDefinition::accessControls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#accessControls.destroyById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for accessControls
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for accessControls
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.accessControls.destroyById = function() {
          var TargetResource = $injector.get("ModelAccessControl");
          var action = TargetResource["::destroyById::ModelDefinition::accessControls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#accessControls.findById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.findById() instead.
         *
         * @description
         *
         * Find a related item by id for accessControls
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for accessControls
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        R.accessControls.findById = function() {
          var TargetResource = $injector.get("ModelAccessControl");
          var action = TargetResource["::findById::ModelDefinition::accessControls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#accessControls.updateById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.accessControls.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for accessControls
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for accessControls
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        R.accessControls.updateById = function() {
          var TargetResource = $injector.get("ModelAccessControl");
          var action = TargetResource["::updateById::ModelDefinition::accessControls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#properties
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties() instead.
         *
         * @description
         *
         * Queries properties of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        R.properties = function() {
          var TargetResource = $injector.get("ModelProperty");
          var action = TargetResource["::get::ModelDefinition::properties"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#properties.create
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.create() instead.
         *
         * @description
         *
         * Creates a new instance in properties of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        R.properties.create = function() {
          var TargetResource = $injector.get("ModelProperty");
          var action = TargetResource["::create::ModelDefinition::properties"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#properties.destroyAll
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.destroyAll() instead.
         *
         * @description
         *
         * Deletes all properties of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.properties.destroyAll = function() {
          var TargetResource = $injector.get("ModelProperty");
          var action = TargetResource["::delete::ModelDefinition::properties"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#properties.destroyById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for properties
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for properties
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.properties.destroyById = function() {
          var TargetResource = $injector.get("ModelProperty");
          var action = TargetResource["::destroyById::ModelDefinition::properties"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#properties.findById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.findById() instead.
         *
         * @description
         *
         * Find a related item by id for properties
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for properties
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        R.properties.findById = function() {
          var TargetResource = $injector.get("ModelProperty");
          var action = TargetResource["::findById::ModelDefinition::properties"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#properties.updateById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.properties.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for properties
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for properties
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        R.properties.updateById = function() {
          var TargetResource = $injector.get("ModelProperty");
          var action = TargetResource["::updateById::ModelDefinition::properties"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#validations
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations() instead.
         *
         * @description
         *
         * Queries validations of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        R.validations = function() {
          var TargetResource = $injector.get("PropertyValidation");
          var action = TargetResource["::get::ModelDefinition::validations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#validations.create
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.create() instead.
         *
         * @description
         *
         * Creates a new instance in validations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        R.validations.create = function() {
          var TargetResource = $injector.get("PropertyValidation");
          var action = TargetResource["::create::ModelDefinition::validations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#validations.destroyAll
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.destroyAll() instead.
         *
         * @description
         *
         * Deletes all validations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.validations.destroyAll = function() {
          var TargetResource = $injector.get("PropertyValidation");
          var action = TargetResource["::delete::ModelDefinition::validations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#validations.destroyById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for validations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for validations
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.validations.destroyById = function() {
          var TargetResource = $injector.get("PropertyValidation");
          var action = TargetResource["::destroyById::ModelDefinition::validations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#validations.findById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.findById() instead.
         *
         * @description
         *
         * Find a related item by id for validations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for validations
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        R.validations.findById = function() {
          var TargetResource = $injector.get("PropertyValidation");
          var action = TargetResource["::findById::ModelDefinition::validations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#validations.updateById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.validations.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for validations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for validations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        R.validations.updateById = function() {
          var TargetResource = $injector.get("PropertyValidation");
          var action = TargetResource["::updateById::ModelDefinition::validations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#views
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views() instead.
         *
         * @description
         *
         * Queries views of ModelDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        R.views = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::get::ModelDefinition::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#views.create
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.create() instead.
         *
         * @description
         *
         * Creates a new instance in views of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        R.views.create = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::create::ModelDefinition::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#views.destroyAll
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.destroyAll() instead.
         *
         * @description
         *
         * Deletes all views of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.views.destroyAll = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::delete::ModelDefinition::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#views.destroyById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for views
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for views
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.views.destroyById = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::destroyById::ModelDefinition::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#views.findById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.findById() instead.
         *
         * @description
         *
         * Find a related item by id for views
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for views
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        R.views.findById = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::findById::ModelDefinition::views"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ModelDefinition#views.updateById
         * @methodOf lbServices.ModelDefinition
         * @deprecated Use ModelDefinition.views.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for views
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for views
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        R.views.updateById = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::updateById::ModelDefinition::views"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ModelMethod
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ModelMethod` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ModelMethod",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ModelMethods/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#create
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ModelMethods",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#upsert
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ModelMethods",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#exists
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/ModelMethods/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#findById
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ModelMethods/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#find
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/ModelMethods",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#findOne
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ModelMethods/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#updateAll
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ModelMethods/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#deleteById
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ModelMethods/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#count
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/ModelMethods/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelMethod#prototype$updateAttributes
         * @methodOf lbServices.ModelMethod
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelMethod` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ModelMethods/:id",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.methods.findById() instead.
        "::findById::ModelDefinition::methods": {
          url: urlBase + "/ModelDefinitions/:id/methods/:fk",
          method: "GET",
        },

        // INTERNAL. Use ModelDefinition.methods.destroyById() instead.
        "::destroyById::ModelDefinition::methods": {
          url: urlBase + "/ModelDefinitions/:id/methods/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use ModelDefinition.methods.updateById() instead.
        "::updateById::ModelDefinition::methods": {
          url: urlBase + "/ModelDefinitions/:id/methods/:fk",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.methods() instead.
        "::get::ModelDefinition::methods": {
          url: urlBase + "/ModelDefinitions/:id/methods",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use ModelDefinition.methods.create() instead.
        "::create::ModelDefinition::methods": {
          url: urlBase + "/ModelDefinitions/:id/methods",
          method: "POST",
        },

        // INTERNAL. Use ModelDefinition.methods.destroyAll() instead.
        "::delete::ModelDefinition::methods": {
          url: urlBase + "/ModelDefinitions/:id/methods",
          method: "DELETE",
        },
      }
    );


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ModelRelation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ModelRelation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ModelRelation",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ModelRelations/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#prototype$__get__model
         * @methodOf lbServices.ModelRelation
         * @deprecated Use ModelRelation.model() instead.
         *
         * @description
         *
         * Fetches belongsTo relation model
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        "prototype$__get__model": {
          url: urlBase + "/ModelRelations/:id/model",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#create
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ModelRelations",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#upsert
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ModelRelations",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#exists
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/ModelRelations/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#findById
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ModelRelations/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#find
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/ModelRelations",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#findOne
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ModelRelations/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#updateAll
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ModelRelations/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#deleteById
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ModelRelations/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#count
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/ModelRelations/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#prototype$updateAttributes
         * @methodOf lbServices.ModelRelation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelRelation` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ModelRelations/:id",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.relations.findById() instead.
        "::findById::ModelDefinition::relations": {
          url: urlBase + "/ModelDefinitions/:id/relations/:fk",
          method: "GET",
        },

        // INTERNAL. Use ModelDefinition.relations.destroyById() instead.
        "::destroyById::ModelDefinition::relations": {
          url: urlBase + "/ModelDefinitions/:id/relations/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use ModelDefinition.relations.updateById() instead.
        "::updateById::ModelDefinition::relations": {
          url: urlBase + "/ModelDefinitions/:id/relations/:fk",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.relations() instead.
        "::get::ModelDefinition::relations": {
          url: urlBase + "/ModelDefinitions/:id/relations",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use ModelDefinition.relations.create() instead.
        "::create::ModelDefinition::relations": {
          url: urlBase + "/ModelDefinitions/:id/relations",
          method: "POST",
        },

        // INTERNAL. Use ModelDefinition.relations.destroyAll() instead.
        "::delete::ModelDefinition::relations": {
          url: urlBase + "/ModelDefinitions/:id/relations",
          method: "DELETE",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.ModelRelation#model
         * @methodOf lbServices.ModelRelation
         * @deprecated Use ModelRelation.model() instead.
         *
         * @description
         *
         * Fetches belongsTo relation model
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        R.model = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::get::ModelRelation::model"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ModelAccessControl
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ModelAccessControl` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ModelAccessControl",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ModelAccessControls/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#prototype$__get__model
         * @methodOf lbServices.ModelAccessControl
         * @deprecated Use ModelAccessControl.model() instead.
         *
         * @description
         *
         * Fetches belongsTo relation model
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        "prototype$__get__model": {
          url: urlBase + "/ModelAccessControls/:id/model",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#create
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ModelAccessControls",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#upsert
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ModelAccessControls",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#exists
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/ModelAccessControls/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#findById
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ModelAccessControls/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#find
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/ModelAccessControls",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#findOne
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ModelAccessControls/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#updateAll
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ModelAccessControls/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#deleteById
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ModelAccessControls/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#count
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/ModelAccessControls/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#prototype$updateAttributes
         * @methodOf lbServices.ModelAccessControl
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelAccessControl` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ModelAccessControls/:id",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.accessControls.findById() instead.
        "::findById::ModelDefinition::accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls/:fk",
          method: "GET",
        },

        // INTERNAL. Use ModelDefinition.accessControls.destroyById() instead.
        "::destroyById::ModelDefinition::accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use ModelDefinition.accessControls.updateById() instead.
        "::updateById::ModelDefinition::accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls/:fk",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.accessControls() instead.
        "::get::ModelDefinition::accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use ModelDefinition.accessControls.create() instead.
        "::create::ModelDefinition::accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls",
          method: "POST",
        },

        // INTERNAL. Use ModelDefinition.accessControls.destroyAll() instead.
        "::delete::ModelDefinition::accessControls": {
          url: urlBase + "/ModelDefinitions/:id/accessControls",
          method: "DELETE",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.ModelAccessControl#model
         * @methodOf lbServices.ModelAccessControl
         * @deprecated Use ModelAccessControl.model() instead.
         *
         * @description
         *
         * Fetches belongsTo relation model
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        R.model = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::get::ModelAccessControl::model"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ModelProperty
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ModelProperty` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ModelProperty",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ModelProperties/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#prototype$__get__model
         * @methodOf lbServices.ModelProperty
         * @deprecated Use ModelProperty.model() instead.
         *
         * @description
         *
         * Fetches belongsTo relation model
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        "prototype$__get__model": {
          url: urlBase + "/ModelProperties/:id/model",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#create
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ModelProperties",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#upsert
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ModelProperties",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#exists
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/ModelProperties/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#findById
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ModelProperties/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#find
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/ModelProperties",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#findOne
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ModelProperties/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#updateAll
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ModelProperties/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#deleteById
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ModelProperties/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#count
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/ModelProperties/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#prototype$updateAttributes
         * @methodOf lbServices.ModelProperty
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ModelProperties/:id",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.properties.findById() instead.
        "::findById::ModelDefinition::properties": {
          url: urlBase + "/ModelDefinitions/:id/properties/:fk",
          method: "GET",
        },

        // INTERNAL. Use ModelDefinition.properties.destroyById() instead.
        "::destroyById::ModelDefinition::properties": {
          url: urlBase + "/ModelDefinitions/:id/properties/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use ModelDefinition.properties.updateById() instead.
        "::updateById::ModelDefinition::properties": {
          url: urlBase + "/ModelDefinitions/:id/properties/:fk",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.properties() instead.
        "::get::ModelDefinition::properties": {
          url: urlBase + "/ModelDefinitions/:id/properties",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use ModelDefinition.properties.create() instead.
        "::create::ModelDefinition::properties": {
          url: urlBase + "/ModelDefinitions/:id/properties",
          method: "POST",
        },

        // INTERNAL. Use ModelDefinition.properties.destroyAll() instead.
        "::delete::ModelDefinition::properties": {
          url: urlBase + "/ModelDefinitions/:id/properties",
          method: "DELETE",
        },

        // INTERNAL. Use PropertyValidation.model() instead.
        "::get::PropertyValidation::model": {
          url: urlBase + "/PropertyValidations/:id/model",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.ModelProperty#model
         * @methodOf lbServices.ModelProperty
         * @deprecated Use ModelProperty.model() instead.
         *
         * @description
         *
         * Fetches belongsTo relation model
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelDefinition` object.)
         * </em>
         */
        R.model = function() {
          var TargetResource = $injector.get("ModelDefinition");
          var action = TargetResource["::get::ModelProperty::model"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.DatabaseColumn
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DatabaseColumn` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DatabaseColumn",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DatabaseColumns/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#create
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DatabaseColumn` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/DatabaseColumns",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#upsert
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DatabaseColumn` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/DatabaseColumns",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#exists
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/DatabaseColumns/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#findById
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DatabaseColumn` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/DatabaseColumns/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#find
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DatabaseColumn` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/DatabaseColumns",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#findOne
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DatabaseColumn` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/DatabaseColumns/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#updateAll
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/DatabaseColumns/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#deleteById
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/DatabaseColumns/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#count
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/DatabaseColumns/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DatabaseColumn#prototype$updateAttributes
         * @methodOf lbServices.DatabaseColumn
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DatabaseColumn` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/DatabaseColumns/:id",
          method: "PUT",
        },
      }
    );


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.PropertyValidation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PropertyValidation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PropertyValidation",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/PropertyValidations/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#prototype$__get__model
         * @methodOf lbServices.PropertyValidation
         * @deprecated Use PropertyValidation.model() instead.
         *
         * @description
         *
         * Fetches belongsTo relation model
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        "prototype$__get__model": {
          url: urlBase + "/PropertyValidations/:id/model",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#create
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/PropertyValidations",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#upsert
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/PropertyValidations",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#exists
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/PropertyValidations/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#findById
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/PropertyValidations/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#find
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/PropertyValidations",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#findOne
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/PropertyValidations/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#updateAll
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/PropertyValidations/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#deleteById
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/PropertyValidations/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#count
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/PropertyValidations/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#prototype$updateAttributes
         * @methodOf lbServices.PropertyValidation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PropertyValidation` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/PropertyValidations/:id",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.validations.findById() instead.
        "::findById::ModelDefinition::validations": {
          url: urlBase + "/ModelDefinitions/:id/validations/:fk",
          method: "GET",
        },

        // INTERNAL. Use ModelDefinition.validations.destroyById() instead.
        "::destroyById::ModelDefinition::validations": {
          url: urlBase + "/ModelDefinitions/:id/validations/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use ModelDefinition.validations.updateById() instead.
        "::updateById::ModelDefinition::validations": {
          url: urlBase + "/ModelDefinitions/:id/validations/:fk",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.validations() instead.
        "::get::ModelDefinition::validations": {
          url: urlBase + "/ModelDefinitions/:id/validations",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use ModelDefinition.validations.create() instead.
        "::create::ModelDefinition::validations": {
          url: urlBase + "/ModelDefinitions/:id/validations",
          method: "POST",
        },

        // INTERNAL. Use ModelDefinition.validations.destroyAll() instead.
        "::delete::ModelDefinition::validations": {
          url: urlBase + "/ModelDefinitions/:id/validations",
          method: "DELETE",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.PropertyValidation#model
         * @methodOf lbServices.PropertyValidation
         * @deprecated Use PropertyValidation.model() instead.
         *
         * @description
         *
         * Fetches belongsTo relation model
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - WorkspaceEntity id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelProperty` object.)
         * </em>
         */
        R.model = function() {
          var TargetResource = $injector.get("ModelProperty");
          var action = TargetResource["::get::PropertyValidation::model"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ViewDefinition
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ViewDefinition` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ViewDefinition",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ViewDefinitions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#prototype$__findById__children
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.findById() instead.
         *
         * @description
         *
         * Find a related item by id for children
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for children
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "prototype$__findById__children": {
          url: urlBase + "/ViewDefinitions/:id/children/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#prototype$__destroyById__children
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for children
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for children
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__children": {
          url: urlBase + "/ViewDefinitions/:id/children/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#prototype$__updateById__children
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for children
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for children
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "prototype$__updateById__children": {
          url: urlBase + "/ViewDefinitions/:id/children/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#prototype$__get__children
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children() instead.
         *
         * @description
         *
         * Queries children of ViewDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "prototype$__get__children": {
          url: urlBase + "/ViewDefinitions/:id/children",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#prototype$__create__children
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.create() instead.
         *
         * @description
         *
         * Creates a new instance in children of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "prototype$__create__children": {
          url: urlBase + "/ViewDefinitions/:id/children",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#prototype$__delete__children
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.destroyAll() instead.
         *
         * @description
         *
         * Deletes all children of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__children": {
          url: urlBase + "/ViewDefinitions/:id/children",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#create
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ViewDefinitions",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#upsert
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ViewDefinitions",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#exists
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/ViewDefinitions/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#findById
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ViewDefinitions/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#find
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/ViewDefinitions",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#findOne
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ViewDefinitions/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#updateAll
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ViewDefinitions/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#deleteById
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ViewDefinitions/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#count
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/ViewDefinitions/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#prototype$updateAttributes
         * @methodOf lbServices.ViewDefinition
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ViewDefinitions/:id",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.views.findById() instead.
        "::findById::ModelDefinition::views": {
          url: urlBase + "/ModelDefinitions/:id/views/:fk",
          method: "GET",
        },

        // INTERNAL. Use ModelDefinition.views.destroyById() instead.
        "::destroyById::ModelDefinition::views": {
          url: urlBase + "/ModelDefinitions/:id/views/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use ModelDefinition.views.updateById() instead.
        "::updateById::ModelDefinition::views": {
          url: urlBase + "/ModelDefinitions/:id/views/:fk",
          method: "PUT",
        },

        // INTERNAL. Use ModelDefinition.views() instead.
        "::get::ModelDefinition::views": {
          url: urlBase + "/ModelDefinitions/:id/views",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use ModelDefinition.views.create() instead.
        "::create::ModelDefinition::views": {
          url: urlBase + "/ModelDefinitions/:id/views",
          method: "POST",
        },

        // INTERNAL. Use ModelDefinition.views.destroyAll() instead.
        "::delete::ModelDefinition::views": {
          url: urlBase + "/ModelDefinitions/:id/views",
          method: "DELETE",
        },

        // INTERNAL. Use ViewDefinition.children.findById() instead.
        "::findById::ViewDefinition::children": {
          url: urlBase + "/ViewDefinitions/:id/children/:fk",
          method: "GET",
        },

        // INTERNAL. Use ViewDefinition.children.destroyById() instead.
        "::destroyById::ViewDefinition::children": {
          url: urlBase + "/ViewDefinitions/:id/children/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use ViewDefinition.children.updateById() instead.
        "::updateById::ViewDefinition::children": {
          url: urlBase + "/ViewDefinitions/:id/children/:fk",
          method: "PUT",
        },

        // INTERNAL. Use ViewDefinition.children() instead.
        "::get::ViewDefinition::children": {
          url: urlBase + "/ViewDefinitions/:id/children",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use ViewDefinition.children.create() instead.
        "::create::ViewDefinition::children": {
          url: urlBase + "/ViewDefinitions/:id/children",
          method: "POST",
        },

        // INTERNAL. Use ViewDefinition.children.destroyAll() instead.
        "::delete::ViewDefinition::children": {
          url: urlBase + "/ViewDefinitions/:id/children",
          method: "DELETE",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#children
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children() instead.
         *
         * @description
         *
         * Queries children of ViewDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        R.children = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::get::ViewDefinition::children"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#children.create
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.create() instead.
         *
         * @description
         *
         * Creates a new instance in children of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        R.children.create = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::create::ViewDefinition::children"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#children.destroyAll
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.destroyAll() instead.
         *
         * @description
         *
         * Deletes all children of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.children.destroyAll = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::delete::ViewDefinition::children"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#children.destroyById
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for children
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for children
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.children.destroyById = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::destroyById::ViewDefinition::children"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#children.findById
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.findById() instead.
         *
         * @description
         *
         * Find a related item by id for children
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for children
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        R.children.findById = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::findById::ViewDefinition::children"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ViewDefinition#children.updateById
         * @methodOf lbServices.ViewDefinition
         * @deprecated Use ViewDefinition.children.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for children
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for children
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ViewDefinition` object.)
         * </em>
         */
        R.children.updateById = function() {
          var TargetResource = $injector.get("ViewDefinition");
          var action = TargetResource["::updateById::ViewDefinition::children"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.DataSourceDefinition
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DataSourceDefinition` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DataSourceDefinition",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DataSourceDefinitions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$testConnection
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{boolean=}` -
         */
        "prototype$testConnection": {
          url: urlBase + "/DataSourceDefinitions/:id/testConnection",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$discoverModelDefinition
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `modelName` – `{string=}` -
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{boolean=}` -
         */
        "prototype$discoverModelDefinition": {
          url: urlBase + "/DataSourceDefinitions/:id/discoverModelDefinition",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$getSchema
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `models` – `{array=}` -
         */
        "prototype$getSchema": {
          url: urlBase + "/DataSourceDefinitions/:id/getSchema",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$__findById__models
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.findById() instead.
         *
         * @description
         *
         * Find a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "prototype$__findById__models": {
          url: urlBase + "/DataSourceDefinitions/:id/models/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$__destroyById__models
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "prototype$__destroyById__models": {
          url: urlBase + "/DataSourceDefinitions/:id/models/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$__updateById__models
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "prototype$__updateById__models": {
          url: urlBase + "/DataSourceDefinitions/:id/models/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$__get__models
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models() instead.
         *
         * @description
         *
         * Queries models of DataSourceDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "prototype$__get__models": {
          url: urlBase + "/DataSourceDefinitions/:id/models",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$__create__models
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.create() instead.
         *
         * @description
         *
         * Creates a new instance in models of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "prototype$__create__models": {
          url: urlBase + "/DataSourceDefinitions/:id/models",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$__delete__models
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.destroyAll() instead.
         *
         * @description
         *
         * Deletes all models of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__models": {
          url: urlBase + "/DataSourceDefinitions/:id/models",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$__get__facet
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.facet() instead.
         *
         * @description
         *
         * Fetches belongsTo relation facet
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "prototype$__get__facet": {
          url: urlBase + "/DataSourceDefinitions/:id/facet",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#create
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/DataSourceDefinitions",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#upsert
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/DataSourceDefinitions",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#exists
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/DataSourceDefinitions/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#findById
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/DataSourceDefinitions/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#find
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/DataSourceDefinitions",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#findOne
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/DataSourceDefinitions/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#updateAll
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/DataSourceDefinitions/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#deleteById
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/DataSourceDefinitions/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#count
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/DataSourceDefinitions/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#prototype$updateAttributes
         * @methodOf lbServices.DataSourceDefinition
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataSourceDefinition` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/DataSourceDefinitions/:id",
          method: "PUT",
        },

        // INTERNAL. Use Facet.datasources.findById() instead.
        "::findById::Facet::datasources": {
          url: urlBase + "/Facets/:id/datasources/:fk",
          method: "GET",
        },

        // INTERNAL. Use Facet.datasources.destroyById() instead.
        "::destroyById::Facet::datasources": {
          url: urlBase + "/Facets/:id/datasources/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Facet.datasources.updateById() instead.
        "::updateById::Facet::datasources": {
          url: urlBase + "/Facets/:id/datasources/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Facet.datasources() instead.
        "::get::Facet::datasources": {
          url: urlBase + "/Facets/:id/datasources",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Facet.datasources.create() instead.
        "::create::Facet::datasources": {
          url: urlBase + "/Facets/:id/datasources",
          method: "POST",
        },

        // INTERNAL. Use Facet.datasources.destroyAll() instead.
        "::delete::Facet::datasources": {
          url: urlBase + "/Facets/:id/datasources",
          method: "DELETE",
        },

        // INTERNAL. Use ModelConfig.dataSource() instead.
        "::get::ModelConfig::dataSource": {
          url: urlBase + "/ModelConfigs/:id/dataSource",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#models
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models() instead.
         *
         * @description
         *
         * Queries models of DataSourceDefinition.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        R.models = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::get::DataSourceDefinition::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#models.create
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.create() instead.
         *
         * @description
         *
         * Creates a new instance in models of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        R.models.create = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::create::DataSourceDefinition::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#models.destroyAll
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.destroyAll() instead.
         *
         * @description
         *
         * Deletes all models of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.models.destroyAll = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::delete::DataSourceDefinition::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#models.destroyById
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        R.models.destroyById = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::destroyById::DataSourceDefinition::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#models.findById
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.findById() instead.
         *
         * @description
         *
         * Find a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        R.models.findById = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::findById::DataSourceDefinition::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#models.updateById
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.models.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for models
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `fk` – `{*}` - Foreign key for models
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ModelConfig` object.)
         * </em>
         */
        R.models.updateById = function() {
          var TargetResource = $injector.get("ModelConfig");
          var action = TargetResource["::updateById::DataSourceDefinition::models"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DataSourceDefinition#facet
         * @methodOf lbServices.DataSourceDefinition
         * @deprecated Use DataSourceDefinition.facet() instead.
         *
         * @description
         *
         * Fetches belongsTo relation facet
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Definition id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Facet` object.)
         * </em>
         */
        R.facet = function() {
          var TargetResource = $injector.get("Facet");
          var action = TargetResource["::get::DataSourceDefinition::facet"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = '$LoopBack$' + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = '$LoopBack$' + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          if (LoopBackAuth.accessTokenId) {
            config.headers.authorization = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])
  .factory('LoopBackResource', [ '$resource', function($resource) {
    return function(url, params, actions) {
      var resource = $resource(url, params, actions);

      // Angular always calls POST on $save()
      // This hack is based on
      // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
      resource.prototype.$save = function(success, error) {
        // Fortunately, LoopBack provides a convenient `upsert` method
        // that exactly fits our needs.
        var result = resource.upsert.call(this, {}, this, success, error);
        return result.$promise || result;
      }

      return resource;
    };
  }]);

})(window, window.angular);
