(function() {
  var app = angular.module('pubStore', []);

  app.config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);    
  }]);

  app.controller('ArchiveController', ['$http','$scope','$location', function($http,$scope,$location){
     var archive = this;
     archive.publications = [ ];
     $http.get('/js/pubs2.json').success(function(data){
       archive.publications = data;
     });
  

    this.resetAll = function() {
      this.filterGeography = "";
      this.filterAuthor = "";
      this.filterKeywords = "";
      this.filterDocType = "";
      this.filterPolicyFocusArea = "";
      this.showInitialState = 1;
      this.showByGeography = 0;
      this.showByDocType = 0;
      this.showByPolicyFocusArea = 0;
      this.showByKeywords = 0;
      this.showByGeographyAndPolicyFocusArea = 0;
      this.showByGeographyAndKeyword = 0;
      this.showByPolicyFocusAreaAndKeyword = 0;
      this.showByGeographyAndPolicyFocusAreaAndKeyword = 0;
    };
    this.resetAll();

    this.search = function(){
      if ((this.filterGeography) && (this.filterPolicyFocusArea) && (this.filterKeywords)){
        this.showInitialState = 0;
        this.showByGeographyAndPolicyFocusAreaAndKeyword = 1;
        this.showByPolicyFocusAreaAndKeyword = 0;
        this.showByGeographyAndKeyword = 0;
        this.showByGeographyAndPolicyFocusArea = 0;
        this.showByGeography = 0;
        this.showByPolicyFocusArea = 0;
        this.showByKeywords = 0;
      }
      else if ((this.filterPolicyFocusArea) && (this.filterKeywords)){
        this.showInitialState = 0;
        this.showByGeographyAndPolicyFocusAreaAndKeyword = 0;
        this.showByPolicyFocusAreaAndKeyword = 1;
        this.showByGeographyAndKeyword = 0;
        this.showByGeographyAndPolicyFocusArea = 0;
        this.showByGeography = 0;
        this.showByPolicyFocusArea = 0;
        this.showByKeywords = 0;
      }
      else if ((this.filterGeography) && (this.filterKeywords)){
        this.showInitialState = 0;
        this.showByGeographyAndPolicyFocusAreaAndKeyword = 0;
        this.showByPolicyFocusAreaAndKeyword = 0;
        this.showByGeographyAndKeyword = 1;
        this.showByGeographyAndPolicyFocusArea = 0;
        this.showByGeography = 0;
        this.showByPolicyFocusArea = 0;
        this.showByKeywords = 0;
      }
      else if ((this.filterGeography) && (this.filterPolicyFocusArea)){
        this.showInitialState = 0;
        this.showByGeographyAndPolicyFocusAreaAndKeyword = 0;
        this.showByPolicyFocusAreaAndKeyword = 0;
        this.showByGeographyAndKeyword = 0;
        this.showByGeographyAndPolicyFocusArea = 1;
        this.showByGeography = 0;
        this.showByPolicyFocusArea = 0;
        this.showByKeywords = 0;
      }
      else if (this.filterGeography){
        this.showInitialState = 0;
        this.showByGeographyAndPolicyFocusAreaAndKeyword = 0;
        this.showByPolicyFocusAreaAndKeyword = 0;
        this.showByGeographyAndKeyword = 0;
        this.showByGeographyAndPolicyFocusArea = 0;
        this.showByGeography = 1;
        this.showByPolicyFocusArea = 0;
        this.showByKeywords = 0;
      }
      else if (this.filterPolicyFocusArea){
        this.showInitialState = 0;
        this.showByGeographyAndPolicyFocusAreaAndKeyword = 0;
        this.showByPolicyFocusAreaAndKeyword = 0;
        this.showByGeographyAndKeyword = 0;
        this.showByGeographyAndPolicyFocusArea = 0;
        this.showByGeography = 0;
        this.showByPolicyFocusArea = 1;
        this.showByKeywords = 0;
      }
      else if (this.filterKeywords){
        this.showInitialState = 0;
        this.showByGeographyAndPolicyFocusAreaAndKeyword = 0;
        this.showByPolicyFocusAreaAndKeyword = 0;
        this.showByGeographyAndKeyword = 0;
        this.showByGeographyAndPolicyFocusArea = 0;
        this.showByGeography = 0;
        this.showByPolicyFocusArea = 0;
        this.showByKeywords = 1;
      }
    };
    var qs = $location.search();
    console.log(qs);
    if ('kw' in qs){
      if (qs['kw'] != ''){ 
        this.filterKeywords = qs['kw'];
        this.search();
      }
    } 
  } ]);



  app.controller('FilterController', function(){
    this.filter = "none";

    this.setYear = function(newValue){
      this.filter = "year";
      this.year = newValue;
    };
    this.setAuthor = function(newValue){
      this.filter = "author";
      this.author = newValue;
    };
    this.setDocType = function(newValue){
      this.filter = "docType";
      this.docType = newValue;
    };
    this.setKeywords = function(newValue){
      this.filter = "keywords";
      this.keywords = newValue;
    };
    this.setGeography = function(newValue){
      this.filter = "geography";
      this.geography = newValue;
    };
    this.setKeywords = function(newValue){
      this.filter = "PolicyFocusArea";
      this.PolicyFocusArea = newValue;
    };
    this.setPopular = function(){ //list by most views
      this.filter = "popular";
    };

    this.isSet = function(filterName){
      return this.filter === filterName;
    };

    this.reset = function(){
      this.filter = "none";
    }; 
  });


})();
