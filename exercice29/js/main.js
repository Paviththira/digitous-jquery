// i did two method

// $(document).ready(function () {
//     $("button").click(function () {
//         if ($("input.form-control.mb-3").val() > 5) {
//             $("input.form-control.mb-3").addClass("is-invalid");
//         }
//         else if ($("input.form-control.mb-3").val() >= 5) {
//             $("input.form-control.mb-3").addclass("is-invalid");
//         }
//     });
// });

$(function () {
    $("button").click(function () {
        if ($("input").val().length > 5) {
            $("input").addClass("is-valid")
        } else {
            $("input").addClass("is-invalid");
        }
    });
});

// prof Jules explained method
// $(document).ready(function () {
//     $(".btn").click(function() {
//       if($("input").val().length > 5) {
//         $("input").removeClass("is-invalid");
//         $("input").addClass("is-valid");
//       } else {
//         $("input").removeClass("is-valid");
//         $("input").addClass("is-invalid");
//       }
//     });
//   });