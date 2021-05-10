$(document).ready(function () {
    $("button").click(function () {
        let countryLink = $("input").val();
        let linkTotal = "https://restcountries.eu/rest/v2/name/" + countryLink;
        console.log(linkTotal);
        $.ajax({
            url: linkTotal,
            success: function (data, status, response) {
                $("#country").text(data[0].name);
                $("#capital").text(data[0].capital);

            }

        });
    });
});