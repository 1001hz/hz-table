import HzTableRowModule from './hzTableRow'
import HzTableRowController from './hzTableRow.controller.js';
import HzTableRowComponent from './hzTableRow.component.js';
import HzTableRowTemplate from './hzTableRow.html';

describe('HzTableRow', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HzTableRowModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HzTableRowController();
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
      expect(HzTableRowTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HzTableRowComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HzTableRowTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HzTableRowController);
      });
  });
});
