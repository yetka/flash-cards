$(document).ready(function() {

  $(".javascript").click(function() {
    $(".javascript .A").toggle();
    $(".javascript .Q").toggle();
  });

  $(".operator").click(function() {
    $(".operator .Q").toggle();
    $(".operator .A").toggle();
  });


  $(".variable").click(function() {
    $(".variable .Q").toggle();
    $(".variable .A").toggle();
  });


  $(".function").click(function() {
    $(".function .Q").toggle();
    $(".function .A").toggle();
  });


});
