(function(angular, undefined) {
    var app = angular.module('root', []);
    
    function buildEmptyModel() {
        return {title: '', resume: [], jobs: [], personal_projects: [], interests: []};
    }
    
    app.controller('main', ['$scope', '$http', '$sce', '$timeout', "localStorage", function($scope, $http, $sce, $timeout, localStorageService){
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

            $timeout(function() {
                $('.owl-carousel').owlCarousel(
                    {
                        loop:true,
                        items: 1,
                        nav: true,
                        dots: true,
                        autoplay: true,
                        autoplayHoverPause: true
                    }
                );
            }, 1);
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
})(angular);

(function($, undefined) {
    var $currentAnimation;

    $('a').on('click',
        function(e) {
            var url = this.getAttribute('href') || '';

            if (url === '') {
                return;
            }

            if(url[0] !== '#') {
                window.open(url, '_blank');
            } else {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                
                if (target.length) {
                    if ($currentAnimation) {
                        $currentAnimation.stop(false, true);
                    }

                    $currentAnimation = $('html, body').animate({
                        scrollTop: target.offset().top - 72
                    }, 1000);

                    return false;
                }
            }
        }
    );
    
    $(function() {
        var mail = ['.com', 'gmail', '@', '.jraige', 'wakim'];
        $('#mail').attr('href', 'mailto:'.concat(mail.reverse().join('')));

        var bar = $('nav').get(0);

        window.addEventListener("scroll", function(event) {
            var top = this.scrollY;
  
            bar.style.boxShadow = 0;

            if (top >= 50) {
                bar.style.boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.26)";
            } else {
                bar.style.boxShadow = "0 0 0 0 transparent";
            }
        }, false);
    });
})(jQuery);
