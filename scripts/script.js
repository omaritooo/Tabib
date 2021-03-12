$(document).on("scroll", function() {
    if($(document).scrollTop() > 100) {
        $(".topnav").addClass(".navbar-default");
    } else {
       $(".topnav").removeClass(".navbar-default");
    }
});