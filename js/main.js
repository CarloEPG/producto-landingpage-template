(function() {
  "use strict";

  // Initiate the wowjs
    new WOW().init();

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

    /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();




})()