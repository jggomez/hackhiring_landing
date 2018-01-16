$(function () {

    function getDateNow() {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '-' + dd + '-' + yyyy;
        return today;
    }

    $("#questionForm input,#questionForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            let nombre = $("input#nombrePregunta").val();
            let email = $("input#emailPregunta").val();
            var pregunta = $("textarea#pregunta").val();

            $this = $("#sendQuestionButton");
            $this.prop("disabled", true);

            let database = firebase.database();

            database.ref().child("preguntas").push().set({
                pregunta: pregunta,
                nombre: nombre,
                email: email,
                fecha: getDateNow()
            });

            // Success message
            $('#successQuestion').html("<div class='alert alert-success'>");
            $('#successQuestion > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#successQuestion > .alert-success')
                .append("<strong>Tu pregunta ha sido enviada. Te responderemos lo mas pronto.</strong>");
            $('#successQuestion > .alert-success')
                .append('</div>');
            //clear all fields
            $('#questionForm').trigger("reset");

            $this.prop("disabled", false);

        },
        filter: function () {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});
