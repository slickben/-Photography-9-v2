let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
})

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

  $.widget.bridge('uibutton', $.ui.button)


  $('#content').scrollspy({ target: '#sidebar' })

  
})



// let sidebar = $('#sidebar')

// var instance = OverlayScrollbars(sidebar, {
//   className            : "os-theme-dark",
// });

// {
//   className            : "os-theme-dark",
//   resize               : "none",
//   sizeAutoCapable      : true,
//   clipAlways           : true,
//   normalizeRTL         : true,
//   paddingAbsolute      : false,
//   autoUpdate           : null,
//   autoUpdateInterval   : 33, 
//   updateOnLoad         : ["img"],
//   nativeScrollbarsOverlaid : {
//       showNativeScrollbars   : false,
//       initialize             : true 
//   },
//   overflowBehavior : {
//       x : "scroll",
//       y : "scroll"
//   },
//   scrollbars : {
//       visibility       : "auto",
//       autoHide         : "never",
//       autoHideDelay    : 800,
//       dragScrolling    : true,
//       clickScrolling   : false,
//       touchSupport     : true,
//       snapHandle       : false
//   },
//   textarea : {
//       dynWidth       : false,
//       dynHeight      : false,
//       inheritedAttrs : ["style", "class"]
//   },
//   callbacks : {
//       onInitialized               : null,
//       onInitializationWithdrawn   : null,
//       onDestroyed                 : null,
//       onScrollStart               : null,
//       onScroll                    : null,
//       onScrollStop                : null,
//       onOverflowChanged           : null,
//       onOverflowAmountChanged     : null,
//       onDirectionChanged          : null,
//       onContentSizeChanged        : null,
//       onHostSizeChanged           : null,
//       onUpdated                   : null
//   }
// }

// mySwiper.slideNext();