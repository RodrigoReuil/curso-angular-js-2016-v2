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

		$scope.buscarProveedores = function(){
			provServ.all().then(function(res){
				$scope.proveedores = res;
			});
		}

		$scope.buscarProveedores();

    $scope.altaProveedor = function() {
      // Crear 1 proveedor
      provServ.create($scope.prov).then(function(res){
        toastr.success('Alta', 'Proveedor guardado!');
        $scope.prov.nombre = '';
      });
    }

    $scope.borrarProveedor = function(id) {
      provServ.delete(id).then(function(res){
        toastr.warning('Baja', 'Proveedor borrado!');
				$scope.buscarProveedores();
      });
    }


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
