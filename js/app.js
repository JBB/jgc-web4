(function() {
  var app = angular.module('pubStore', []);

  app.controller('ArchiveController', ['$http', function($http){
     var archive = this;
     archive.publications = [ ];
     $http.get('/jgc-web4/js/publications.json').success(function(data){
       archive.publications = data;
     });

    this.resetAll = function() {
      this.filterYear = "";
      this.filterAuthor = "";
      this.filterKeywords = "";
      this.filterDocType = "";
      this.filterTopicArea = "";
      this.showInitialState = 1;
      this.showByYear = 0;
      this.showByDocType = 0;
      this.showByTopicArea = 0;
      this.showByKeywords = 0;
      this.showByYearAndTopicArea = 0;
      this.showByYearAndKeyword = 0;
      this.showByTopicAreaAndKeyword = 0;
      this.showByYearAndTopicAreaAndKeyword = 0;
    };
    this.resetAll();

    this.search = function(){
      if ((this.filterYear > 1990) && (this.filterTopicArea) && (this.filterKeywords)){
        this.showInitialState = 0;
        this.showByYearAndTopicAreaAndKeyword = 1;
        this.showByTopicAreaAndKeyword = 0;
        this.showByYearAndKeyword = 0;
        this.showByYearAndTopicArea = 0;
        this.showByYear = 0;
        this.showByTopicArea = 0;
        this.showByKeywords = 0;
      }
      else if ((this.filterTopicArea) && (this.filterKeywords)){
        this.showInitialState = 0;
        this.showByYearAndTopicAreaAndKeyword = 0;
        this.showByTopicAreaAndKeyword = 1;
        this.showByYearAndKeyword = 0;
        this.showByYearAndTopicArea = 0;
        this.showByYear = 0;
        this.showByTopicArea = 0;
        this.showByKeywords = 0;
      }
      else if ((this.filterYear > 1990) && (this.filterKeywords)){
        this.showInitialState = 0;
        this.showByYearAndTopicAreaAndKeyword = 0;
        this.showByTopicAreaAndKeyword = 0;
        this.showByYearAndKeyword = 1;
        this.showByYearAndTopicArea = 0;
        this.showByYear = 0;
        this.showByTopicArea = 0;
        this.showByKeywords = 0;
      }
      else if ((this.filterYear > 1990) && (this.filterTopicArea)){
        this.showInitialState = 0;
        this.showByYearAndTopicAreaAndKeyword = 0;
        this.showByTopicAreaAndKeyword = 0;
        this.showByYearAndKeyword = 0;
        this.showByYearAndTopicArea = 1;
        this.showByYear = 0;
        this.showByTopicArea = 0;
        this.showByKeywords = 0;
      }
      else if ((this.filterYear > 1990) && (this.filterYear < 2020)){
        this.showInitialState = 0;
        this.showByYearAndTopicAreaAndKeyword = 0;
        this.showByTopicAreaAndKeyword = 0;
        this.showByYearAndKeyword = 0;
        this.showByYearAndTopicArea = 0;
        this.showByYear = 1;
        this.showByTopicArea = 0;
        this.showByKeywords = 0;
      }
      else if (this.filterTopicArea){
        this.showInitialState = 0;
        this.showByYearAndTopicAreaAndKeyword = 0;
        this.showByTopicAreaAndKeyword = 0;
        this.showByYearAndKeyword = 0;
        this.showByYearAndTopicArea = 0;
        this.showByYear = 0;
        this.showByTopicArea = 1;
        this.showByKeywords = 0;
      }
      else if (this.filterKeywords){
        this.showInitialState = 0;
        this.showByYearAndTopicAreaAndKeyword = 0;
        this.showByTopicAreaAndKeyword = 0;
        this.showByYearAndKeyword = 0;
        this.showByYearAndTopicArea = 0;
        this.showByYear = 0;
        this.showByTopicArea = 0;
        this.showByKeywords = 1;
      }
    };
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
    this.setKeywords = function(newValue){
      this.filter = "topicArea";
      this.topicArea = newValue;
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
