import template from './hzTableData.html';
import controller from './hzTableData.controller.js';
import './hzTableData.scss';

let hzTableDataComponent = {
  restrict: 'E',
  require: {
    parent: '^hzTableRow'
  },
  bindings: {
    headings: '<'
  },
  template,
  controller,
  transclude: true
};

export default hzTableDataComponent;
