import { Link, useNavigate, useParams } from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";
const EditCar = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [initialData, setInitialData] = useState();

  function getCar() {
    fetch("http://localhost:8000/cars/" + params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        setInitialData(data);
      })
      .catch((error) => {
        alert("udh banh");
      });
  }

  useEffect(getCar, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const carData = Object.fromEntries(formData.entries());
    fetch("http://localhost:8000/cars/" + params.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    })
      .then((res) => {
        if (res.ok) {
          // Navigasi ke halaman /cars setelah berhasil menambahkan mobil
          navigate("/cars");
        } else if (res.status === 400) {
          alert("Validation errors");
        } else {
          alert("Tidak bisa mengubah mobil");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

    // try {
    //   const response = await fetch("http://localhost:8000/cars", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     // Navigasi ke halaman /cars setelah berhasil menambahkan mobil
    //     navigate("/cars");
    //   } else if (response.status === 400) {
    //     alert("Validation errors");
    //   } else {
    //     alert("Tidak bisa menambahkan mobil");
    //   }
    // } catch (error) {
    //   alert("Tidak bisa menambahkan mobil");
    // }
  }

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
                      id="nyala"
                      data-bs-parent="#sidebar"
                      style={{
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
                        <b>DASHBORD</b>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item border-end-0 ps-3 py-2"
                      id="sudi"
                      data-bs-parent="#sidebar"
                    >
                      <span>
                        <b>Dashbord</b>
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
                      <li className="breadcrumb-item">
                        <a href="#">List Cars</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Edit Car
                      </li>
                    </ol>
                  </nav>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4>Edit Cars</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <label htmlFor="id" className="form-label d-flex w-25">
                      ID <p style={{ color: "red" }}>*</p>
                    </label>
                    <input
                      readOnly
                      className="form-control-plaintext w-50"
                      defaultValue={params.id}
                    />
                  </div>
                  {initialData && (
                    <form
                      onSubmit={handleSubmit}
                      className="p-3"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <div className="d-flex align-items-center mb-2">
                        <label
                          htmlFor="manufacture"
                          className="form-label d-flex w-25"
                        >
                          Nama <p style={{ color: "red" }}>*</p>
                        </label>
                        <input
                          type="text"
                          name="manufacture"
                          defaultValue={initialData.manufacture}
                          className="form-control w-50"
                        />
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <label
                          htmlFor="rentPerDay"
                          className="form-label d-flex w-25"
                        >
                          Harga <p style={{ color: "red" }}>*</p>
                        </label>
                        <input
                          type="text"
                          name="rentPerDay"
                          defaultValue={initialData.rentPerDay}
                          className="form-control w-50"
                        />
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <label
                          htmlFor="text"
                          className="form-label d-flex w-25"
                          aria-describedby="emailHelp"
                        >
                          Foto <p style={{ color: "red" }}>*</p>
                        </label>
                        <div className="ket w-50">
                          <input
                            type="text"
                            defaultValue={initialData.image}
                            name="image"
                            className="form-control"
                          />
                          <div id="emailHelp" className="form-text">
                            File size max. 2MB
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center py-2">
                        <label
                          htmlFor="startRent"
                          className="form-label d-flex w-25"
                        >
                          Start Rent
                        </label>
                        <label
                          htmlFor="startRent"
                          className="form-label d-flex w-25"
                        >
                          -
                        </label>
                      </div>
                      <div className="d-flex align-items-center py-2">
                        <label
                          htmlFor="finishRent"
                          className="form-label d-flex w-25"
                        >
                          Finish Rent
                        </label>
                        <label
                          htmlFor="finishRent"
                          className="form-label d-flex w-25"
                        >
                          -
                        </label>
                      </div>
                      <div className="d-flex align-items-center py-2">
                        <label
                          htmlFor="createdAt"
                          className="form-label d-flex w-25"
                        >
                          Created at
                        </label>
                        <label
                          htmlFor="createdAt"
                          className="form-label d-flex w-25"
                        >
                          -
                        </label>
                      </div>
                      <div className="d-flex align-items-center py-2">
                        <label
                          htmlFor="updatesAt"
                          className="form-label d-flex w-25"
                        >
                          Updates at
                        </label>
                        <label
                          htmlFor="updatesAt"
                          className="form-label d-flex w-25"
                        >
                          -
                        </label>
                      </div>
                      <div className="d-flex py-3">
                        <button className="btn btn-outline-primary" id="cancel">
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary ms-3">
                          Save
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default EditCar;
