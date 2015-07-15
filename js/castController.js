var app2=angular.module('castApp',[]);

var queryString=window.location.search;
var query=queryString.substring(1);
var vars=query.split('=');
//console.log(vars[0]);

app2.controller('castController', function($scope,$http) {
	//console.log(forecast);
		$scope.data='';
        $scope.cast='';
         $scope.review='';
         $scope.image=''; 
                     $scope.video='';
                     $scope.similar=''; 
		//$scope.cast=[];
		//$scope.index=0;
		
	$scope.movieList=function(movie){
		//console.log("entering");
		//console.log(movie);
		
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
		$http.get('http://api.themoviedb.org/3/movie/'+vars[0]+'/credits?api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {

                //$localStorage.data1=data;
                
              $scope.cast=data; 


              //alert(data);
            }) 
            .error(function(err) {
                
                alert(err);
            
            });

            $http.get('https://api.themoviedb.org/3/movie/'+vars[0]+'?api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {

                //$localStorage.data1=data;
                
              $scope.general=data; 


              //alert(data);
            }) 
            .error(function(err) {
                
                alert(err);
            
            });


          


            $http.get('https://api.themoviedb.org/3/movie/'+vars[0]+'/videos?api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {

                //$localStorage.data1=data;
                
              $scope.video=data; 
              console.log($scope.video.results[0].key);


              //alert(data);
            }) 
            .error(function(err) {
                
                alert(err);
            
            });


            $http.get('https://api.themoviedb.org/3/movie/'+vars[0]+'/similar?api_key=764de01849b789c217e7f8fc1ce1189b') 
            .success(function(data) {

                //$localStorage.data1=data;
                
              $scope.similar=data; 


              //alert(data);
            }) 
            .error(function(err) {
                
                alert(err);
            
            });


            $http.get('https://api.themoviedb.org/3/movie/'+vars[0]+'/reviews?api_key=764de01849b789c217e7f8fc1ce1189b')

            .success(function(data) {

                //$localStorage.data1=data;
                
              $scope.review=data; 


              //alert(data);
            }) 
            .error(function(err) {
                
                alert(err);
            
            });

            

        
	};

 
});

