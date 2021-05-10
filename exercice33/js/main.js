$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/france",
            success: function (data, status, response) {
                $("#country").text(data[0].name);
                $("#capital").text(data[0].capital);
            }
        });
    });
});