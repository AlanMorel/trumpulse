var trigger = document.querySelector(".trigger");
var header = document.querySelector(".prompt");
var about = document.getElementById("about-modal");
var credits = document.getElementById("credits-modal");

var dateOptions = { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
var trumpulseApp = angular.module('trumpulseApp', ['ngRoute', 'angularCSS']);

trumpulseApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    var pages = ["main", "all", "facebook", "twitter"];
    for (var i in pages) {
        $routeProvider.when('/' + pages[i], {
                templateUrl: "pages/" + pages[i] + ".html",
                controller: pages[i],
                css: "../stylesheets/" + pages[i] + ".css"
        });
    }
    $routeProvider.when('/:source', {
            templateUrl: 'pages/source.html',
            controller: 'source',
            css: "../stylesheets/source.css"
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
    $scope.articles = data[source.id];
}]);

trumpulseApp.controller('all', ['$scope', '$routeParams', function($scope, $routeParams) {
    header.innerHTML = "all";
    $scope.articles = allArticles;
}]);

trumpulseApp.controller('facebook', ['$scope', '$http', function($scope, $http) {
    header.innerHTML = "facebook";
    $http.get('http://alanmorel.com/trump/facebook.php').then(function(response) {
        var posts = response.data.posts.data;
        for (var i in posts) {
            posts[i].timestamp = new Date(posts[i].created_time).toLocaleTimeString("en-us", dateOptions);
            posts[i].post_id = posts[i].id.split("_")[1];
        }
        $scope.posts = posts;
    });
}]);

trumpulseApp.controller('twitter', ['$scope', '$http', function($scope, $http) {
    header.innerHTML = "twitter";
    $http.get('http://alanmorel.com/trump/twitter.php').then(function(response) {
        var tweets = response.data;
        for (var i in tweets) {
            var date = tweets[i].created_at.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/, "$1 $2 $4 $3 UTC");
            tweets[i].timestamp = new Date(date).toLocaleTimeString("en-us", dateOptions);
        }
        $scope.tweets = tweets;
    });
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
    var time = new Date(data.timestamp * 1000);
    var hours = time.getHours() % 12 || 12;
    var minutes = time.getMinutes();
    var period = time.getHours() >= 12 ? "pm" : "am";
    return hours + ":" + minutes + " " + period;
}();

var allArticles = function() {
    var articles = [];
    for (var i in data) {
        for (var j in data[i]) {
            articles.push(data[i][j]);
        }
    }
    return articles;
}();
