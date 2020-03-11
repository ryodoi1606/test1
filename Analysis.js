$(function(){
  let frame = [];
  frame.length = 10;

  let uScore = [];
  uScore.length = 21;

  let sum = [];
  sum.length = 10;

  $(".form1 input").keyup(function(){
    uScore[0] = $("#score11").val();
      if(uScore[0] == "x"){
        $("#score12").hide();
      }else{
        $("#score12").show();
      }
    uScore[2] = $("#score21").val();
      if(uScore[2] == "x"){
        $("#score22").hide();
      }else{
        $("#score22").show();
    }
    uScore[4] = $("#score31").val();
      if(uScore[4] == "x"){
        $("#score32").hide();
      }else{
        $("#score32").show();
    }
    uScore[6] = $("#score41").val();
      if(uScore[6] == "x"){
        $("#score42").hide();
      }else{
        $("#score42").show();
    }
    uScore[8] = $("#score51").val();
      if(uScore[8] == "x"){
        $("#score52").hide();
      }else{
        $("#score52").show();
    }
    uScore[10] = $("#score61").val();
      if(uScore[10] == "x"){
        $("#score62").hide();
      }else{
        $("#score62").show();
    }
    uScore[12] = $("#score71").val();
     if(uScore[12] == "x"){
      $("#score72").hide();
    }else{
      $("#score72").show();
    }
    uScore[14] = $("#score81").val();
     if(uScore[14] == "x"){
      $("#score82").hide();
    }else{
      $("#score82").show();
    }
    uScore[16] = $("#score91").val();
     if(uScore[16] == "x"){
      $("#score92").hide();
    }else{
      $("#score92").show();
    }


  });

  $("#calc").click(function(){

    if($("#score11").val() == "x"){
      uScore[0] = "x";
      }else{
        uScore[0] = Number($("#score11").val());
      }

      if($("#score12").val() == "/"){
        uScore[1] = "/";
      }else{
        uScore[1] = Number($("#score12").val());
      }

      if($("#score21").val() == "x"){
        uScore[2] = "x";
      }else{
        uScore[2] = Number($("#score21").val());
      }

      if($("#score22").val() == "/"){
        uScore[3] = "/";
      }else{
        uScore[3] = Number($("#score22").val());
      }

      if($("#score31").val() == "x"){
        uScore[4] = "x";
      }else{
        uScore[4] = Number($("#score31").val());
      }

      if($("#score32").val() == "/"){
        uScore[5] = "/";
      }else{
        uScore[5] = Number($("#score32").val());
      }

      if($("#score41").val() == "x"){
        uScore[6] = "x";
      }else{
        uScore[6] = Number($("#score41").val());
      }

      if($("#score42").val() == "/"){
        uScore[7] = "/";
      }else{
        uScore[7] = Number($("#score42").val());
      }

      if($("#score51").val() == "x"){
        uScore[8] = "x";
      }else{
        uScore[8] = Number($("#score51").val());
      }

      if($("#score52").val() == "/"){
        uScore[9] = "/";
      }else{
        uScore[9] = Number($("#score52").val());
      }

      if($("#score61").val() == "x"){
        uScore[10] = "x";
      }else{
        uScore[10] = Number($("#score61").val());
      }

      if($("#score62").val() == "/"){
        uScore[11] = "/";
      }else{
        uScore[11] = Number($("#score62").val());
      }

      if($("#score171").val() == "x"){
        uScore[12] = "x";
      }else{
        uScore[12] = Number($("#score71").val());
      }

      if($("#score72").val() == "/"){
        uScore[13] = "/";
      }else{
        uScore[13] = Number($("#score72").val());
      }

      if($("#score81").val() == "x"){
        uScore[14] = "x";
      }else{
        uScore[14] = Number($("#score81").val());
      }

      if($("#score82").val() == "/"){
        uScore[15] = "/";
      }else{
        uScore[15] = Number($("#score82").val());
      }

      if($("#score91").val() == "x"){
        uScore[16] = "x";
      }else{
        uScore[16] = Number($("#score91").val());
      }

      if($("#score92").val() == "/"){
        uScore[17] = "/";
      }else{
        uScore[17] = Number($("#score92").val());
      }

      if($("#score101").val() == "x"){
        uScore[18] = "x";
      }else{
        uScore[18] = Number($("#score101").val());
      }

      if($("#score102").val() == "x"){
        uScore[19] = "x";
      }else if($("#score102").val() == "/"){
        uScore[19] = "/";
      }else{
        uScore[19] = Number($("#score102").val());
      }

      if($("#score103").val() == "x"){
        uScore[20] = "x";
      }else if($("#score103").val() == "/"){
        uScore[20] = "/";
      }else{
        uScore[20] = Number($("#score103").val());
      }
      //フレーム毎の加点計算
      for(let i = 0; i<=7 ; i++){
	       if(uScore[i*2] == 'x'){
		         if(uScore[i*2+2] == 'x'){
			            if(uScore[i*2+4] == 'x'){
			                 frame[i] = 30;
			                  }else{
			                       frame[i] = 20 + uScore[i*2+4];
			                        }
		     }else if(uScore[i*2+3] == '/'){
		         frame[i] = 20;
		         }else{
		             frame[i] = 10 + uScore[i*2+2] + uScore[i*2+3];
		             }
	       }else if(uScore[i*2+1] == '/'){
		         if(uScore[i*2+2] == 'x'){
		             frame[i] = 20;
		         }else{
		             frame[i] = 10 + uScore[i*2+2];
		             }
	              }else{
	                 frame[i] = uScore[i*2] + uScore[i*2+1];
	                }
                }

        if(uScore[16] == 'x'){
	         if(uScore[18] == 'x'){
		           if(uScore[19] == 'x'){
		               frame[8] = 30;
		       }else{
		           frame[8] = 20 + uScore[19];
		           }
	            }else if(uScore[19] == '/'){
	               frame[8] = 20;
	              }else{
	                 frame[8] = 10 + uScore[18] + uScore[19];
	                }
                }else if(uScore[17] == '/'){
	                 if(uScore[18] == 'x'){
	                    frame[8] = 20;
	                   }else{
	                      frame[8] = 10 + uScore[18];
	                     }
                     }else{
                       frame[8] = uScore[16] + uScore[17];
                     }

        if(uScore[18] == 'x'){
	         if(uScore[19] == 'x'){
		           if(uScore[20] == 'x'){
		               frame[9] = 30;
		               }else{
		                   frame[9] = 20 + uScore[20];
		                   }
	         }else if(uScore[19] == '/'){
	              frame[9] = 20;
	              }else{
	              frame[9] = 10 + uScore[19] + uScore[20];
	               }
            }else if(uScore[19] == '/'){
	              if(uScore[20] == 'x'){
	                  frame[9] = 20;
	                  }else{
	                    frame[9] = 10 + uScore[20];
	                     }
             }else{
              frame[9] = uScore[18] + uScore[19];
              }

      sum[0] = frame[0];

      for(let a = 1;a<=9;a++){
      	sum[a] = sum[a-1] + frame[a];
      }

      $("#fr1score").html(sum[0]);
      $("#fr2score").html(sum[1]);
      $("#fr3score").html(sum[2]);
      $("#fr4score").html(sum[3]);
      $("#fr5score").html(sum[4]);
      $("#fr6score").html(sum[5]);
      $("#fr7score").html(sum[6]);
      $("#fr8score").html(sum[7]);
      $("#fr9score").html(sum[8]);
      $("#fr10score").html(sum[9]);


  });

  $(".type1").click(function(){
    if($(this).hasClass("type1")){
      $(this).removeClass("type1").addClass("type2").attr("src","images/fig2.png");
    }else if($(this).hasClass("type2")){
      $(this).removeClass("type2").addClass("type3").attr("src","images/fig3.png");
    }else{
      $(this).removeClass("type3").addClass("type1").attr("src","images/fig.png");
    }
  });

});
