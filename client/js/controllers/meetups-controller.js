app.controller('meetupscontroller',['$scope','$resource' , function  ($scope, $resource) {
	//$scope.meetupscount=15;
//	$scope.meetups= [{name : "ABC"} , {name : "PQR"}]

var Meetup = $resource('/api/meetups');

Meetup.query(function(results){

	$scope.meetups =results;
});    

	$scope.createMeetup = function()
	{
		//$scope.meetups.push({ name: $scope.meetupName});
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save(function(result) {
			$scope.meetups.push(result);
			$scope.meetupName ='';
		});

	}



}])

