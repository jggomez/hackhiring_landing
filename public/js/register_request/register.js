$(() => {

    $("#sendInformationButton").click(sendInformationButton);

    function sendInformationButton() {
        let time = $("#selectTime").val();
        let technologyDev = $("#selectTechnology").val();
        let resource = $("#selectResource").val();
        let nemployees = $("#selectNemployees").val();
        let size = $("#selectSize").val();
        let ubication = $("#selectUbication").val();
        let country = $("#selectCountry").val();
        let name = $("#name").val();
        let lastname = $("#lastname").val();
        let email = $("#email").val();
        let company = $("#company").val();
        let wichTecnology = $("#wichTecnology").val();
        let needs = $("#needs").val();
        let salary = $("#salary").val();
        let benefits = $("#benefits").val();

        if (time!=null & technologyDev != null & resource != null & nemployees != null & size != null
            & ubication != null & country != null & name != "" & lastname != "" & email != "" & company != ""
            & wichTecnology != "" & needs != "" & salary != "" & benefits != "") {
                let requestDev = new RequestDeveloper();
            requestDev.save({
                time,
                technologyDev,
                resource,
                nemployees,
                size,
                ubication,
                country,
                name,
                lastname,
                email,
                company,
                wichTecnology,
                needs,
                salary,
                benefits
            });
            document.getElementById("formulary").reset();
            return false;
        }
        
        
    }
});