$(function() {

    var $wnd = $(window);
    var $top = $(".page-top");
    var $html = $("html, body");
    var $header = $(".section-header");
    var $menu = $(".main-menu");
    var $loader = $(".preloader");

    $wnd.on('load', function() {        
        $loader.delay(0).fadeOut('slow');    
        
        $(".section-standart .item").equalHeights();
        $(".section-optima .item").equalHeights();
        $(".section-mono .item").equalHeights();
        $(".section-premium .item").equalHeights();
        $(".section-mix .item").equalHeights();
        $(".section-comfort .item").equalHeights();

        $(".aksessuar").equalHeights();
    });

    
    


    $wnd.scroll(function() { onscroll(); });

    var menuTop = $menu.offset().top;

    var onscroll = function() {
        if($wnd.scrollTop() > menuTop) {
            $menu.addClass('fixed');
        } else {
            $menu.removeClass('fixed');
        }

        if($wnd.scrollTop() > $wnd.height()) {
            $top.addClass('active');
        } else {
            $top.removeClass('active');
        }

        // var scrollPos = $wnd.scrollTop() + 88 + 20;

        // $menu.find("a").each(function() {
        //     var link = $(this);
        //     var id = link.attr('href');
        //     var section = $(id);
        //     var sectionTop = section.offset().top;

        //     if(sectionTop <= scrollPos && (sectionTop + section.height()) >= scrollPos) {
        //         link.addClass('active');
        //     } else {
        //         link.removeClass('active');
        //     }
        // });
    }

    onscroll();

    $top.click(function() {
        $html.stop().animate({ scrollTop: 0 }, 'slow', 'swing');
    });

    $hamburger = $(".hamburger");

    $hamburger.click(function() {
        toggleHamburger();
        return false;
    });  

    function toggleHamburger() {
        $this = $hamburger;
        if(!$this.hasClass("is-active")) {
            $this.addClass('is-active');
            $menu.slideDown('700');
        } else {
            $this.removeClass('is-active');
            $menu.slideUp('700');
        }
    }

    $(".main-menu a").click(function(e) {
        e.preventDefault();
        var $href = $(this).attr('href');
        if($href.length > 0) {
            var top = $href.length == 1 ? 0 : $($href).offset().top - 88;
            $html.stop().animate({ scrollTop: top }, "slow", "swing");
            // toggleHamburger();
        }
    });

    

    $(".modal-open").click(function() {
        $(".modal").fadeIn(500);
    });

    $(".modal").click(function() {
        $(this).fadeOut(500);        

        var $phone = $(this).find('.phone');
        $phone.removeClass('error');
        $phone.val('');
    });

    $(".modal-content").click(function(e) {
        e.stopPropagation();
    });

    $(".modal-close").click(function() {
        $(this).closest('.modal').fadeOut(500);

        var $phone = $(this).siblings('.phone');
        $phone.removeClass('error');
        $phone.val('');
    });

    $(".modal-submit").click(function(e) {
        e.preventDefault();
        var $phone = $(this).siblings('.phone');

        if($phone.length && !$phone.val()) {
            $phone.addClass('error');
        } else {
            $phone.removeClass('error');
            $phone.val('');
            $(this).closest('.modal').fadeOut(500);
        }
    });

    $(".phone").mask("+7 (999) 999 99 99", {
        completed: function() {
            $(this).removeClass('error');
        }
    });    

    $(".carousel-ekskursia").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        smartSpeed: 500,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        navText: ['', '']
    });

    $(".carousel-doctor").owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        loop: true,
        smartSpeed: 500,
        margin: 0,
        // stagePadding: 30,
        // autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        navText: ['', ''],
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 }          
        },
    });



});
    