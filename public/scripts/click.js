$(document).ready(function() {



    if ( window.location.pathname != '/' ){
        $("a[href*='" + location.pathname + "']").addClass("current");
    }


    $('.update').hide();
    $('.delete').hide();
    $('#subDelete').attr('disabled', true); //disable input
    $('#confirm').click(function () {

        //check if checkbox is checked
        if ($(this).is(':checked')) {
            $('#subDelete').removeAttr('disabled'); //enable input

        } else {
            $('#subDelete').attr('disabled', true); //disable input
        }
    });


    $(".clickable").on("click", function() {
        if ($(this).hasClass('clicked')){
          $(this).removeClass('clicked');
          $('.update').hide();
          $('.delete').hide();
        }
        else{
          $('.clicked').removeClass('clicked');
          $(this).addClass('clicked');

          $('.update').show();
          $('.delete').show();

          var updateName = {};
          updateName.value = $(this).find(".show_name").text();

          var updateDescription = {};
          updateDescription.value = $(this).find(".show_description").text();

          var updateWorkspaceID = {};
          updateWorkspaceID.value = $(this).find(".show_workspace_id_url").text();

          var updateImageUrl = {};
          updateImageUrl.value = $(this).find(".show_image_path").text();

          var updateUsernameToken = {};
          updateUsernameToken.value = $(this).find(".show_username_token").text();

          var updatePasswordToken = {};
          updatePasswordToken.value = $(this).find(".show_password_token").text();

          var showDocumentID = {};
          //showDocumentID.value = $(this).find(".show_document_id").text();
          showDocumentID.value = $.trim($(this).find(".show_document_id").text());

          $('.updateName').attr(updateName);
          $('.updateDescription').attr(updateDescription);
          $('.updateWorkspaceID').attr(updateWorkspaceID);
          $('.updateImageUrl').attr(updateImageUrl);
          $('.updateUsernameToken').attr(updateUsernameToken);
          $('.updatePasswordToken').attr(updatePasswordToken);
          $('.showDocumentID').attr(showDocumentID);

          $('.confirmTick').attr(showDocumentID);

          //$('.showDocumentID').empty();
          //$('.showDocumentID').append(showDocumentID);

        }
    });

});


    /*
    $(".clickable").on("click", function(){
        let botID = $(this).find(".show_id").text();
        botID = botID.trim(); // getting rid of whitespaces at the end of provided _id value; fuck jQuery?
        console.log(botID);

        let postData = {'_id' : botID};

            $.ajax({
              type: 'POST',
              data: postData,
              dataType: "json",
              //success: function() { ... },
              //error: function(){ ... },
              url: '/admin/refresh',
              cache: false
            });

    });


});

*/

// next try: no mongodb fuckery, just transfer the values via jquery DOM manipulation and 'this' keyword
