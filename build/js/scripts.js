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

