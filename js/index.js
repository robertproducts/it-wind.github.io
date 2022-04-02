$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#scroll_top").fadeIn(125);
        } else {
            $("#scroll_top").fadeOut(125);
        }
    });

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