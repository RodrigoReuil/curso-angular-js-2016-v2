'use strict';

describe('Service: Proveedores', function () {

  // load the service's module
  beforeEach(module('angularSiteApp'));

  // instantiate service
  var Proveedores;
  beforeEach(inject(function (_Proveedores_) {
    Proveedores = _Proveedores_;
  }));

  it('should do something', function () {
    expect(!!Proveedores).toBe(true);
  });

});
