(function() {
  var app = angular.module('pubStore', []);

  app.controller('ArchiveController', function(){
    this.publications = publications;
    this.filterYear = "all";
    this.filtertype = "";
    this.filterKeywords = "";
    this.showByYear = 0;
    this.showByAuthor = 0;
    this.showByKeywords = 0;

    //Need to account for combo searches like year + type
    //Also need to show only one result pane at a time
    //Probably also want a default search in there
    //future nice to haves:
    //keep publications in a separate json file
    //keep track of views by publication in that file (popularity)
    //Perhaps have default sort action be by popularity
    this.search = function(){
      if ((this.filterYear > 1990) && (this.filterYear < 2020)){
        this.showByYear = 1;
        this.showByAuthor = 0;
        this.showByKeywords = 0;
      }
      if (this.filterType){
        this.showByYear = 0;
        this.showByType = 1;
        this.showByKeywords = 0;
      }
      if (this.filterKeywords){
        this.showByYear = 0;
        this.showByAuthor = 0;
        this.showByKeywords = 1;
      }
    };
  });

  app.controller('FilterController', function(){
    this.filter = "none";

    this.setYear = function(newValue){
      this.filter = "year";
      this.year = newValue;
    };
    this.setType = function(newValue){
      this.filter = "type";
      this.type = newValue;
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


  var publications = [
    {
      "name": "Obesity Is Widespread",
      "description": "Many young kids struggle with poor nutrition and lack of exercise.",
      "author": "Monika Sanchez",
      "year": 2007,
      "type": "Report",
      "documentUrl": "http://jgc.stanford.edu/resources/publications/obesity.pdf",
      "keyword": "",
      "images": [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      "videos": [
        "http://youtu.be/8tbvh8yCOaI"
      ],
      "views": 0
    },
    {
      "name": "Obesity Is Incredibly Widespread",
      "description": "Many elementrayr age kids struggle with poor nutrition and lack of exercise.",
      "author": "Mo Black",
      "year": 2011,
      "type": "Report",
      "documentUrl": "http://jgc.stanford.edu/resources/publications/obesity.pdf",
      "keyword": "",
      "images": [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      "videos": [
        "http://youtu.be/8tbvh8yCOaI"
      ],
      "views": 0
    },
    {
      "name": "Obesity Is So Widespread",
      "description": "Many kids struggle with poor nutrition and lack of exercise.",
      "author": "Murphy Brown",
      "year": 2014,
      "type": "Article",
      "documentUrl": "http://jgc.stanford.edu/resources/publications/obesity.pdf",
      "keyword": "",
      "images": [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      "videos": [
        "http://youtu.be/8tbvh8yCOaI"
      ],
      "views": 0
    }
  ]

})();
