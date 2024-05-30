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


    //Custom Cursor
    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor2');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
    });


    //Fog Hero
    VANTA.FOG({
        el: ".intro-about",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x335384,
        midtoneColor: 0x6589bf,
        baseColor: 0x5ba7d1,
        blurFactor: 0.50,
        speed: 1.00,
        zoom: 0.90
      })
