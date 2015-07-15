var app1=angular.module('infApp',[]);

var queryString=window.location.search;
var query=queryString.substring(1);
var vars=query.split('=');
//console.log(vars[0]);
app1.controller('infController', function($scope,$http) {
	//console.log(forecast);
		$scope.credits='';
    $scope.general='';
		
		//$scope.index=0;
		
	

	$scope.load=function(){
		$http.get('http://api.themoviedb.org/3/person/'+vars[0]+'?api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {

            	//$localStorage.data1=data;
            	
              $scope.general=data; 
              
              //alert(data);
            }) 
            .error(function(err) {
            	
            	alert(err);
            
            });


        
	};

      $http.get('http://api.themoviedb.org/3/person/'+vars[0]+'/movie_credits?api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {

              //$localStorage.data1=data;
              
              $scope.credits=data; 
              
              //alert(data);
            }) 
            .error(function(err) {
              
              alert(err);
            
            });


        

 
});
