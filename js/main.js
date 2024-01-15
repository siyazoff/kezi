$(document).ready(function () {
  $(".burger").on("click", function () {
    $(".burger").toggleClass("active");
    $(".popup").toggleClass("active");
  });
});
