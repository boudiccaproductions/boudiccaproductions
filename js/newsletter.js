(function () {
  "use strict";

  window.ml_webform_success_43827336 = function () {
    document.querySelectorAll(".ml-subscribe-form-43827336").forEach(function (form) {
      var formRow = form.querySelector(".row-form");
      var successRow = form.querySelector(".row-success");

      if (formRow) formRow.style.display = "none";
      if (successRow) {
        successRow.style.display = "block";
        successRow.focus();
      }
    });
  };

  fetch("https://assets.mailerlite.com/jsonp/2514480/forms/193180775836813026/takel");
})();
