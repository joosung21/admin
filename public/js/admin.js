// Bootstrap Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// GDS Review Textarea Auto Height
$(document).ready(function() {
  $('.wrap').on( 'keyup', 'textarea', function (e){
    $(this).css('height', 'auto' );
    $(this).height( this.scrollHeight );
  });
  $('.wrap').find( 'textarea' ).keyup();
});