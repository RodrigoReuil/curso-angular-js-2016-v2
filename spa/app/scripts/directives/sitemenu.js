'use strict';

/**
 * @ngdoc directive
 * @name spaApp.directive:siteMenu
 * @description
 * # siteMenu
 */
angular.module('spaApp')
  .directive('siteMenu', function () {
    return {
      templateUrl: 'views/sitemenu.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
