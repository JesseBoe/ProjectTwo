$(document).ready(function() {
  var whoYouAre = $("[name=sleepy]:checked")
    .val()
    .trim();

  log(whoYouAre);
});
