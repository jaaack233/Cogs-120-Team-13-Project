/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("sidebar").style.width = "50%";
}
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("sidebar").style.width = "0%";
}

// functions for countdown

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

$(".roller li").click(function(){
  const dis = $(this).position().top;
  if (dis===60) {
    alert($(this).text());
  } else {
    alert("bad");
  }
});