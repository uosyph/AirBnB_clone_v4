$(document).ready(function () {
  const amenityName = [];

  $('input:checkbox').click(function () {
    if ($(this).is(':checked')) {
      amenityName.push($(this).attr('data-name'));
    } else {
      const indexName = amenityName.indexOf($(this).attr('data-name'));
      amenityName.splice(indexName, 1);
    }
    $('.amenities h4').text(amenityName.join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', data => {
    if (data.status == 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
