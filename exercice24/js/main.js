$(document).ready(function () {
    $("button").click(function () {
        $("#bg").css({ position: "absolute" });
        $("#bg").animate({ right: "100px" });
    });
});