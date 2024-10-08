"use strict";
var KTAppCalendar = (function () {
  var e,
    t,
    n,
    a,
    o,
    r,
    i,
    l,
    d,
    c, 
    s,
    m,
    u,
    v,
    f,
    p,
    y,
    D,
    k,
    _,
    b,
    g,
    S,
    h,
    T,
    Y,
    w,
    x,
    L,
    E = {
      id: "",
      eventName: "",
      eventDescription: "",
      eventLocation: "",
      startDate: "",
      endDate: "",
      allDay: !1,
    };
  const M = () => {
      (v.innerText = "Ajouter RDV"), u.show();
      const o = f.querySelectorAll('[data-kt-calendar="datepicker"]'),
        i = f.querySelector("#kt_calendar_datepicker_allday");
      i.addEventListener("click", (e) => {
        e.target.checked
          ? o.forEach((e) => {
              e.classList.add("d-none");
            })
          : (l.setDate(E.startDate, !0, "Y-m-d"),
            o.forEach((e) => {
              e.classList.remove("d-none");
            }));
      }),
        C(E),
        D.addEventListener("click", function (o) {
          o.preventDefault(),
            p &&
              p.validate().then(function (o) {
                console.log("validated!"),
                  "Valid" == o
                    ? (D.setAttribute("data-kt-indicator", "on"),
                      (D.disabled = !0),
                      setTimeout(function () {
                        D.removeAttribute("data-kt-indicator"),
                          Swal.fire({
                            text: "Nouvel RDV ajouté au calendrier !",
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "D'accord, compris !",
                            customClass: { confirmButton: "btn btn-primary" },
                          }).then(function (o) {
                            if (o.isConfirmed) {
                              u.hide(), (D.disabled = !1);
                              let o = !1;
                              i.checked && (o = !0),
                                0 === c.selectedDates.length && (o = !0);
                              var d = moment(r.selectedDates[0]).format(),
                                s = moment(
                                  l.selectedDates[l.selectedDates.length - 1]
                                ).format();
                              if (!o) {
                                const e = moment(r.selectedDates[0]).format(
                                    "YYYY-MM-DD"
                                  ),
                                  t = e;
                                (d =
                                  e +
                                  "T" +
                                  moment(c.selectedDates[0]).format(
                                    "HH:mm:ss"
                                  )),
                                  (s =
                                    t +
                                    "T" +
                                    moment(m.selectedDates[0]).format(
                                      "HH:mm:ss"
                                    ));
                              }
                              e.addEvent({
                                id: A(),
                                title: t.value,
                                description: n.value,
                                location: a.value,
                                start: d,
                                end: s,
                                allDay: o,
                              }),
                                e.render(),
                                f.reset();
                            }
                          });
                      }, 2e3))
                    : Swal.fire({
                        text: "Désolé, il semble qu'il y ait des erreurs, veuillez réessayer.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "D'accord, compris !",
                        customClass: { confirmButton: "btn btn-primary" },
                      });
              });
        });
    },
    B = () => {
      var e, t, n;
      w.show(),
        E.allDay
          ? ((e = "All Day"),
            (t = moment(E.startDate).format("Do MMM, YYYY")),
            (n = moment(E.endDate).format("Do MMM, YYYY")))
          : ((e = ""),
            (t = moment(E.startDate).format("Do MMM, YYYY - h:mm a")),
            (n = moment(E.endDate).format("Do MMM, YYYY - h:mm a"))),
        (b.innerText = E.eventName),
        (g.innerText = e),
        (S.innerText = E.eventDescription ? E.eventDescription : "--"),
        (h.innerText = E.eventLocation ? E.eventLocation : "--"),
        (T.innerText = t),
        (Y.innerText = n);
    },
    q = () => {
      x.addEventListener("click", (o) => {
        o.preventDefault(),
          w.hide(),
          (() => {
            (v.innerText = "Edit an Event"), u.show();
            const o = f.querySelectorAll('[data-kt-calendar="datepicker"]'),
              i = f.querySelector("#kt_calendar_datepicker_allday");
            i.addEventListener("click", (e) => {
              e.target.checked
                ? o.forEach((e) => {
                    e.classList.add("d-none");
                  })
                : (l.setDate(E.startDate, !0, "Y-m-d"),
                  o.forEach((e) => {
                    e.classList.remove("d-none");
                  }));
            }),
              C(E),
              D.addEventListener("click", function (o) {
                o.preventDefault(),
                  p &&
                    p.validate().then(function (o) {
                      console.log("validated!"),
                        "Valid" == o
                          ? (D.setAttribute("data-kt-indicator", "on"),
                            (D.disabled = !0),
                            setTimeout(function () {
                              D.removeAttribute("data-kt-indicator"),
                                Swal.fire({
                                  text: "Nouvel RDV ajouté au calendrier !",
                                  icon: "success",
                                  buttonsStyling: !1,
                                  confirmButtonText: "D'accord, compris !",
                                  customClass: {
                                    confirmButton: "btn btn-primary",
                                  },
                                }).then(function (o) {
                                  if (o.isConfirmed) {
                                    u.hide(),
                                      (D.disabled = !1),
                                      e.getEventById(E.id).remove();
                                    let o = !1;
                                    i.checked && (o = !0),
                                      0 === c.selectedDates.length && (o = !0);
                                    var d = moment(r.selectedDates[0]).format(),
                                      s = moment(
                                        l.selectedDates[
                                          l.selectedDates.length - 1
                                        ]
                                      ).format();
                                    if (!o) {
                                      const e = moment(
                                          r.selectedDates[0]
                                        ).format("YYYY-MM-DD"),
                                        t = e;
                                      (d =
                                        e +
                                        "T" +
                                        moment(c.selectedDates[0]).format(
                                          "HH:mm:ss"
                                        )),
                                        (s =
                                          t +
                                          "T" +
                                          moment(m.selectedDates[0]).format(
                                            "HH:mm:ss"
                                          ));
                                    }
                                    e.addEvent({
                                      id: A(),
                                      title: t.value,
                                      description: n.value,
                                      location: a.value,
                                      start: d,
                                      end: s,
                                      allDay: o,
                                    }),
                                      e.render(),
                                      f.reset();
                                  }
                                });
                            }, 2e3))
                          : Swal.fire({
                              text: "Désolé, il semble qu'il y ait des erreurs, veuillez réessayer.",
                              icon: "error",
                              buttonsStyling: !1,
                              confirmButtonText: "D'accord, compris !",
                              customClass: { confirmButton: "btn btn-primary" },
                            });
                    });
              });
          })();
      });
    },
    C = () => {
      (t.value = E.eventName ? E.eventName : ""),
        (n.value = E.eventDescription ? E.eventDescription : ""),
        (a.value = E.eventLocation ? E.eventLocation : ""),
        r.setDate(E.startDate, !0, "Y-m-d");
      const e = E.endDate ? E.endDate : moment(E.startDate).format();
      l.setDate(e, !0, "Y-m-d");
      const o = f.querySelector("#kt_calendar_datepicker_allday"),
        i = f.querySelectorAll('[data-kt-calendar="datepicker"]');
      E.allDay
        ? ((o.checked = !0),
          i.forEach((e) => {
            e.classList.add("d-none");
          }))
        : (c.setDate(E.startDate, !0, "Y-m-d H:i"),
          m.setDate(E.endDate, !0, "Y-m-d H:i"),
          l.setDate(E.startDate, !0, "Y-m-d"),
          (o.checked = !1),
          i.forEach((e) => {
            e.classList.remove("d-none");
          }));
    },
    N = (e) => {
      (E.id = e.id),
        (E.eventName = e.title),
        (E.eventDescription = e.description),
        (E.eventLocation = e.location),
        (E.startDate = e.startStr),
        (E.endDate = e.endStr),
        (E.allDay = e.allDay);
    },
    A = () =>
      Date.now().toString() + Math.floor(1e3 * Math.random()).toString();
  return {
    init: function () {
      const C = document.getElementById("kt_modal_add_event");
      (f = C.querySelector("#kt_modal_add_event_form")),
        (t = f.querySelector('[name="calendar_event_name"]')),
        (n = f.querySelector('[name="calendar_event_description"]')),
        (a = f.querySelector('[name="calendar_event_location"]')),
        (o = f.querySelector("#kt_calendar_datepicker_start_date")),
        (i = f.querySelector("#kt_calendar_datepicker_end_date")),
        (d = f.querySelector("#kt_calendar_datepicker_start_time")),
        (s = f.querySelector("#kt_calendar_datepicker_end_time")),
        (y = document.querySelector('[data-kt-calendar="add"]')),
        (D = f.querySelector("#kt_modal_add_event_submit")),
        (k = f.querySelector("#kt_modal_add_event_cancel")),
        (_ = C.querySelector("#kt_modal_add_event_close")),
        (v = f.querySelector('[data-kt-calendar="title"]')),
        (u = new bootstrap.Modal(C));
      const H = document.getElementById("kt_modal_view_event");
      var F, O, I, R, V, P;
      (w = new bootstrap.Modal(H)),
        (b = H.querySelector('[data-kt-calendar="event_name"]')),
        (g = H.querySelector('[data-kt-calendar="all_day"]')),
        (S = H.querySelector('[data-kt-calendar="event_description"]')),
        (h = H.querySelector('[data-kt-calendar="event_location"]')),
        (T = H.querySelector('[data-kt-calendar="event_start_date"]')),
        (Y = H.querySelector('[data-kt-calendar="event_end_date"]')),
        (x = H.querySelector("#kt_modal_view_event_edit")),
        (L = H.querySelector("#kt_modal_view_event_delete")),
        (F = document.getElementById("kt_calendar_app")),
        (O = moment().startOf("day")),
        (I = O.format("YYYY-MM")),
        (R = O.clone().subtract(1, "day").format("YYYY-MM-DD")),
        (V = O.format("YYYY-MM-DD")),
        (P = O.clone().add(1, "day").format("YYYY-MM-DD")),
        (e = new FullCalendar.Calendar(F, {
          headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          },
          initialDate: V,
          locale:'fr',
          navLinks: !0,
          selectable: !0,
          selectMirror: !0,
          select: function (e) {
            N(e), M();
          },
          eventClick: function (e) {
            N({
              id: e.event.id,
              title: e.event.title,
              description: e.event.extendedProps.description,
              location: e.event.extendedProps.location,
              startStr: e.event.startStr,
              endStr: e.event.endStr,
              allDay: e.event.allDay,
            }),
              B();
          },
          editable: !0,
          dayMaxEvents: !0,
          events: [
            {
              id: A(),
              title: "All Day Event",
              start: I + "-01",
              end: I + "-02",
              description: "Toto lorem ipsum dolor sit incid idunt ut",
              className: "border-success bg-success text-inverse-success",
              location: "Federation Square",
            }
           
          ],
          datesSet: function () {},
        })).render(),
        (p = FormValidation.formValidation(f, {
          fields: {
            calendar_event_name: {
              validators: { notEmpty: { message: "Le nom de l'événement est requis" } },
            },
            calendar_event_start_date: {
              validators: { notEmpty: { message: "La date de début est requise" } },
            },
            calendar_event_end_date: {
              validators: { notEmpty: { message: "La date de fin est requise" } },
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
        (r = flatpickr(o, { enableTime: !1, dateFormat: "Y-m-d" })),
        (l = flatpickr(i, { enableTime: !1, dateFormat: "Y-m-d" })),
        (c = flatpickr(d, {
          enableTime: !0,
          noCalendar: !0,
          dateFormat: "H:i",
        })),
        (m = flatpickr(s, {
          enableTime: !0,
          noCalendar: !0,
          dateFormat: "H:i",
        })),
        q(),
        y.addEventListener("click", (e) => {
          (E = {
            id: "",
            eventName: "",
            eventDescription: "",
            startDate: new Date(),
            endDate: new Date(),
            allDay: !1,
          }),
            M();
        }),
        L.addEventListener("click", (t) => {
          t.preventDefault(),
            Swal.fire({
              text: "Êtes-vous sûr de vouloir supprimer cet événement ?",
              icon: "warning",
              showCancelButton: !0,
              buttonsStyling: !1,
              confirmButtonText: "Oui, supprimez-la !",
              cancelButtonText: "Non, retour",
              customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-active-light",
              },
            }).then(function (t) {
              t.value
                ? (e.getEventById(E.id).remove(), w.hide())
                : "cancel" === t.dismiss &&
                  Swal.fire({
                    text: "Votre RDV n'a pas été supprimé.",
                    icon: "error",
                    buttonsStyling: !1,
                    confirmButtonText: "D'accord, compris !",
                    customClass: { confirmButton: "btn btn-primary" },
                  });
            });
        }),
        k.addEventListener("click", function (e) {
          e.preventDefault(),
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
            }).then(function (e) {
              e.value
                ? (f.reset(), u.hide())
                : "cancel" === e.dismiss &&
                  Swal.fire({
                    text: "Votre formulaire n'a pas été annulé !.",
                    icon: "error",
                    buttonsStyling: !1,
                    confirmButtonText: "D'accord, compris !",
                    customClass: { confirmButton: "btn btn-primary" },
                  });
            });
        }),
        _.addEventListener("click", function (e) {
          e.preventDefault(),
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
            }).then(function (e) {
              e.value
                ? (f.reset(), u.hide())
                : "cancel" === e.dismiss &&
                  Swal.fire({
                    text: "Votre formulaire n'a pas été annulé !.",
                    icon: "error",
                    buttonsStyling: !1,
                    confirmButtonText: "D'accord, compris !",
                    customClass: { confirmButton: "btn btn-primary" },
                  });
            });
        }),
        ((e) => {
          e.addEventListener("hidden.bs.modal", (e) => {
            p && p.resetForm(!0);
          });
        })(C);
    },
  };
})();
KTUtil.onDOMContentLoaded(function () {
  KTAppCalendar.init();
});
