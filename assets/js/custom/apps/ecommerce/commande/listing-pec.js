"use strict";
var KTAppEcommerceSalesListing = (function () {
  var e,
    t,
    n,
    r,
    o,
    a = (e, n, a) => {
      (r = e[0] ? new Date(e[0]) : null),
        (o = e[1] ? new Date(e[1]) : null),
        $.fn.dataTable.ext.search.push(function (e, t, n) {
          var a = r,
            c = o;
          return (
            (null === a && null === c) ||
            (null === a && c >= u) ||
            (a <= l && null === c) ||
            (a <= l && c >= u)
          );
        }),
        t.draw();
    },
    c = () => {
      e.querySelectorAll(
        '[data-kt-ecommerce-order-filter="delete_row"]'
      ).forEach((e) => {
        e.addEventListener("click", function (e) {
          e.preventDefault();
          const n = e.target.closest("tr"),
            r = n.querySelector(
              '[data-kt-ecommerce-order-filter="order_id"]'
            ).innerText;
          Swal.fire({
            text: "Êtes-vous sûr de vouloir supprimer la commande: " + r + "?",
            icon: "warning",
            showCancelButton: !0,
            buttonsStyling: !1,
            confirmButtonText: "Oui, supprimer!",
            cancelButtonText: "Non, annuler",
            customClass: {
              confirmButton: "btn fw-bold btn-danger",
              cancelButton: "btn fw-bold btn-active-light-primary",
            },
          }).then(function (e) {
            e.value
              ? Swal.fire({
                  text: "Vous avez supprimé " + r + "!.",
                  icon: "success",
                  buttonsStyling: !1,
                  confirmButtonText: "Ok, j'ai compris !",
                  customClass: { confirmButton: "btn fw-bold btn-primary" },
                }).then(function () {
                  t.row($(n)).remove().draw();
                })
              : "cancel" === e.dismiss &&
                Swal.fire({
                  text: r + " n'a pas été supprimé.",
                  icon: "error",
                  buttonsStyling: !1,
                  confirmButtonText: "Ok, j'ai compris !",
                  customClass: { confirmButton: "btn fw-bold btn-primary" },
                });
          });
        });
      });

      // Add event listener for sub-row toggle
      e.querySelectorAll('[data-kt-docs-datatable-subtable="expand_row"]').forEach((toggleBtn) => {
        toggleBtn.addEventListener("click", function () {
          const tr = this.closest("tr");
          const row = t.row(tr);

          if (row.child.isShown()) {
            row.child.hide();
            $(tr).removeClass("shown");
          } else {
            // Fetch or create the content for the sub-row
            const subRowContent = 
              '<table class="table">'+
                '<tr>'+
                  '<td>test002</td>'+
                  '<td>test002</td>'+
                  '<td>test002</td>'+
                  '<td></td>'+
                '</tr>'+
              '</table>'
            ;
            row.child(subRowContent).show();
            $(tr).addClass("shown");
          }
        });
      });
    };

  return {
    init: function () {
      (e = document.querySelector("#kt_ecommerce_sales_table")) &&
        ((t = $(e).DataTable({
          info: !1,
          order: [],
          pageLength: 10,
          columnDefs: [
            { orderable: !1, targets: 0 },
            { orderable: !1, targets: -1 },
          ],
        })).on("draw", function () {
          c();
        }),
        (() => {
          const e = document.querySelector("#kt_ecommerce_sales_flatpickr");
          n = $(e).flatpickr({
            altInput: !0,
            altFormat: "d/m/Y",
            dateFormat: "Y-m-d",
            mode: "range",
            onChange: function (e, t, n) {
              a(e, t, n);
            },
          });
        })(),
        document
          .querySelector('[data-kt-ecommerce-order-filter="search"]')
          .addEventListener("keyup", function (e) {
            t.search(e.target.value).draw();
          }),
        (() => {
          const e = document.querySelector(
            '[data-kt-ecommerce-order-filter="status"]'
          );
          $(e).on("change", (e) => {
            let n = e.target.value;
            "Touts" === n && (n = ""), t.column(7).search(n).draw();
          });
        })(),
        c(),
        document
          .querySelector("#kt_ecommerce_sales_flatpickr_clear")
          .addEventListener("click", (e) => {
            n.clear();
          }));
    },
  };
})();
KTUtil.onDOMContentLoaded(function () {
  KTAppEcommerceSalesListing.init();
});
