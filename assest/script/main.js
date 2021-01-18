  $(document).ready(function () {
    $(".side-button").click(function() {
      $('.sidebar').toggleClass("open");
      $('#side1').toggleClass("hide-icon");
      $('#side').toggleClass("hide-icon");
      $('.sidebar').toggleClass("fix");
    });
    
  });