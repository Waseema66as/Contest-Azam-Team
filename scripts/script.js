$("#open-modal").click(function(){
    $(".log-in-modal").toggle();
  });
$("#sign-up-now").click(function(){
  $("#sing_up").toggle();
  $("#log_in").toggle();
  });
$("#log-in-now").click(function(){
  $("#sing_up").toggle();
  $("#log_in").toggle();
  });

$("#bag-button").click(function(){
    $(".bag-cart").toggle();
  });
$("#bag-button1").click(function(){
    $(".bag-cart").toggle();
  });
$("#bag-close").click(function(){
    $(".bag-cart").toggle();
  });
  
  $("#show").click(function(){
    $("p").show();
  });
  $("#Original").click(function(){
    $(".Semi").show();
  });
  $("#original").click(function(){
    $(".original").show();
    $(".semi").hide();
    $(".artificial").hide();
  });
  $("#semi").click(function(){
    $(".original").hide();
    $(".semi").show();
    $(".artificial").hide();
  });
  $("#artificial").click(function(){
    $(".artificial").show();
    $(".semi").hide();
    $(".original").hide();
  });

  $(document).ready(function(){
    $(".semi").hide();
    $(".artificial").hide();
  });

//   original
// semi
// artificial