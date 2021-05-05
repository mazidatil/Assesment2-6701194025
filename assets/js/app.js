/**
* Template Name: Hexzy - Bootstrap 4 Admin Dashboard
* Author: Themesdesign
* Main Js
*/


/* constants and common elements - for caching */
var Hexzy_VARS = {
    BODY: $("body"),
    WRAPPER: $("#wrapper"),
    LEFT_ITEMS: $(".left ul")
};

!function($) {
    "use strict";

    var Sidemenu = function() {
        this.$body = Hexzy_VARS.BODY,
        this.$openLeftBtn = $(".open-left"),
        this.$menuItem = $("#sidebar-menu a"),
        this.$subDropItem = $(".subdrop"),
        this.$leftMenuToggle = $(".open-left"),
        this.$firstMenuChild = $("#sidebar-menu ul li.has_sub a.active")
    };
    Sidemenu.prototype.openLeftBar = function() {
        Hexzy_VARS.WRAPPER.toggleClass("enlarged");
        Hexzy_VARS.WRAPPER.addClass("forced");

        if (Hexzy_VARS.WRAPPER.hasClass("enlarged") && Hexzy_VARS.BODY.hasClass("fixed-left")) {
            Hexzy_VARS.BODY.removeClass("fixed-left").addClass("fixed-left-void");
        } else if (!Hexzy_VARS.WRAPPER.hasClass("enlarged") && Hexzy_VARS.BODY.hasClass("fixed-left-void")) {
            Hexzy_VARS.BODY.removeClass("fixed-left-void").addClass("fixed-left");
        }

        if (Hexzy_VARS.WRAPPER.hasClass("enlarged")) {
            Hexzy_VARS.LEFT_ITEMS.removeAttr("style");
        } else {
            this.$subDropItem.siblings("ul:first").show();
        }

        toggle_slimscroll(".slimscrollleft");
        Hexzy_VARS.BODY.trigger("resize");
    },
    //menu item click
    Sidemenu.prototype.menuItemClick = function(e) {
        var $this = this;
        if (!Hexzy_VARS.WRAPPER.hasClass("enlarged")) {
            if ($(this).parent().hasClass("has_sub")) {
                e.preventDefault();
            }
            if (!$(this).hasClass("subdrop")) {
                // hide any open menus and remove all other classes
                $("ul", $(this).parents("ul:first")).slideUp(350);
                $("a", $(this).parents("ul:first")).removeClass("subdrop");
                $("#sidebar-menu .float-right i").removeClass("mdi-minus").addClass("mdi-plus");

                // open our new menu and add the open class
                $(this).next("ul").slideDown(350);
                $(this).addClass("subdrop");
                $(".float-right i", $(this).parents(".has_sub:last")).removeClass("mdi-plus").addClass("mdi-minus");
                $(".float-right i", $(this).siblings("ul")).removeClass("mdi-minus").addClass("mdi-plus");
            } else if ($(this).hasClass("subdrop")) {
                $(this).removeClass("subdrop");
                $(this).next("ul").slideUp(350);
                $(".float-right i", $(this).parent()).removeClass("mdi-minus").addClass("mdi-plus");
            }
        }
    },

    //init sidemenu
    Sidemenu.prototype.init = function() {
        var $this = this;
        //bind on click
        $this.$leftMenuToggle.on('click', function (e) {
            e.stopPropagation();
            $this.openLeftBar();
        });

        // LEFT SIDE MAIN NAVIGATION
        $this.$menuItem.on('click', $this.menuItemClick);

        // NAVIGATION HIGHLIGHT & OPEN PARENT
        $this.$firstMenuChild.parents("li:last").children("a:first").addClass("active").trigger("click");

        // activating menu item based on url
        $this.$menuItem.each(function() {
            if (this.href == window.location.href) {
                $(this).addClass("active");
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
                $(this).parent().parent().prev().trigger('click'); // click the item to make it drop
            }
        });
    },

    //init Sidemenu
    $.Sidemenu = new Sidemenu, $.Sidemenu.Constructor = Sidemenu

}(window.jQuery),


function($) {
    "use strict";

    var FullScreen = function() {
        this.$body = Hexzy_VARS.BODY,
        this.$fullscreenBtn = $("#btn-fullscreen")
    };

    //turn on full screen
    // Thanks to http://davidwalsh.name/fullscreen
    FullScreen.prototype.launchFullscreen  = function(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    },
    FullScreen.prototype.exitFullscreen = function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    },
    //toggle screen
    FullScreen.prototype.toggle_fullscreen  = function() {
        var $this = this;
        var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
        if (fullscreenEnabled) {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                $this.launchFullscreen(document.documentElement);
            } else {
                $this.exitFullscreen();
            }
        }
    },
    //init sidemenu
    FullScreen.prototype.init = function() {
        var $this = this;
        //bind
        $this.$fullscreenBtn.on('click', function () {
            $this.toggle_fullscreen();
        });
    },
     //init FullScreen
    $.FullScreen = new FullScreen, $.FullScreen.Constructor = FullScreen

}(window.jQuery),


//main app module
 function($) {
    "use strict";

    var Hexzy = function() {
        this.VERSION = "1.0.0",
        this.AUTHOR = "ThemesDesign",
        this.SUPPORT = "#",
        this.pageScrollElement = "html, body",
        this.$body = Hexzy_VARS.BODY
    };

    //initializing tooltip
    Hexzy.prototype.initTooltipPlugin = function() {
        $.fn.tooltip && $('[data-toggle="tooltip"]').tooltip()
    },

    //initializing popover
    Hexzy.prototype.initPopoverPlugin = function() {
        $.fn.popover && $('[data-toggle="popover"]').popover()
    },

    //initializing nicescroll
    Hexzy.prototype.initNiceScrollPlugin = function() {
        //You can change the color of scroll bar here
        $.fn.niceScroll &&  $(".nicescroll").niceScroll({ cursorcolor: '#9d9ea5', cursorborderradius: '0px'});
    },

     //on doc load
    Hexzy.prototype.onDocReady = function(e) {
        FastClick.attach(document.body);
        Menufunction.push("initscrolls");
        Menufunction.push("changeptype");

        $('.animate-number').each(function () {
            $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-duration")));
        });

        //RUN RESIZE ITEMS
        $(window).resize(debounce(resizeitems, 100));
        Hexzy_VARS.BODY.trigger("resize");

        // Wow - for animation effect
        var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 50, // distance to the element when triggering the animation (default is 0)
                mobile: false        // trigger animations on mobile devices (true is default)
            }
        );
        wow.init();
    },

    //init
    Hexzy.prototype.init = function() {
        var $this = this;
        this.initTooltipPlugin();
        this.initPopoverPlugin();
        this.initNiceScrollPlugin();

        //document load initialization
        $(document).ready($this.onDocReady);
        //init side bar - left
        $.Sidemenu.init();
        //init fullscreen
        $.FullScreen.init();
    },

    $.Hexzy = new Hexzy, $.Hexzy.Constructor = Hexzy

}(window.jQuery),

//initializing main application module
function($) {
    "use strict";
    $.Hexzy.init();
}(window.jQuery);



/* ------------ some utility functions ----------------------- */

var w,h,dw,dh;
var changeptype = function(){
    w = $(window).width();
    h = $(window).height();
    dw = $(document).width();
    dh = $(document).height();

    if (jQuery.browser.mobile === true) {
        Hexzy_VARS.BODY.addClass("mobile").removeClass("fixed-left");
    }

    if (!Hexzy_VARS.WRAPPER.hasClass("forced")) {
        if (w > 1024) {
            Hexzy_VARS.BODY.removeClass("smallscreen").addClass("widescreen");
            Hexzy_VARS.WRAPPER.removeClass("enlarged");
        } else {
            Hexzy_VARS.BODY.removeClass("widescreen").addClass("smallscreen");
            Hexzy_VARS.WRAPPER.addClass("enlarged");
            Hexzy_VARS.LEFT_ITEMS.removeAttr("style");
        }
        if (Hexzy_VARS.WRAPPER.hasClass("enlarged") && Hexzy_VARS.BODY.hasClass("fixed-left")) {
            Hexzy_VARS.BODY.removeClass("fixed-left").addClass("fixed-left-void");
        } else if (!Hexzy_VARS.WRAPPER.hasClass("enlarged") && Hexzy_VARS.BODY.hasClass("fixed-left-void")) {
            Hexzy_VARS.BODY.removeClass("fixed-left-void").addClass("fixed-left");
        }

  }
  toggle_slimscroll(".slimscrollleft");
}


var debounce = function(func, wait, immediate) {
  var timeout, result;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) result = func.apply(context, args);
    return result;
  };
}

function resizeitems(){
  if($.isArray(Menufunction)){
    for (i = 0; i < Menufunction.length; i++) {
        window[Menufunction[i]]();
    }
  }
}

function initscrolls(){
    if(jQuery.browser.mobile !== true){
      //SLIM SCROLL
      $('.slimscroller').slimscroll({
        height: 'auto',
        size: "5px",
        color: '#dee4e8'
      });

      $('.slimscrollleft').slimScroll({
          height: 'auto',
          position: 'right',
          size: "7px",
          color: '#dee4e8',
          wheelStep: 5
      });
  }
}
function toggle_slimscroll(item){
    if(Hexzy_VARS.WRAPPER.hasClass("enlarged")){
      $(item).css("overflow","inherit").parent().css("overflow","inherit");
      $(item). siblings(".slimScrollBar").css("visibility","hidden");
    }else{
      $(item).css("overflow","hidden").parent().css("overflow","hidden");
      $(item). siblings(".slimScrollBar").css("visibility","visible");
    }
}


// for lazy function execution
var Menufunction = [];