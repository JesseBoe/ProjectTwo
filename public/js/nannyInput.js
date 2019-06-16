// $(document).ready(function() {
//   $("#nanny").change(function() {
//     // bind a function to the change event
//     if ($(this).is(":checked")) {
//       // check if the radio is checked
//       var val = $(this).val(); // retrieve the value
//     } else {
//       val = "family";
//     }

//     $(".waves-light").on("click", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
//       console.log(val);
//     });
//   });
// });

$(document).ready(function() {
  var nanny = document.getElementById("nanny");
  var family = document.getElementById("family");
  function nannyOrFamily() {
    if (nanny.checked) {
      var val = $(this).val();
      console.log(val);
    } else if (family.checked) {
      var val = $(this).val();
      console.log(val);
    }
  }

  $(".waves-light").on("click", function() {
    nannyOrFamily();
  });
});
