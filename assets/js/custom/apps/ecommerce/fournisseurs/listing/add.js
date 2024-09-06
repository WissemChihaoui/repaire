"use strict";
var KTModalCustomersAdd = (function () {
  var t, e, o, n, r, i;
  return {
    init: function () {
      (i = new bootstrap.Modal(
        document.querySelector("#kt_modal_add_customer")
      )),
        (r = document.querySelector("#kt_modal_add_customer_form")),
        (t = r.querySelector("#kt_modal_add_customer_submit")),
        (e = r.querySelector("#kt_modal_add_customer_cancel")),
        (o = r.querySelector("#kt_modal_add_customer_close")),
        (n = FormValidation.formValidation(r, {
          fields: {
            name: {
              validators: {
                notEmpty: { message: "Nom de fournisseur est requis" },
              },
            },
            email: {
              validators: {
                notEmpty: { message: "Email de fournisseur est requis" },
              },
            },
            "phone-mobile": {
              validators: { notEmpty: { message: "Numéro téléphone mobile est requis" } },
            },
           
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
              rowSelector: ".fv-row",
              eleInvalidClass: "",
              eleValidClass: "",
            }),
          },
        })),
        $(r.querySelector('[name="country"]')).on("change", function () {
          n.revalidateField("country");
        }),
        t.addEventListener("click", function (e) {
          e.preventDefault(),
            n &&
              n.validate().then(function (e) {
                console.log("validated!"),
                  "Valid" == e
                    ? (t.setAttribute("data-kt-indicator", "on"),
                      (t.disabled = !0),
                      setTimeout(function () {
                        t.removeAttribute("data-kt-indicator"),
                          Swal.fire({
                            text: "Le formulaire a été envoyé avec succès !",
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, j'ai compris !",
                            customClass: { confirmButton: "btn btn-primary" },
                          }).then(function (e) {
                            e.isConfirmed &&
                              (i.hide(),
                              (t.disabled = !1),
                              (window.location =
                                r.getAttribute("data-kt-redirect")));
                          });
                      }, 2e3))
                    : Swal.fire({
                        text: "Désolé, il semble que des erreurs aient été détectées, veuillez réessayer.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, j'ai compris !",
                        customClass: { confirmButton: "btn btn-primary" },
                      });
              });
        }),
        e.addEventListener("click", function (t) {
          t.preventDefault(),
            Swal.fire({
              text: "Êtes-vous sûr de vouloir annuler ?",
              icon: "warning",
              showCancelButton: !0,
              buttonsStyling: !1,
              confirmButtonText: "Oui, annulez-la !",
              cancelButtonText: "Non, retour",
              customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-active-light",
              },
            }).then(function (t) {
              t.value
                ? (r.reset(), i.hide())
                : "cancel" === t.dismiss &&
                  Swal.fire({
                    text: "Votre formulaire n'a pas été annulé !.",
                    icon: "error",
                    buttonsStyling: !1,
                    confirmButtonText: "Ok, j'ai compris !",
                    customClass: { confirmButton: "btn btn-primary" },
                  });
            });
        }),
        o.addEventListener("click", function (t) {
          t.preventDefault(),
            Swal.fire({
              text: "Êtes-vous sûr de vouloir annuler ?",
              icon: "warning",
              showCancelButton: !0,
              buttonsStyling: !1,
              confirmButtonText: "Oui, annulez-la !",
              cancelButtonText: "Non, retour",
              customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-active-light",
              },
            }).then(function (t) {
              t.value
                ? (r.reset(), i.hide())
                : "cancel" === t.dismiss &&
                  Swal.fire({
                    text: "Votre formulaire n'a pas été annulé !.",
                    icon: "error",
                    buttonsStyling: !1,
                    confirmButtonText: "Ok, j'ai compris !",
                    customClass: { confirmButton: "btn btn-primary" },
                  });
            });
        });
    },
  };
})();
KTUtil.onDOMContentLoaded(function () {
  KTModalCustomersAdd.init();
});
