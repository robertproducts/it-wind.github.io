$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#scroll_top").fadeIn(125);
        } else {
            $("#scroll_top").fadeOut(125);
        }
    }
);

    $("#scroll_top").click(function() {
        if (location.hash != "#header") {
            location.hash = "#header";
        }
        $("html, body").animate({
            scrollTop: 0
        }, 5);
        return false;
    });
});

function Save(theme)
{
    var Request = new XMLHttpRequest();
    Request.open("GET", "./themes.php?theme=" + theme, true); //У вас путь может отличаться
    Request.send();
}

var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "styles/light.css";
    let darkTheme = "styles/dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}