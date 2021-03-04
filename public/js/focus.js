
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("sidebar").style.width = "50%";
}
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("sidebar").style.width = "0%";
}

// functions for countdown

$("#btn-no").click(function(){
  $(".modal").css("display", "none");
});

$("#quit").click(function(){
  $(".modal#warning").css("display", "block");
});

$("#break").click(function(){
  if ($("#ticket-num").text()==0 || $("#ticket-num").text()==null) {
    alert("You don't have enough tickets for break.")
  } else {
    $(".modal#rest").css("display", "block");
    $(".circle").css("animation-play-state", "paused");  
  }
});

$("#continue").click(function(){
  $(".circle").css("animation-play-state", "running");
  $(".modal#rest").css("display", "none");
});

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

jQuery(function ($) {
  var fiveMinutes = 60 * 5,
      display = $('#time');
  startTimer(fiveMinutes, display);
});



// functions for tasks

$("ul").on("click","span",function (event){
  $(this).parent().fadeOut(function(){
      $(this).remove();
  });
  event.stopPropagation();
});

$("input[type = 'text']").on("keypress", function(event){
  if(event.which === 13){
      var todoText = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function (){
  $("input[type='text']").fadeToggle(300);
});


$("input[name='ticket_num']").focus(function () {
  setInterval(function(){
    var total = parseInt($('input[name="ticket_val"]').val()) * parseInt($('input[name="ticket_num"]').val());
    $('.box h2').text(total);
  },500);
})

// method for set clock

$("#next").click(function() {
  // data["jic006"]["tasks"].push({});
  const time = {};

  $("#hour li").each(function () {
    const dis = $(this).position().top;
    if (dis==60) {
      time["hour"] = $(this).text();
    //   let tasks = data["jic006"]["tasks"];
    //   tasks[tasks.length - 1]["hour"] = element.text();
    //   time["hour"] = element.text();
    }
  });

  $("#min li").each(function () {
    const dis = $(this).position().top;
    if (dis==60) {
      time["min"] = $(this).text();
    //   let tasks = data["jic006"]["tasks"];
    //   tasks[tasks.length - 1]["min"] = element.text();
    //   time["min"] = element.text();
    }
  });

  console.log(time);
});

