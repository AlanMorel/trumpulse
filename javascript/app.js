var trigger = document.querySelector(".trigger");
var header = document.querySelector(".prompt");
var about = document.getElementById("about-modal");
var credits = document.getElementById("credits-modal");

var trumpulseApp = angular.module('trumpulseApp', ['ngRoute', 'ngAnimate', 'angularCSS']);

trumpulseApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    var pages = ["main", "all", "facebook", "twitter"];
    for (var i in pages) {
        $routeProvider.when('/' + pages[i], {
            templateUrl: "pages/" + pages[i] + ".html",
            controller: pages[i],
            css: "stylesheets/" + pages[i] + ".css"
        });
    }
    $routeProvider.when('/:source', {
        templateUrl: 'pages/source.html',
        controller: 'source',
        css: "stylesheets/source.css"
    });
    $locationProvider.hashPrefix('');
}]);

trumpulseApp.controller('main', ['$scope', '$window', function($scope, $window) {
    header.innerHTML = "select your source";
    $scope.sources = $window.sources;
}]);

trumpulseApp.controller('source', ['$scope', '$routeParams', function($scope, $routeParams) {
    var source = sources[$routeParams.source];
    header.innerHTML = source.id.replace(/-/g, " ");
    $scope.articles = data.news[source.id];
}]);

trumpulseApp.controller('all', ['$scope', '$routeParams', function($scope, $routeParams) {
    header.innerHTML = "all articles";
    $scope.articles = allArticles;
}]);

trumpulseApp.controller('facebook', ['$scope', '$http', function($scope, $http) {
    header.innerHTML = "facebook";
    $scope.posts = data.facebook;
}]);

trumpulseApp.controller('twitter', ['$scope', '$http', function($scope, $http) {
    header.innerHTML = "twitter";
    $scope.tweets = data.twitter;
}]);

function close() {
    trigger.checked = false;
}

document.querySelector(".site-wrap").onclick = function(event) {
    if (trigger.checked) {
        event.preventDefault();
        close();
    }
};

window.onhashchange = function(){
  close();
  window.scrollTo(0, 0);
};

document.querySelector(".navigation").onclick = close;

document.getElementById("about").onclick = function() {
    about.style.display = "block";
};

document.getElementById("credits").onclick = function() {
    credits.style.display = "block";
};

var closeButtons = document.querySelectorAll(".close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
        about.style.display = "none";
        credits.style.display = "none";
    });
}

document.getElementById("last-update").innerHTML = function() {
    var date = new Date(data.last_update * 1000);
    var month = date.toLocaleString("en-us", { month: "long" });
    var day = date.getDate();
    var hours = date.getHours() % 12 || 12;
    var minutes = date.getMinutes();
    if (minutes < 10) { minutes = "0" + minutes; }
    var period = date.getHours() >= 12 ? "pm" : "am";
    return month + " " + day + " at " + hours + ":" + minutes + " " + period;
}();

var allArticles = function() {
    var articles = [];
    for (var i in data.news) {
        for (var j in data.news[i]) {
            articles.push(data.news[i][j]);
        }
    }
    return articles;
}();
