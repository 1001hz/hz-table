import angular from 'angular';
import uiRouter from 'angular-ui-router';
import hzTableRowComponent from './hzTableRow.component.js';

let hzTableRowModule = angular.module('hzTableRow', [
  uiRouter
])

.component('hzTableRow', hzTableRowComponent)

.name;

export default hzTableRowModule;
