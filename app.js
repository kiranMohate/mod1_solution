(function () {
	'use strict';

	angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject =['$scope'];

	function LunchCheckController ($scope){
		$scope.name="";
    $scope.msg="";
		$scope.checkLists = function () {
			if($scope.name !== '') {
				var word = $scope.name.split(',');
				var count =0;
				for(var i =0; i<word.length; i++){
					if(word[i].trim() !=='')
						count++;
				}
				if(count > 0){
					if(count <=3){
						$scope.msg = 'Enjoy!';
					}
					else if(count > 3){
						$scope.msg = 'Too much!'
					}
				}
				else {
						$scope.msg = 'Please enter data first';
				}
			}
			else {
				$scope.msg = 'Please enter data first';
			}
		}

	}
})();
