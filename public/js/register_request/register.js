$(() => {

    $("#sendInformationButton").click(sendInformationButton);

    function sendInformationButton() {
        let time = $("#selectTime").val();
        let technologyDev = $("#selectTechnology").val();
        let name = $("#name").val();

        let requestDev = new RequestDeveloper();

        requestDev.save({
            time,
            technologyDev,
            name
        });

        
    }



});