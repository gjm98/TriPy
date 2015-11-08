$(document).ready(function() {
    /* Scrolls to the section when clicked */
    var click = false;  

    $('#nav-about').click(function() {
        if (!click) {
            $('html,body').stop().animate({
                scrollTop: $('#about').offset().top
            }, 900, function() {
                click = false;
            });
            click = true;
        }
    });

    $('#nav-work').click(function() {
        if (!click) {
            $('html,body').stop().animate({
                scrollTop: $('#work').offset().top
            }, 900, function() {
                click = false;
            });
            click = true;
        }
    });

    $('#nav-contact').click(function() {
        if (!click) {
            $('html,body').stop().animate({
                scrollTop: $('#contact').offset().top
            }, 900, function() {
                click = false;
            });
            click = true;
        }
    });

    /* Lights up corresponding link in navigator when viewing current section */
    $(window).scroll(function() {
        var top = $(window).scrollTop();
    	var ids = ['about', 'work', 'contact'];
        
        for (var i=0; i < ids.length; i++) {
        	var sectionPos = $('#' + ids[i]).offset().top
        	var sectionHeight = $('#' + ids[i]).height();
            if (top >= sectionPos && top < (sectionPos + sectionHeight)) {
                $('#nav-' + ids[i]).addClass('active');
            }
            else {
                $('#nav-' + ids[i]).removeClass('active');
            }
        }
    });
});
