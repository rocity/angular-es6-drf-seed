import notFoundComponent from './error-not-found.component.es6';

let errorNotFoundModule = angular.module('not-found', [])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('notFound', {
      url: '/error/not-found',
      views: {
        'main@': {
          component: 'notFound',
        },
      },
      data: {
        pageTitle: 'Not Found - Error 404'
      }
    })
})

.component('notFound', notFoundComponent)
;

export default errorNotFoundModule;
