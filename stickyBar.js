;(function ($) {
  $.fn.stickyBar = function (options) {
    var settings = $.extend(
      {
        view: window,
        modClass: "sticky",
        offset: {
          top: 0,
          bottom: 0
        }
      },
      options
    );

    var w = $(settings.view),
        inBox = settings.view == window?true:false,
        lastScrollTop = w.scrollTop(),
        wasScrollingDown = true,
        sidebar = this;

    if (sidebar.length > 0) {
      var wrapTop = sidebar.parent().offset().top - (inBox?0:w.offset().top);

      sidebar.addClass(settings.modClass);
      sidebar.css('position','sticky');

      w.scroll(function (event) {
        var windowHeight = w.height(),
            sidebarHeight = sidebar.outerHeight(),
            scrollTop = Math.floor(w.scrollTop()),
            scrollBottom = Math.floor(scrollTop + windowHeight),
            sidebarTop = sidebar.position().top + wrapTop,
            sidebarBottom = Math.floor(sidebarTop + sidebarHeight),
            heightDelta = Math.abs(windowHeight - sidebarHeight),
            scrollDelta = lastScrollTop - scrollTop,
            isScrollingDown = scrollTop > lastScrollTop,
            isWindowLarger = windowHeight > sidebarHeight,
            dragBottomDown = sidebarBottom <= scrollBottom && isScrollingDown,
            dragTopUp = sidebarTop >= scrollTop && !isScrollingDown;

        if (dragBottomDown) {
          if (isWindowLarger) {
            sidebar.css("top", settings.offset.top);
          } else {
            sidebar.css("top", -heightDelta - settings.offset.bottom);
          }
        } else if (dragTopUp) {
          sidebar.css("top", settings.offset.top);
        } else if (sidebar.hasClass(settings.modClass)) {
          var currentTop = parseInt(sidebar.css("top"), 10),
              minTop = -heightDelta,
              scrolledTop = currentTop + scrollDelta,
              isPageAtBottom = scrollTop + windowHeight >= (inBox?$(document).height():w.prop("scrollHeight")),
              newTop = isPageAtBottom ? minTop : scrolledTop;

          sidebar.css("top", newTop);
        }

        lastScrollTop = scrollTop;
        wasScrollingDown = isScrollingDown;
      });
    }
  };
})(jQuery);