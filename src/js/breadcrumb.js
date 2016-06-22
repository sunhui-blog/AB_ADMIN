/**
 * Created by sunhui on 2016/6/21.
 */
/*var App = angular.module("App", ['ui.router','ngAnimate','toaster']);*/
/*App.config(function($breadcrumbProvider,$stateProvider) {
    $scope.steps=["step1","step2"];
    $breadcrumbProvider.setOptions({
        template: '<div>My app<span ng-repeat="step in steps"> > {{step.ncyBreadcrumbLabel}}</span></div>'
    /!*    templateUrl: 'templates/breadcrumb.html'*!/
    });
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        ncyBreadcrumb: {
            label: 'Home page' // angular-breadcrumb's configuration
        }
    })
});*/
angular.module('breadcrumb', ['ui.router.state', 'ui.bootstrap', 'ncy-angular-breadcrumb'])
    .config(function($breadcrumbProvider) {
        $breadcrumbProvider.setOptions({
            prefixStateName: 'home',
            template: 'bootstrap3'
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'tpl/policy_list.html',
                ncyBreadcrumb: {
                    label: '策略组'
                }
            })
            .state('policy', {
                url: '/policy',
                templateUrl: 'tpl/add_policy.html',
                ncyBreadcrumb: {
                    label: '增加策略'
                }
            });
        $urlRouterProvider.otherwise('/home');
    });
