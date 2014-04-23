'use strict';

angular.module('fkLoadingApp', [])
    .directive('fkLoading', function() {
        return {
            restrict: 'A',
            template: '<div><span class="fk-ball-1"></span><span class="fk-ball-2"></span><span class="fk-ball-3"></span><span class="fk-ball-4"></span><span class="fk-ball-5"></span><span class="fk-ball-6"></span><span class="fk-ball-7"></span><span class="fk-ball-8"></span></div>',
            replace: true
        }
    });