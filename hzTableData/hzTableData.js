import angular from 'angular';
import uiRouter from 'angular-ui-router';
import hzTableDataComponent from './hzTableData.component.js';

let hzTableDataModule = angular.module('hzTableData', [
  uiRouter
])

.component('hzTableData', hzTableDataComponent)

.name;

export default hzTableDataModule;
