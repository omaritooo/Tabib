$(window).on("scroll", function() {
    if($(window).scrollTop() > 20) {
        $(".topnav").addClass(".navbar-default");
    } else {
       $(".topnav").removeClass(".navbar-default");
    }
});