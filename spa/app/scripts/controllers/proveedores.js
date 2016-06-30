'use strict';

/**
 * @ngdoc function
 * @name spaApp.controller:ProveedoresCtrl
 * @description
 * # ProveedoresCtrl
 * Controller of the spaApp
 */
angular.module('spaApp')
  .controller('ProveedoresCtrl', function ($scope, provServ, toastr) {

    $scope.proveedores = [];
    $scope.prov = {};

    provServ.all().then(function(res){
      $scope.proveedores = res;
    });

    $scope.altaProveedor = function() {
      // Crear 1 proveedor
      provServ.create($scope.prov).then(function(res){
        toastr.success('Alta', 'Proveedor guardado!');
        $scope.prov.nombre = '';
      });
    }

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
