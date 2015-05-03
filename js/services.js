(function(window, angular, undefined) {
	var localStorageService = function() {
		
		this.setItem = function(key, value) {
			return window.localStorage && window.localStorage.setItem(key, value);
		};
		
		this.getItem = function(key) {
			return window.localStorage && window.localStorage.getItem(key);
		};
	};
	
	angular.module('root').service('localStorage', [localStorageService]);
})(window, angular);