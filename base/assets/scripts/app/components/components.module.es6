import ErrorNotFound from './error-not-found/error-not-found.module.es6';

let componentsModule = angular.module('app.components', [
  ErrorNotFound.name,
]);

export default componentsModule;
