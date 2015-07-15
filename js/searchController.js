var app1=angular.module('serachApp',[]);

var queryString=window.location.search;
var query=queryString.substring(1);
var vars=query.split('=');

app1.controller('searchController', function($scope,$http) {
	//console.log(forecast);
		$scope.data='';
		$scope.cast=[];
		//$scope.index=0;
		
	$scope.movieList=function(movie){
		console.log("entering");
		console.log(movie);
		
		$http.get('https://api.themoviedb.org/3/search/movie?query='+movie+'&api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {

            	//$localStorage.data1=data;
            	
              $scope.data=data; 
              if($scope.data==null)
              	alert("No data found");


              //alert(data);
            }) 
            .error(function(err) {
            	
            	alert(err);
            
            }); 
		//getMovieData(movie);
	};	

	$scope.load=function(){
		$http.get('https://api.themoviedb.org/3/search/movie?query='+vars[1]+'&api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {

            	//$localStorage.data1=data;
            	
              $scope.data=data; 
              
              //alert(data);
            }) 
            .error(function(err) {
            	
            	alert(err);
            
            });


        
	};

 
});

