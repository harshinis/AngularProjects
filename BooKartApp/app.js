var myApp = angular.module("myApp",["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider){
    $routeProvider
        .when("/books", {
            templateUrl: "partials/book-list.html",
            controller: "BookListCtrl"
        })
        .when("/kart", {
            templateUrl: "partials/kart-list.html",
            controller: "KartListCtrl"
        })
        .otherwise({
            redirectTo: "/books"
        });
});

myApp.controller("HeaderCtrl", function($scope) {
    $scope.appDetails = {};
    $scope.appDetails.title = "BooKart";
    $scope.appDetails.tagline = "1 million books for you";
});

myApp.factory("bookService", function(){
    var books = [
        {
            imgUrl: "adultery.jpg",
            name: "Adultery",
            price: 205,
            rating: 4,
            binding: "Paperback",
            publisher: "Random House India",
            releaseDate: "12-08-2014",
            details: "The book is written through the main character, Linda, who is a journalist in her mid thirties.  She is married with two children, and she is depressed"
        },
        {
            imgUrl: "geronimo.jpg",
            name: "Geronimo Stilton Spacemice#2 : You're mine, Captain!",
            price: 168,
            rating: 5,
            binding: "Paperback",
            publisher: "Scholastic",
            releaseDate: "01-07-2014",
            details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series!Meet Geronimo Stiltonix:He is a spacemouse -- the Geronimo Stilton of a parallel universe! He is captain of the spaceship MouseStar 1"
        },
        {
            imgUrl: "life-or-death.jpg",
            name: "Life or Death",
            price: 339,
            rating: 4,
            binding: "Paperback",
            publisher: "Hachette",
            releaseDate: "01-04-2014",
            details: "Audie Palmer has spent ten years in a Texas prison after pleading guilty to a robbery in which four people died and seven million dollars went missing. During that time he has suffered repeated beatings, stabbings and threats by inmates and guards, all desperate to answer the same"
        },
        {
            imgUrl: "playing.jpeg",
            name: "Playing It My Way : My Autobiography",
            price: 599,
            rating: 5,
            binding: "Hardcover",
            publisher: "Hodder & Stoughton",
            releaseDate: "01-09-2014",
            details: "This is cricket icon, Sachin Tendulkar's life story in his own words - his journey from a small boy with dreams to becoming a cricket god. His amazing story has now been turned into a major film, A Billion Dreams, in which he stars"
        },
        {
            imgUrl: "the-fault.jpg",
            name: "The fault in our own stars",
            price: 227,
            rating: 4.5,
            binding: "Paperback",
            publisher: "Penguin Books Ltd",
            releaseDate: "25-01-2013",
            details: "The Fault In Our Stars is a fabulous book about a young teenage girl who has been diagnosed with lung cancer and attends a cancer support group. Hazel is 16 and is reluctant to go to the support group, but she soon realises that it was a good idea. Hazel meets a young boy named Augustus Waters"
        },
        {
            imgUrl: "PaperTowns.jpeg",
            name: "Paper Towns",
            price: 124,
            rating: 5,
            binding: "Hardcover",
            publisher: "Universities Press",
            releaseDate: "25-08-2000",
            details: "Young and shy Quentin (Nat Wolff) is in for the night of his life when Margo (Cara Delevingne), the most popular student in high school, recruits him to help her play mischievous pranks on the friends who betrayed her. "
        }
    ];

    return {
        getBooks: function(){
            return books;
        }
    }
});

myApp.factory("kartService", function(){
    var kart = [];

    return {
        getKart: function() {
            return kart;
        },
        addToKart: function(book){
            kart.push(book); 
        },
        buy: function(book) {
            // alert("Thank you"+ book.name);
        }
    }
});

myApp.controller("KartListCtrl", function($scope, kartService) {
    $scope.kart = kartService.getKart();

    $scope.buy = function(book) {
        kartService.buy(book);
    }
});



myApp.controller("BookListCtrl", function($scope, bookService, kartService) {
    
    $scope.books = bookService.getBooks(); 

    $scope.addToKart = function(book) {
        kartService.addToKart(book);
        
    }
});

myApp.filter('discount', function(){
    return function(input, type) {
        var newVal = input / 2;
        return type +newVal;
    }
});

myApp.filter('dollar', function(){
    return function(input) {
        return '$'+input;
    }
});