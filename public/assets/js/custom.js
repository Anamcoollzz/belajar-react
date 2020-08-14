/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";

window.renderDataTable = (el, options = {}) => {
  console.log("Render Datatable in " + el);
  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        if ($.fn.dataTable.isDataTable(el)) {
          const dt = $(el).DataTable();
          resolve(dt);
        } else {
          const dt = $(el).DataTable(options);
          resolve(dt);
        }
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
  return promise;
};

window.destroyDataTable = (datatable) => {
  if (datatable !== null) {
    datatable.destroy();
  }
};

window.showModal = (el) => {
  $(el).modal("show");
};

window.successMessage = (message) => {
  swal("Good Job", message, "success");
};

window.setDataToForm = (form, data) => {
  for (let key of Object.keys(data)) {
    const formInput = $(form).find("#" + key);
    if (formInput.length) {
      console.log("set `" + data[key] + "` to form input with id " + key);
      formInput[0].value = data[key];
    }
  }
  // form.document.getElementById()
};

window.deleteConfirmation = (callback) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this data!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      callback();
    } else {
      swal("Canceled", "Okay, data safe", "info");
    }
  });
};
