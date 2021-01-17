$(document).ready(function () {
    $(".nav-link").hover(function () {
        $(".nav-link.active").addClass("actived");
        $(".nav-link.active").removeClass("active");
    }, function () {
        $(".nav-link.actived").addClass("active");
        $(".nav-link.actived").removeClass("actived");
    });
    $(".user-avatar").hover(function () {
        $(".user-avatar .dropdown-menu").show();
    }, function () {
        $(".user-avatar .dropdown-menu").hide();
    });
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});