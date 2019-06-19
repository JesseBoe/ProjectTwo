$(document).ready(function() {
  var nanny = document.getElementById("nanny");
  var family = document.getElementById("family");
  // var skills = document.getElementById("math").checked;

  $(".waves-light").on("click", function() {
    if (nanny.checked) {
      var newNanny = {
        nanny: nanny.checked,
        googleId: "dadda",
        email: "lizeth.veraro@gmail.com",
        name: "liz",
        profilePicture: "g",
        skillsCerts: "a",
        zipCode: "99212",
        bio: "ke",
        basePay: "20",
        hasFinishedSingUp: "true"
      };

      submitNannyInfo(newNanny);
    } else if (family.checked) {
      var isFamily = family.checked;

      console.log(isFamily);
    }
  });
  function submitNannyInfo(post) {
    $.post("/api/nannies", post, function() {
      // window.location.href = "/";
    });
  }
});

$(".skills").on("click", function() {
  var button = $(this);
  button.attr("questionOne");

  console.log(button);
  var math = document.getElementById("math").value;
  console.log(math);

  skills = math + "," + "hr";
});
