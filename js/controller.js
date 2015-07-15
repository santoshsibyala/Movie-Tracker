var app=angular.module('myApp',[]);

app.controller('mainController', function($scope,$http) {
	//console.log(forecast);
		$scope.data='';
		
		
	$scope.movieList=function(movie){
		console.log("entering");
		console.log(movie);
		
		$http.get('https://api.themoviedb.org/3/search/movie?query='+movie+'&api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {

            	//$localStorage.data1=data;
            	
              $scope.data=data; 


              //alert(data);
            }) 
            .error(function(err) {
            	
            	alert(err);
            
            }); 
		//getMovieData(movie);
	};	

	$scope.load=function(){


		$http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {
            	
              $scope.newMovies=data; 
            }) 
            .error(function(err) {
            	
            	alert(err);
            
            }); 


		$http.get('https://api.themoviedb.org/3/tv/popular?api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {
            	
              $scope.popularTvShows=data; 

            }) 
            .error(function(err) {
            	
            	alert(err);
            
            }); 
		

	};

	$scope.loadTrailer=function(id){

		$http.get('http://api.themoviedb.org/3/movie/'+id+'/videos?api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {
            	
              $scope.trailerKey=data; 

            }) 
            .error(function(err) {
            	
            	alert(err);
            
            });

	};
 
});

