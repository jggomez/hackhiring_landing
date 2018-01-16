$(function () {
    function getDateNow() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear;

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '-' + dd + '-' + yyyy;
        return today;
    }

    $("#contactForm input,#contactForm select").jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var select1 = $("select#select1").val();
            var select2 = $("select#select2").val();
            var select3 = $("select#select3").val();
            var select4 = $("select#select4").val();
            var select5 = $("select#select5").val();
            var name = $("input#name").val();
            var lastname = $("input#lastname").val();
            var email = $("input#email").val();
            var wichTecnology = $("input#wichTecnology").val();
            var company = $("input#company").val();
            var needs = $("input#needs").val();
            var salary = $("input#salary").val();
            $this = $("#sendInformationButton");
            $this.prop("disabled", true);

            let database = firebase.database();

            database.ref("contactenos").push().set({
                select1:select1,
                select2:select2,
                select3:select3,
                select4:select4,
                select5:select5,
                name: name,
                lastname: lastname,
                email: email,
                wichTecnology: wichTecnology,
                company: company,
                needs: needs,
                salary: salary,
                fecha: getDateNow()
            });

            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#success > .alert-success')
                .append("<strong>Tu contacto ha sido enviado. Gracias</strong>");
            $('#success > .alert-success')
                .append('</div>');
            $('#contactForm').trigger("reset");

            $this.prop("disabled", false);

        },
        filter: function () {
            return $(this).is(":visible");
        },
    });
});