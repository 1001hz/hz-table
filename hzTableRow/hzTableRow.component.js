import template from './hzTableRow.html';
import controller from './hzTableRow.controller.js';
import './hzTableRow.scss';

let hzTableRowComponent = {
  restrict: 'E',
  require: {
    parent: '^hzTable'
  },
  bindings: {
    headings: '<'
  },
  template,
  controller,
  transclude: true
};

export default hzTableRowComponent;
