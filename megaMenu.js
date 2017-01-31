
//Default Functions

var currentWidth = $(window).width();


$( window ).resize(function() {
    currentWidth = $(window).width();

    //shows nav if window resizes to desktop size after toggling hamburger, it could happen!
    if(currentWidth >= 1025){
        $('.main-nav').show();
    };
});


//this adds default active mega li item
firstActive = function(){
    $( ".primary-nav-item > ul > li:first-child" ).each(function() {
        $(this).has( "ul" ).addClass('activeMega');
    });
};
    
firstActive();

//    Checks if primary nav item has children, for mobile nav icons
$( ".primary-nav-item" ).each(function() {
    $(this).has( "ul" ).addClass('hasSubMenu');
});

    
//    Checks if secondary nav item has children, and adds class if it does
$( ".primary-nav-item ul li" ).each(function() {
    $(this).has( "ul" ).addClass('hasMega');
});


//    Hides nav if you click out of nav element
$(document).mouseup(function (e){
    var container = $(".desktopNav");

    if (!container.is(e.target) && container.has(e.target).length === 0 && currentWidth >= 1025){   
            $('.secondary-nav-item').removeClass('activeMega');
            firstActive();
            $('.subMenu').hide();
            $('.primary-nav-item').removeClass('activePrimary');
    }
});


//Desktop nav

$('.primary-nav-item').on('click', function(event) {   
    if ($(this).children('ul').length > 0 && currentWidth >= 1025 ) {
        event.preventDefault();
        $('.primary-nav-item > ul').addClass('subMenu');
        $('.subMenu').hide();
        $(this).find('.subMenu').show();
        $(this).addClass('activePrimary').siblings('li').removeClass('activePrimary');
    }
});

$('.secondary-nav-item').on('click', function(event) {
    if ($(this).children('ul').length > 0 && currentWidth >= 1025) {
        event.preventDefault();
        $(' .secondary-nav-item > ul').addClass('megaMenu');
        $(this).siblings('li').removeClass('activeMega');
        $(this).addClass('activeMega');
    }else{
            // Normal link behaviour
            $(this).parents('.primary-nav-item').addClass('hideActiveArrow');
            $('.primary-nav-item').unbind('click');
    }
});
    
$('.tertiary-nav-item').on('click', function() {
    $('.primary-nav-item').unbind('click');
    $('.secondary-nav-item').unbind('click');
    // Normal link behaviour for Mega Menu item
});



//Mobile Nav

    
$(".jsHamburger").click(function () {
    if (currentWidth <= 1025) {
        $('.main-nav').toggle();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    }
});
    
        
$(".hasSubMenu > a").click(function (event) {
    if(currentWidth <= 1025){
        event.preventDefault();

        $(this).siblings('.submenu').toggle();
        $('.hasSubMenu > a').removeClass('active-dropdown-icon');

        if($(this).siblings('.submenu').is(':visible')  ){
            $('.submenu').hide();
            $(this).siblings('.submenu').show();
            $(this).toggleClass('active-dropdown-icon');

        }
        
    }
});
    
       
$(".secondary-nav-item > a").on('click',function () {
    if ($(this).siblings('ul').length > 0 && currentWidth <= 1025) {
        event.preventDefault();

        $(this).siblings('.hasMega ul').toggle();
        $('.secondary-nav-item > a').removeClass('active-dropdown-icon');

        if( $(this).siblings('.hasMega ul').is(':visible') ){
            $('.hasMega ul').hide();
            $(this).siblings('.hasMega ul').show();
            $(this).toggleClass('active-dropdown-icon');    
        }

    }
});



