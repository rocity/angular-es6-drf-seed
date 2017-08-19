import '../../theme/main.scss';

import 'angular-loading-bar/build/loading-bar.min.css';

import 'jquery';
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';
import 'bootstrap';
import 'angular-ui-bootstrap';
import 'angular-loading-bar';
import ngResource from 'angular-resource';
import ngDialog from 'ng-dialog';
import 'angular-ui-carousel';
import 'ngmap';

import AppComponent from './app.component.es6';
import Components from './components/components.module.es6';


angular.module('app', [
  uirouter,
  ngAnimate,
  ngTouch,
  'ui.bootstrap',
  'angular-loading-bar',
  ngResource,
  ngDialog,
  'ui.carousel',
  'ngMap',

  Components.name,
])

.config(csrfConf)

.config(urlConf)

.run(runConf)

.component('app', AppComponent)
;

function csrfConf($httpProvider) {
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
};

// State Change are now in the Transition Hook API
// https://ui-router.github.io/guide/ng1/migrate-to-1_0#state-change-events
function runConf($rootScope, $injector) {
  'ngInject';

  $rootScope.appInjector = $injector;
}

function urlConf($locationProvider, $urlMatcherFactoryProvider, $urlRouterProvider, cfpLoadingBarProvider) {
  'ngInject';

  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlMatcherFactoryProvider.strictMode(false);

  $urlRouterProvider.otherwise('/error/not-found');

  cfpLoadingBarProvider.includeSpinner = false;
}


