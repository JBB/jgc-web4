(function() {
  var app = angular.module('pubStore', []);

  app.controller('ArchiveController', ['$http', function($http){
     var archive = this;
     archive.publications = [ ];
     $http.get('/jgc-web3/publications.json').success(function(data){
       archive.publications = data;
     });
    this.publications = archive.publications;
    this.filterYear = "all";
    this.filterAuthor = "";
    this.filterKeywords = "";
    this.filterDocType = "";
    this.showByYear = 0;
    this.showByDocType = 0;
    this.showByKeywords = 0;

    //Need to account for combo searches like year + author
    //Also need to show only one result pane at a time
    //Probably also want a default search in there
    //future nice to haves:
    //keep publications in a separate json file
    //keep track of views by publication in that file (popularity)
    //Perhaps have default sort action be by popularity
    this.search = function(){
      if ((this.filterYear > 1990) && (this.filterYear < 2020)){
        this.showByYear = 1;
        this.showByDocType = 0;
        this.showByKeywords = 0;
      }
      if (this.filterDocType){
        this.showByYear = 0;
        this.showByDocType = 1;
        this.showByKeywords = 0;
      }
      if (this.filterKeywords){
        this.showByYear = 0;
        this.showByDocType = 0;
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
