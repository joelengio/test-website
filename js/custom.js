// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("icpf-top-nav");
            // hide btn-to-top
            $("#back-to-top").fadeOut();
            
            

        } else {
            // show nav
            $("nav").addClass("icpf-top-nav");
            // show btn-to-top
            $("#back-to-top").fadeIn();
        }
    });
});
