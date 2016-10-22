import HzTableDataModule from './hzTableData'
import HzTableDataController from './hzTableData.controller.js';
import HzTableDataComponent from './hzTableData.component.js';
import HzTableDataTemplate from './hzTableData.html';

describe('HzTableData', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HzTableDataModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HzTableDataController();
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
      expect(HzTableDataTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HzTableDataComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HzTableDataTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HzTableDataController);
      });
  });
});
