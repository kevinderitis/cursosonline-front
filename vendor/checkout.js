var errorValidEmail = false;
var email = jQuery('#email');
var hint = jQuery("#hint");

email.on('blur', function () {
    hint.css('display', 'none').empty(); // hide hint initially
    error = false;
    jQuery(this).mailcheck({
        suggested: function (element, suggestion) {
            if (!hint.html()) {
                // misspell - display hint element
                var suggestion = "Quisiste decir <span class='suggestion'>" +
                        "<span class='address'>" + suggestion.address + "</span>"
                        + "@<a href='#' class='domain'>" + suggestion.domain +
                        "</a></span>?";

                email.addClass("error");
                errorValidEmail = true;
                hint.html(suggestion).fadeIn(150);
            } else {
                // Subsequent errors
                jQuery(".address").html(suggestion.address);
                jQuery(".domain").html(suggestion.domain);
                email.addClass("error");
                errorValidEmail = true;
            }
        }
    });
});

hint.on('click', '.domain', function () {
    // Display with the suggestion and remove the hint
    email.val(jQuery(".suggestion").text());
    hint.fadeOut(200, function () {
        jQuery(this).empty();
        email.removeClass("error");
        errorValidEmail = false;
    });
    return false;
});



jQuery.extend(jQuery.validator.messages, {
    required: "Campo requerido.",
    email: "Ingrese Email válido."
});

$(document).ready(function () {
    $('#spinnerloading').hide();
    $('#proceder_pago').click(function (event) {
        event.preventDefault();


        var error = false;
        var wizard = $("#procederPagoForm");

        if (!wizard.validate({errorPlacement: function (error, element) {}}).element("#nombre")) {
            error = true;
        }

        if (!wizard.validate({errorPlacement: function (error, element) {}}).element("#apellido")) {
            error = true;
        }

        if (!wizard.validate({errorPlacement: function (error, element) {}}).element("#celular")) {
            error = true;
        }

        //if(!wizard.validate({errorPlacement: function (error, element) {}}).element( "#email" )){ 
        //	error=true;
        //}

        if (email.val() == '')
        {
            error == true;
            email.removeClass("valid");
            email.addClass("error");
        } else
        {
            email.removeClass("error");
            email.addClass("valid");
        }


        if (errorValidEmail == false)
        {
            if (email.val() == '')
            {
                error == true;
                email.removeClass("valid");
                email.addClass("error");
            } else
            {
                email.removeClass("error");
                email.addClass("valid");
            }
        }

        if (error == false && errorValidEmail == false && email.val() != '')
        {
            $('#spinnerloading').show();
            str = '';
            $.ajax(
                    {
                        url: "realizarVenta.php",
                        type: "get",
                        data: {
                            nombre: $('#nombre').val(),
                            apellido: $('#apellido').val(),
                            celular: $('#celular').val(),
                            email: $('#email').val(),
                            curso: $('#curso').val(),
                        },
                        success: function (response) {
                            window.location.href = response;
                        },
                        error: function (xhr) {
                            alert(xhr);
                        }
                    });
        }
    });

})


document.getElementById("submitButton").addEventListener("click", function() {
	var emailInput = document.getElementById("emailInput");
    var email = emailInput.value;

    if (!emailInput.checkValidity()) {
        emailInput.classList.add("is-invalid");
        alert('El email ingresado no es valido.')
        return;
    }

    console.log(email)
    // fetch("URL_DE_TU_API", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ email: email })
    // })
    // .then(response => response.json())
    // .then(data => {
        
    // })
    // .catch(error => {
    //     console.error("Error:", error);
    // });
});