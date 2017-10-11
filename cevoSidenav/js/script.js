$(document).ready(function() {

  jQuery('span').click( function(e) {
      jQuery('.collapse').collapse('hide');
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
});
