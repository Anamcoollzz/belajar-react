import React, { useEffect } from "react";
import Stisla from "../layouts/Stisla";

function Datatable() {
  useEffect(() => {
    window.renderDataTable("table");
  }, []);
  return (
    <Stisla active="datatable">
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>DataTables</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Modules</a>
              </div>
              <div className="breadcrumb-item">DataTables</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">DataTables</h2>
            <p className="section-lead">
              We use 'DataTables' made by @SpryMedia. You can check the full
              documentation <a href="https://datatables.net/">here</a>.
            </p>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Basic DataTables</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped" id="table-1">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Task Name</th>
                            <th>Progress</th>
                            <th>Members</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Create a mobile app</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="100%"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  data-width="100%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Wildan Ahdian"
                              />
                            </td>
                            <td>2018-01-20</td>
                            <td>
                              <div className="badge badge-success">
                                Completed
                              </div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Redesign homepage</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="0%"
                              >
                                <div
                                  className="progress-bar"
                                  data-width="0"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-1.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Nur Alpiana"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-3.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Hariono Yusup"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-4.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Bagus Dwi Cahya"
                              />
                            </td>
                            <td>2018-04-10</td>
                            <td>
                              <div className="badge badge-info">Todo</div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Backup database</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="70%"
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  data-width="70%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-1.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Rizal Fakhri"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-2.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Hasan Basri"
                              />
                            </td>
                            <td>2018-01-29</td>
                            <td>
                              <div className="badge badge-warning">
                                In Progress
                              </div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Input data</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="100%"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  data-width="100%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-2.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Rizal Fakhri"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Isnap Kiswandi"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-4.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Yudi Nawawi"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-1.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Khaerul Anwar"
                              />
                            </td>
                            <td>2018-01-16</td>
                            <td>
                              <div className="badge badge-success">
                                Completed
                              </div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Advanced Table</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped" id="table-2">
                        <thead>
                          <tr>
                            <th className="text-center">
                              <div className="custom-checkbox custom-control">
                                <input
                                  type="checkbox"
                                  data-checkboxes="mygroup"
                                  data-checkbox-role="dad"
                                  className="custom-control-input"
                                  id="checkbox-all"
                                />
                                <label
                                  htmlFor="checkbox-all"
                                  className="custom-control-label"
                                >
                                  &nbsp;
                                </label>
                              </div>
                            </th>
                            <th>Task Name</th>
                            <th>Progress</th>
                            <th>Members</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="custom-checkbox custom-control">
                                <input
                                  type="checkbox"
                                  data-checkboxes="mygroup"
                                  className="custom-control-input"
                                  id="checkbox-1"
                                />
                                <label
                                  htmlFor="checkbox-1"
                                  className="custom-control-label"
                                >
                                  &nbsp;
                                </label>
                              </div>
                            </td>
                            <td>Create a mobile app</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="100%"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  data-width="100%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Wildan Ahdian"
                              />
                            </td>
                            <td>2018-01-20</td>
                            <td>
                              <div className="badge badge-success">
                                Completed
                              </div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="custom-checkbox custom-control">
                                <input
                                  type="checkbox"
                                  data-checkboxes="mygroup"
                                  className="custom-control-input"
                                  id="checkbox-2"
                                />
                                <label
                                  htmlFor="checkbox-2"
                                  className="custom-control-label"
                                >
                                  &nbsp;
                                </label>
                              </div>
                            </td>
                            <td>Redesign homepage</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="0%"
                              >
                                <div
                                  className="progress-bar"
                                  data-width="0"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-1.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Nur Alpiana"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-3.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Hariono Yusup"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-4.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Bagus Dwi Cahya"
                              />
                            </td>
                            <td>2018-04-10</td>
                            <td>
                              <div className="badge badge-info">Todo</div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="custom-checkbox custom-control">
                                <input
                                  type="checkbox"
                                  data-checkboxes="mygroup"
                                  className="custom-control-input"
                                  id="checkbox-3"
                                />
                                <label
                                  htmlFor="checkbox-3"
                                  className="custom-control-label"
                                >
                                  &nbsp;
                                </label>
                              </div>
                            </td>
                            <td>Backup database</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="70%"
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  data-width="70%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-1.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Rizal Fakhri"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-2.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Hasan Basri"
                              />
                            </td>
                            <td>2018-01-29</td>
                            <td>
                              <div className="badge badge-warning">
                                In Progress
                              </div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="custom-checkbox custom-control">
                                <input
                                  type="checkbox"
                                  data-checkboxes="mygroup"
                                  className="custom-control-input"
                                  id="checkbox-4"
                                />
                                <label
                                  htmlFor="checkbox-4"
                                  className="custom-control-label"
                                >
                                  &nbsp;
                                </label>
                              </div>
                            </td>
                            <td>Input data</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="100%"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  data-width="100%"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-2.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Rizal Fakhri"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Isnap Kiswandi"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-4.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Yudi Nawawi"
                              />
                              <img
                                alt="image"
                                src="../assets/img/avatar/avatar-1.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Khaerul Anwar"
                              />
                            </td>
                            <td>2018-01-16</td>
                            <td>
                              <div className="badge badge-success">
                                Completed
                              </div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Stisla>
  );
}

export default Datatable;
