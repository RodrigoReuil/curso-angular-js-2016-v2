'use strict';

/**
 * @ngdoc service
 * @name spaApp.proveedores
 * @description
 * # proveedores
 * Factory in the spaApp.
 */
angular.module('spaApp')
  .factory('provServ', function ($http, $q, $log) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      all: function(){
        var prom = $q.defer();

        $http({
           method: 'GET',
           url: 'http://localhost:9001/proveedores'
        }).then(function(res){
          $log.log("GET /proveedores ", res.data);
          prom.resolve(res.data);
        }, function(err){
          prom.reject(err);
        });

        return prom.promise;
      },
      delete: function(id){
        var prom = $q.defer();

        $http({
           method: 'DELETE',
           url: 'http://localhost:9001/proveedores/'+id
        }).then(function(res){
          $log.log("DELETE /proveedores ", res.data);
          prom.resolve(res.data);
        }, function(err){
          prom.reject(err);
        });

        return prom.promise;
      },
      create: function(datos){
        var prom = $q.defer();

        $http({
           method: 'POST',
           data: datos,
           url: 'http://localhost:9001/proveedores'
        }).then(function(res){
          $log.log("POST /proveedores ", res.data);
          prom.resolve(res.data);
        }, function(err){
          prom.reject(err);
        });

        return prom.promise;

      },
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
