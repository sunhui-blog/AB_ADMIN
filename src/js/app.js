/**
 * Created by sunhui on 2016/6/22.
 */
var App = angular.module("App", ['ui.router','ui.router.state', 'ui.bootstrap', 'ncy-angular-breadcrumb']);

App.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/content");


    $stateProvider
        .state("content", {
            url: "/content",
            templateUrl: "tpl/nav.html"
        })
        
});

App.config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
        prefixStateName: 'home',
        template: 'bootstrap3'
    });
}).config(function($stateProvider, $urlRouterProvider) {
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
