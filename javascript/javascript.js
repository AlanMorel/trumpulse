var body    = document.querySelector("body");
var trigger = document.querySelector(".trigger");
var main    = document.querySelector(".main");
var header  = document.querySelector(".prompt");
var about   = document.querySelector("#about-modal");
var credits = document.querySelector("#credits-modal");
var site    = document.querySelector(".site-wrap");

function loadPage() {
    main.style.opacity = 0;
    var hash = location.hash;
    if (!hash) {
        displaySplash();
    } else if (hash.indexOf("main") != -1){
        header.innerHTML = "select your source";
        setTimeout(function() {
            site.style.backgroundColor = "#2f61de";
            renderTemplate(Handlebars.templates.sources, sources);
        }, 750);
    } else if (hash.indexOf("source") != -1){
        var source = sources[hash.substr(8)];
        site.style.backgroundColor = source.color;
        header.innerHTML = source.id.replace(/-/g, " ");
        preload(source.id);
        setTimeout(function() {
            loadSource(source.id);
        }, 750);
    }
}

function preload(id){
    if (id === "facebook"){
        loadFacebookPosts();
    } else if (id === "twitter"){
        loadTweets();
    }
    for (var i in data[id]){
        var image = new Image();
        image.src = data[id][i].urlToImage;
    }
}

function displaySplash() {
    var splash  = document.querySelector(".splash");
    location.hash = "#main";
    setTimeout(function() {
        splash.style.opacity = 0;
    }, 2500);
    setTimeout(function() {
        splash.style.display = "none";
    }, 3500);
}

function loadSource(id) {
    if (id === "twitter" || id === "facebook"){
        return;
    }
    if (id === "all"){
        loadEverything();
    } else {
        renderTemplate(Handlebars.templates.articles, data[id]);
  }
}


function loadEverything() {
  var allArticles = [];
  for(var i in data) {
      var source = data[i];
      for(var j in source) {
        allArticles.push(source[j]);
      }
  }
  renderTemplate(Handlebars.templates.all, allArticles);
}

function loadTweets() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            displayTweets(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", "http://alanmorel.com/trump/twitter.php", true);
    xhttp.send();
}

function loadFacebookPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            displayFacebookPosts(JSON.parse(xhttp.responseText).posts.data);
        }
    };
    xhttp.open("GET", "http://alanmorel.com/trump/facebook.php", true);
    xhttp.send();
}

function displayTweets(tweets) {
    var options = { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
    for(var i in tweets) {
        var date = tweets[i].created_at.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/, "$1 $2 $4 $3 UTC");
        tweets[i].timestamp = new Date(date).toLocaleTimeString("en-us", options);
    }
    renderTemplate(Handlebars.templates.twitter, tweets);
}

function displayFacebookPosts(posts) {
  var options = { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
  for(var i in posts) {
      posts[i].timestamp = new Date(posts[i].created_time).toLocaleTimeString("en-us", options);
      posts[i].post_id = posts[i].id.split("_")[1];
  }
  renderTemplate(Handlebars.templates.facebook, posts);
}

function renderTemplate(template, context){
    main.innerHTML = template(context);
    main.style.opacity = 1;
    scroll(0, 0);
}

function close(){
    trigger.checked = false;
    body.classList.remove("stop-x-scrolling");
}

trigger.onclick = function (){
    body.classList.add("stop-x-scrolling");
};

site.onclick = function(event) {
    if (trigger.checked) {
        event.preventDefault();
        close();
    }
};

document.querySelector(".navigation").onclick = close;

document.getElementById("about").onclick = function() {
    about.style.display = "block";
    body.classList.add("stop-y-scrolling");
};

document.getElementById("credits").onclick = function() {
    credits.style.display = "block";
    body.classList.add("stop-y-scrolling");
};

var closeButtons = document.querySelectorAll(".close");

for (var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener("click", closeModal);
}

function closeModal(){
    about.style.display = "none";
    credits.style.display = "none";
    body.classList.remove("stop-y-scrolling");
}

window.onhashchange = loadPage;

loadPage();
setLastUpdatedTime();

function setLastUpdatedTime(){
    var time = new Date(data.timestamp * 1000);
    var hours = time.getHours() % 12 || 12;
    var minutes = time.getMinutes();
    var period = time.getHours() >= 12 ? "pm" : "am";
    document.getElementById("last-update").innerHTML = hours + ":" + minutes + " " + period;
}
