$(function(){
  $(".alert").hide();

  $("#loginBtn").click(function(){
    if(!$(".email input").val()){
      $(".email .alert").show();
    }else{
      $(".email .alert").hide();
    }
    if(!$(".password input").val()){
      $(".password .alert").show();
    }else{
      $(".password .alert").hide();
    }

    if($(".email input").val() == "test@gmail.com" && $(".password input").val() == "123"){
      window.location.href = "Top.html";
    }else{
      $("#message").html("ログインに失敗しました");
    }


  });
});
