import angular from 'angular';
import uiRouter from 'angular-ui-router';
import hzTableComponent from './hzTable.component.js';

let hzTableModule = angular.module('hzTable', [
  uiRouter
])

.component('hzTable', hzTableComponent)

.name;

export default hzTableModule;
