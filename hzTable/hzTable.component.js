import template from './hzTable.html';
import controller from './hzTable.controller.js';
import './hzTable.scss';

let hzTableComponent = {
  restrict: 'E',
  bindings: {
    headings: '<'
  },
  template,
  controller,
  transclude: true
};

export default hzTableComponent;
