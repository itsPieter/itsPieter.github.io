$(document).ready(function (){
    $(".adobe").click(function(){
        $(".adobe-list").toggleClass("shown");
    });
    $(".office").click(function(){
        $(".office-list").toggleClass("shown");
    });
    $(".phone").click(function(){
        $(".phone-text").html("<a href='tel:469-877-2832'>(469) 877-2832</a>");
    });
    ScrollReveal().reveal('.info-row');
    ScrollReveal().reveal('.project');

    $(window).scroll(function (){
        if($(document).scrollTop() > 800){
            $("header").addClass('scrolled');
        } else if($(document).scrollTop() < 800){
            $("header").removeClass('scrolled');
        }
        });
    });


    

