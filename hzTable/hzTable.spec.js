import HzTableModule from './hzTable'
import HzTableController from './hzTable.controller.js';
import HzTableComponent from './hzTable.component.js';
import HzTableTemplate from './hzTable.html';

describe('HzTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HzTableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HzTableController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(HzTableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HzTableComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HzTableTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HzTableController);
      });
  });
});
