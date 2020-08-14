import React, { useEffect, useState } from "react";
import endpoint from "../../services/endpoint";
import AddBtn from "../../layouts/button/AddBtn";
import KunInput from "../../layouts/form/KunInput";
import SaveBtn from "../../layouts/button/SaveBtn";
import EditBtn from "../../layouts/button/EditBtn";
import DataTable from "../../layouts/others/DataTable";
import Modal from "../../layouts/others/modal/Modal";
import ModalCloseBtn from "../../layouts/others/modal/ModalCloseBtn";
import ModalFooter from "../../layouts/others/modal/ModalFooter";

export default function UserIndex() {
  // state
  const [data, changeData] = useState([]);
  const [saving, changeSaving] = useState(false);
  const [datatable, changeDatatable] = useState(null);
  const [action, changeAction] = useState("create");
  const [activeData, changeActiveData] = useState({});

  // fetch data from server
  const getData = () => {
    window.destroyDataTable(datatable);
    endpoint
      .getUsers()
      .then((res) => {
        changeData(res.data);
        console.log("Users Data");
        console.log(data);
      })
      .catch((err) => {});
  };

  // mounted
  useEffect(() => {
    getData();
  }, []);

  // on data changed
  useEffect(() => {
    window
      .renderDataTable("#datatable", {
        order: [[0, "desc"]],
      })
      .then((res) => {
        changeDatatable(res);
      });
  }, [data]);

  // show modal create
  const showModalCreate = () => {
    changeAction("create");
    console.log("show modal create");
    window.showModal("#exampleModal");
  };

  // show modal edit
  const showModalEdit = (user) => {
    changeAction("edit");
    changeActiveData(user);
    console.log("show modal edit");
    window.showModal("#exampleModal");
    const form = document.getElementById("actionForm");
    window.setDataToForm(form, user);
  };

  // trigger action store or update
  const triggerAction = () => {
    if (action === "create") {
      storeData();
    } else if (action === "edit") {
      updateData();
    }
  };

  // store data to db
  const storeData = () => {
    const form = document.getElementById("actionForm");
    const bundledData = new FormData(form);
    changeSaving(true);
    setTimeout(() => {
      endpoint
        .storeUser(bundledData)
        .then((res) => {
          window.successMessage("New user success saved");
          getData();
        })
        .catch((err) => {})
        .finally(() => {
          changeSaving(false);
        });
    }, 500);
  };

  // update data to db
  const updateData = () => {
    const user = activeData;
    const form = document.getElementById("actionForm");
    const bundledData = new FormData(form);
    changeSaving(true);
    setTimeout(() => {
      endpoint
        .updateUser(user.id, bundledData)
        .then((res) => {
          window.successMessage("User success updated");
          getData();
        })
        .catch((err) => {})
        .finally(() => {
          changeSaving(false);
        });
    }, 500);
  };

  // delete confirmation
  const deleteConfirmation = (user) => {
    window.deleteConfirmation(() => {
      endpoint
        .deleteUser(user.id)
        .then((res) => {
          window.successMessage("User success deleted");
          getData();
        })
        .catch((err) => {});
    });
  };

  // print to console for this component
  console.log("User Index Component");

  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Users</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Modules</a>
            </div>
            <div className="breadcrumb-item">Users</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Users</h2>
          <p className="section-lead">
            We use 'Users' made by @SpryMedia. You can check the full
            documentation <a href="https://User.net/">here</a>.
          </p>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Users Data</h4>
                  <AddBtn
                    onClick={() => {
                      showModalCreate();
                    }}
                  />
                </div>
                <div className="card-body">
                  <DataTable>
                    <thead>
                      <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Username</th>
                        <th className="text-center">Password</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => {
                        return (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>
                              <EditBtn
                                onClick={() => {
                                  showModalEdit(item);
                                }}
                                onDelete={() => {
                                  deleteConfirmation(item);
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal title="Add New User">
        <div className="modal-body">
          <form id="actionForm">
            <KunInput id="username" />
            <KunInput id="password" type="password" />
          </form>
        </div>
        <ModalFooter>
          <SaveBtn saving={saving} onClick={triggerAction} />
          <ModalCloseBtn />
        </ModalFooter>
      </Modal>
    </div>
  );
}
