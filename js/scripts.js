$(document).ready(function() {
  $(".javascript-Q").click(function() {
    $(".javascript-Q").hide();
    $(".javascript-A").show();
  });

  $(".javascript-A").click(function() {
    $(".javascript-A").hide();
    $(".javascript-Q").show();
  });

  $(".operator-Q").click(function() {
    $(".operator-Q").hide();
    $(".operator-A").show();
  });

  $(".operator-A").click(function() {
    $(".operator-A").hide();
    $(".operator-Q").show();
  });

  $(".variable-Q").click(function() {
    $(".variable-Q").hide();
    $(".variable-A").show();
  });

  $(".variable-A").click(function() {
    $(".variable-A").hide();
    $(".variable-Q").show();
  });

  $(".function-Q").click(function() {
    $(".function-Q").hide();
    $(".function-A").show();
  });

  $(".function-A").click(function() {
    $(".function-A").hide();
    $(".function-Q").show();
  });

});
