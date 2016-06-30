'use strict';

/**
 * @ngdoc service
 * @name angularSiteApp.Proveedores
 * @description
 * # Proveedores
 * Factory in the angularSiteApp.
 */
angular.module('angularSiteApp')
  .factory('Proveedores', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
