// nav section 


$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});


// navbar section end


// price section start 

$(".pricing5 .btn-group .btn").click(function() {
    $(".pricing5 .monthly, .pricing5 .yearly").toggle();
});


// price section end