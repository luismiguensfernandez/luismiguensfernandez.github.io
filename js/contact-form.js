$(function(){
    $('#contactme-form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "https://herhgodaq6.execute-api.eu-west-3.amazonaws.com/DeploymentStage/",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify( { "id": "","fullName": $('#fullName').val(),"email": $('#email').val(),"message": $('#message').val() } ),
            beforeSend: function(data) {
                    $('#contactme-btn').prop('disabled', true);
                    $('#contactme-form :input').prop('disabled', true);
                    $('#contactme-status').html('Sending...').show();
            },
            success: function(data, status, jqXHR) {
                console.log(data);
                if(status === 'success'){
                    $('#contactme-status').text("I will get back to you soon").show();
                    $('#contactme-form :input').removeProp('disabled');
                    $('#contactme-btn').removeProp('disabled');
                }
                else {
                    $('#contactme-status').text('Error. Please try again.').show();
                    $('#contactme-form :input').removeProp('disabled');
                    $('#contactme-btn').removeProp('disabled');
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#contactme-status').text('Error. Please check your network connection and try again.').show();
                $('#contactme-form :input').removeProp('disabled');
                $('#contactme-btn').removeProp('disabled');
            }
        });
    }); 				
});
