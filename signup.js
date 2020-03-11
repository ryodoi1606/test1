function other() {
  document.getElementById("other1").classList.toggle("other1");
}

$(function(){
  $(".alert").hide();
  $("#pass2").hide();

  $(".btn input").click(function(){

    let confirmOK = true;

    if(!$(".email input").val()){
      $(".email .alert").show();
      confirmOK = false;
    }else{
      $(".email .alert").hide();
    }

    if(!$("#password1").val()){
     $(".password .alert").show();
     confirmOK = false;
   }else{
     $(".password .alert").hide();
   }

    let pas1 = $("#password1").val();
    let pas2 = $("#password2").val();

    if(pas1 != pas2){
      $("#pass2").show();
      confirmOK = false;
    }else{
      $("#pass2").hide();
    }

    if(!$(".name input").val()){
      $(".name .alert").show();
      confirmOK = false;
    }else{
      $(".name .alert").hide();
    }

    let radio = $('input[type = "radio"]:checked').length;
    if(radio == 0){
      $(".gender .alert").show();
      confirmOK = false;
    }else{
      $(".gender .alert").hide();
    }

    if($(".score select").val() == "noneScore"){
      $(".score .alert").show();
      confirmOK = false;
    }else{
      $(".score .alert").hide();
    }

    if($(".throw select").val() == "noneThrow"){
      $(".throw .alert").show();
      confirmOK = false;
    }else{
      $(".throw .alert").hide();
    }

    if(confirmOK == true){
      window.location.href = "confirm.html";
    }
  });
});
