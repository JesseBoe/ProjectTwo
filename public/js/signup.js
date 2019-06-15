
$(".next").on("click", function () {
    signupQuestions();
});

var nanny = document.getElementById("nanny");
var family = document.getElementById("family");

function signupQuestions() {
    if (nanny.checked) {
        nannyQuestions();
    }

    if (family.checked) {
        familyQuestions();
    }

    else if (nanny.unchecked || family.unchecked) {
        alert("Please select an option");
    }
};

function nannyQuestions() {
    nannySkills();
};




function nannySkills() {
    var answer = $("<div>");
    $(".question").empty();

    $(".question").text("Let's talk about some of the skills you're good at");

    $(".answer").empty();

    answer.html('<div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="math"><label class="form-check-label" for="math">Math</label></div><div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="reading"><label class="form-check-label" for="reading">Reading</label></div><div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="firstAid"><label class="form-check-label" for="firstAid">First Aid</label></div><div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="music"><label class="form-check-label" for="music">Music</label></div><div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="driving"><label class="form-check-label" for="driving">Driving</label></div><div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="makingMeals"><label class="form-check-label" for="makingMeals">Making Meals</label></div><div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="newbornCare"><label class="form-check-label" for="newbornCare">Newborn Care</label></div><div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="foreignLanguage"><label class="form-check-label" for="foreignLanguage">Foreign Language</label></div><div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="problemSolving"><label class="form-check-label" for="problemSolving">Problem Solving</label></div><div class="form-check form-check-inline"><input type="checkbox" class="form-check-input" id="outdoorActivities"><label class="form-check-label" for="outdoorActivities">Outdoor Activities</label></div>')

    $(".answer").append(answer);

    $(".next").remove();

    var _continue = $("<div>").addClass("btn btn-secondary continue");

    _continue.text("Continue")

    $(".selector").append(_continue);

    $(".continue").on("click", function () {
        nannySummary();
    });
}

function nannySummary() {
    var answer = $("<div>").addClass("expandingArea");

    $(".question").empty();

    $(".question").text("What would you like the families to know about you?");

    $(".answer").empty();

    answer.html('<pre><span></span><br></pre><textarea></textarea>')

    $(".answer").append(answer);

    $(".continue").on("click", function () {
        nannyPay();
    });
}

function makeExpandingArea(container) {
    var area = container.querySelector('textarea');
    var span = container.querySelector('span');
    if (area.addEventListener) {
        area.addEventListener('input', function () {
            span.textContent = area.value;
        }, false);
        span.textContent = area.value;
    } else if (area.attachEvent) {
        // IE8 compatibility
        area.attachEvent('onpropertychange', function () {
            span.innerText = area.value;
        });
        span.innerText = area.value;
    }
    // Enable extra CSS
    container.className += "active";
}
var areas = document.querySelectorAll('.expandingArea');
var l = areas.length; while (l--) {
    makeExpandingArea(areas[l]);
}

function nannyPay() {
    var answer = $("<div>").addClass("slidecontainer");

    $(".question").empty();

    $(".question").text("What is your expected pay");

    $(".answer").empty();

    answer.html('<input type="range" min="10" max="50" value="20" class="slider" id="myRange"><p style="margin-top: 10px">Base pay/hr: <span id="demo"></span></p>')

    $(".answer").append(answer);

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }


}