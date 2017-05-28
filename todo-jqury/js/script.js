$(document).ready(function() {
  $('form').submit(function (event) {
    let $input = $(event.target).find('input');
    let comment = $input.val();

    if (comment !== '') {
      let html = $('<li>').text(comment);
      html.prependTo('#comments');
      $input.val('');
    }
    return false;
  });

  $('span').on('click', function() {
    let span = document.getElementsByTagName('span');
    span.remove();
  });
});
