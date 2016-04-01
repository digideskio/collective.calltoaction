(function($) {
  "use strict";
  $(document).ready(function() {
    $('.calltoaction-portlet-wrapper').each( function() {
      // Check if the user has already seen this popup.
      var cookiename = $(this).attr('data-cookiename');
      // Note: readCookie and createCookie are defined in
      // Products/CMFPlone/skins/plone_ecmascript/cookie_functions.js
      if (!readCookie(cookiename)) {
        var timeout = $(this).attr('data-timeout');
        var el = $(this);
        setTimeout(
          function(){
            // Overlay adapted from http://jquerytools.github.io/demos/overlay/trigger.html
            el.overlay({
              // custom top position
              top: 260,
              // some mask tweaks suitable for facebox-looking dialogs
              mask: {
                // you might also consider a "transparent" color for the mask
                color: '#fff',
                // load mask a little faster
                loadSpeed: 200,
                // very transparent
                opacity: 0.5
              },
              // disable this for modal dialog-type of overlays
              closeOnClick: true,
              // load it immediately after the construction
              load: true,
            });
            // Set cookie to avoid showing overlay twice to the same
            // user.  We could do this on certain events, but you have
            // to catch them all: onClose of the overlay, clicking on
            // a link in the overlay, etcetera.  Much easier to simply
            // set the cookie at the moment we show the overlay.
            createCookie(cookiename, 'y', 365);
          },
          timeout);
      };
    });
  });
})(jQuery);
