import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";
const ListCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setCars(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  const deleteCar = (id) => {
    fetch("http://localhost:8000/cars/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("car deleted.");
      setCars(cars.filter((car) => car.id !== id));
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto px-0">
            <div
              id="sidebar"
              className="collapse collapse-horizontal show border-end"
            >
              <div
                id="sidebar-nav"
                className="border-0 rounded-0 text-sm-start min-vh-100"
              >
                <div className="row g-0">
                  <div className="col min-vh-100" id="biru">
                    <a
                      href="#"
                      className="list-group-item border-end-0 py-2"
                      data-bs-parent="#sidebar"
                      style={{
                        backgroundColor: "#0D28A6",
                        borderColor: "#0D28A6",
                      }}
                    >
                      <img src="/images/logo1.jpg" alt="" />
                    </a>
                    <Link
                      to={"/dashbord"}
                      className="list-group-item border-end-0 py-2 pt-3"
                      data-bs-parent="#sidebar"
                      style={{
                        backgroundColor: "#0D28A6",
                        borderColor: "#0D28A6",
                        color: "#fff",
                      }}
                    >
                      <span className="material-symbols-outlined">home</span>
                      <p>Dashbord</p>
                    </Link>
                    <Link
                      to={"/cars"}
                      className="list-group-item border-end-0  py-2"
                      id="nyala"
                      data-bs-parent="#sidebar"
                      style={{ borderColor: "#0D28A6", color: "#fff" }}
                    >
                      <span className="material-symbols-outlined">
                        local_shipping
                      </span>
                      <p>Cars</p>
                    </Link>
                  </div>
                  <div className="col min-vh-100" style={{ textAlign: "left" }}>
                    <a
                      href="#"
                      className="list-group-item border-end-0 py-2"
                      style={{ textAlign: "center" }}
                      data-bs-parent="#sidebar"
                    >
                      <img src="/images/logo2.png" alt="" />
                    </a>
                    <a
                      href="#"
                      className="list-group-item border-end-0 ps-3 mt-4 mb-5"
                      style={{ paddingLeft: "10px" }}
                      data-bs-parent="#sidebar"
                    >
                      <span>
                        <b>CARS</b>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item border-end-0 ps-3 py-2"
                      id="sudi"
                      data-bs-parent="#sidebar"
                    >
                      <span>
                        <b>List Cars</b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="col" id="utama">
            <nav className="navbar navbar-expand-l">
              <div className="container-fluid">
                <a
                  href="#"
                  data-bs-target="#sidebar"
                  data-bs-toggle="collapse"
                  className="navbar-brand"
                >
                  <span className="material-symbols-outlined">menu </span>
                </a>
                <div className="d-flex align-items-center">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-primary" type="submit">
                      Search
                    </button>
                  </form>
                  <div className="userProfile d-flex align-items-center ms-2">
                    <img src="/images/profile.png" />
                    <p className=" px-2">Unis Badri</p>
                    <span className="material-symbols-outlined px-2 pt-1">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
            </nav>

            {/* isi */}
            <div
              className="col"
              id="isi"
              style={{ backgroundColor: "#F4F5F7" }}
            >
              <div className="container">
                <div className="breadcumb pt-4">
                  <nav
                    style={{
                      "--bs-breadcrumb-divider":
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")",
                    }}
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Cars</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        List Cars
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h4>List Cars</h4>
                  <Link
                    to={"/addcars"}
                    className="btn d-flex align-items-center -2"
                    id="tombol"
                  >
                    <span className="material-symbols-outlined mx-2">add</span>
                    Add New Car
                  </Link>
                </div>
                <div className="filter pt-2">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="ableButton"
                  >
                    <b>All</b>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="disableButton"
                  >
                    Small
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="disableButton"
                  >
                    Medium
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    id="disableButton"
                  >
                    Large
                  </button>
                </div>
                <div className="row">
                  {cars.map((car) => (
                    <div key={car.id} className="col-4">
                      <div className="card mt-5">
                        <img
                          id="cover"
                          src={car.image}
                          className="card-img-top"
                          alt="mobil"
                        />
                        <div className="card-body">
                          <p className="card-text">{car.manufacture}</p>
                          <h5 className="card-title">
                            Rp.{" "}
                            {car.rentPerDay.toLocaleString("id-ID", {
                              styles: "currency",
                              currency: "IDR",
                            })}{" "}
                            / hari
                          </h5>
                          <div className="d-flex pt-2">
                            <img src="/images/fi_key.svg" alt="key" />
                            <p className="card-text px-2">
                              Start rent - Finish rent
                            </p>
                          </div>
                          <div className="d-flex pt-2">
                            <img src="/images/fi_clock.svg" alt="clock" />
                            <p className="card-text px-2">Update at</p>
                          </div>
                          <div className="d-flex justify-content-between pt-3">
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => deleteCar(car.id)}
                            >
                              <img src="/images/fi_trash-2.svg" alt="hapus" />{" "}
                              Delete
                            </button>
                            <Link
                              to={"/edit/" + car.id}
                              className="btn btn-primary"
                              id="edit"
                            >
                              <img src="/images/fi_edit.svg" alt="edit" /> Edit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default ListCars;
