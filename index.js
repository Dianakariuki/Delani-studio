$(document).ready(function () {
    $(".design").click(function(){
        $(".design").slideDown('1500').hide('1000');
        $(".design-one").show('1500');
      });

      $(".design-one").click(function(){
        $(".design-one").slideUp('1500');
        $(".design").slideDown('1500');
      });
//design icon js
      $(".product").click(function(){
        $(".product").slideDown('1500').hide('1000');
        $(".product-one").show('1500');
      });

      $(".product-one").click(function(){
        $(".product-one").slideUp('1500');
        $(".product").slideDown('1500');
      });
      //product icon js 

      $(".development").click(function(){
        $(".development").slideDown('1500').hide('1000');
        $(".dev-one").show('1500');
      });

      $(".dev-one").click(function(){
        $(".dev-one").slideUp('1500');
        $(".development").slideDown('1500');
     });
     //dev icon js
})

//portfolio 
$(document).ready(function () {
    $("#work1").mouseover(function(){
        $("#project-one").show();
      }).mouseout(function(){
        $("#project-one").hide();
      });

      $("#work2").mouseover(function(){
        $("#project-two").show();
      }).mouseout(function(){
        $("#project-two").hide();
      });

      $("#work3").mouseover(function(){
        $("#project-three").show();
      }).mouseout(function(){
        $("#project-three").hide();
      });

      $("#work4").mouseover(function(){
        $("#project-four").show();
      }).mouseout(function(){
        $("#project-four").hide();
      });
    })
    $(document).ready(function () {
      $("#work5").mouseover(function(){
        $("#project-five").show();
      }).mouseout(function(){
        $("#project-five").hide();
      });

      $("#work6").mouseover(function(){
        $("#project-six").show();
      }).mouseout(function(){
        $("#project-six").hide();
      });

      $("#work7").mouseover(function(){
        $("#project-seven").show();
      }).mouseout(function(){
        $("#project-seven").hide();
      });

      $("#work8").mouseover(function(){
        $("#project-eight").show();
      }).mouseout(function(){
        $("#project-eight").hide();
      });
      // contact

      $(document).ready(function(){
        $('#contact').MailChimpForm({
          
            url:'//jqueryscript.us6.list-manage.com/subscribe/post?u=d4d8a0f45ce17e5ef2708771f&amp;id=06a33bc6c9',
          
            fields:'0:EMAIL,1:FULLNAME',
          
            submitSelector:'#submit-form'
          
          });



          $('#contact').MailChimpForm({
            
              url: $form.attr('action'),
            
              fields:'',
            
              inputSelector:'input',
            
              submitSelector:'',
            
              customMessages: {}
            
            });
            
          /*  $("#submit-form").submit(function(event){
               event.preventDefault();
              var name = $("input#f1").val();
              var email = $("input#f2").val();
              var message = $("textarea#f3").val();
              if ($("input#f1").val() && $("input#f2").val()){
                alert (name + ", we have received your message. Thank you for reaching out to us.");
              }
              else {
                alert("Please enter your name and email!");
              }
              
            });*/
      });
      $("#contact").MailChimpForm({
        
          onSubmit: (message) => {
        
           // console.error(message);
          
           alert ( "we have received your message. Thank you for reaching out to us.");
          }
         
        
        
        
        
        });

    });

