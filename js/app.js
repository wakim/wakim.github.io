(function(angular, undefined) {
    var app = angular.module('root', []);
    
    function buildEmptyModel() {
        return {title: '', resume: [], jobs: [], personal_projects: [], interests: []};
    }
    
    app.controller('main', ['$scope', '$http', '$sce', "localStorage", function($scope, $http, $sce, localStorageService){
        angular.extend($scope, buildEmptyModel());
        
        $scope.strings = {};
        $scope.moreState = 'More';
        $scope.more = '';
        $scope.currentLang = '';
        
        $scope.setLocale = function(newLang) {
            angular.extend($scope, $scope.model[newLang]);
            angular.extend($scope.strings, $scope.model._strings[newLang]);
            
            $scope.currentLang = newLang;
            $scope.more = $scope.strings[$scope.moreState];
            
            localStorageService.setItem('lang', newLang);
        };
        
        $scope.setModel = function(data) {
            $scope.model = data;
            $scope.globals = data.globals;
            
            $scope.setLocale(localStorageService.getItem('lang') || 'pt');
        };
        
        $scope.toggleMore = function() {
            if($scope.moreState === 'More') {
                $scope.moreState = 'Less';
            } else {
                $scope.moreState = 'More';
            }
            
            $scope.more = $scope.strings[$scope.moreState];
            
            angular.element('#more-wrapper').slideToggle();
        };
        
        $http.get('model-v2.json', { responseType: "json", headers: { "Accept": "application/json;charset=utf-8" } }).success($scope.setModel);
    }]);

    app.filter('trustHtml', ['$sce', function($sce) {
        return function(input) {
            return angular.isString(input) ? $sce.trustAsHtml(input) : input;
        };
    }]);

    app.filter('trustUrl', ['$sce', function($sce) {
        return function(input) {
            return angular.isString(input) ? $sce.trustAsResourceUrl(input) : input;
        };
    }]);

    app.directive('slider', function($timeout) {
        return {
            link: function(scope, element, attr) {
                $timeout(function() {
                    $('.slider').unslider(
                        {
                            autoplay: true,
                        }
                    );
                }, 1);
            }
        }
    });
})(angular);

(function($, undefined) {
    $('a:not(.here)').on('click',
        function(e) {
            var url = this.getAttribute('href');
            if(url !== '#') {
                window.open(url, '_blank');
            }
        }
    );
    
    $(function() {
        var mail = ['.com', 'gmail', '@', '.jraige', 'wakim'];
        $('#mail').attr('href', 'mailto:'.concat(mail.reverse().join('')));
    });
})(jQuery);
