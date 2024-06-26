import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const SearchCar = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [driver, setDriver] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setCars(data);
        setFilteredCars(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  const handleSearch = () => {
    const available = driver === "true";
    const capacity = parseInt(search);
    const result = cars.filter(
      (car) => car.available === available && car.capacity === capacity
    );
    setFilteredCars(result);
  };

  const handleClear = () => {
    setSearch("");
    setDriver("");
    setFilteredCars(cars);
  };

  return (
    <div>
      <section className="navbar">
        <div className="container"></div>
        <nav
          className="navbar navbar-expand-lg  fixed-top"
          style={{ backgroundColor: "#F1F3FF" }}
          aria-label="Offcanvas navbar large"
        >
          <div className="container">
            <a className="navbar-brand" id="offcanvasNavbar2Label" href="#">
              <img src="images/logo.png" alt="Company-Logo" />
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end w-50 p-3"
              tabIndex="-1"
              id="offcanvasNavbar2"
              aria-labelledby="offcanvasNavbar2Label"
            >
              <div className="offcanvas-header">
                <h2 className="mb-0">BCR</h2>
                <button
                  type="button"
                  className="btn-close btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Our Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      FAQ
                    </a>
                  </li>
                  <button type="button" className="btn" id="tombol">
                    Register
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="hero" style={{ backgroundColor: "#F1F3FF" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-judul ">
                <h1>Sewa & Rental Mobil Terbaik di kawasan Bekasi</h1>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <Link to={"/searchcar"} className="btn" id="tombol">
                  Mulai Sewa Mobil
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-gambar">
                <img
                  src="/images/img_car.png"
                  alt="Hero-Image"
                  className="img-fluid"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="filter-form">
        <div className="container ">
          <div className="position-relative">
            <div className="position-relative top-75 start-0 translate-middle-y">
              <div className="card p-4">
                <div className="row">
                  <div className="col-md-2 my-auto">
                    <label className="form-label">Tipe Driver</label>
                    <select
                      onChange={(e) => setDriver(e.target.value)}
                      value={driver}
                      className="form-select w-100"
                      select
                      required
                    >
                      <option value="" disabled selected hidden>
                        Pilih Driver
                      </option>
                      <option value="true">Dengan Driver</option>
                      <option value="false">Lepas Kunci (Lepas Kunci)</option>
                    </select>
                  </div>
                  <div className="col-md-2 my-auto">
                    <label className="form-label">Tanggal</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      placeholder="Pilih Tanggal"
                      required
                    />
                  </div>
                  <div className="col-md-2 my-auto">
                    <label className="form-label">Waktu Jemput/Ambil</label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="form-control"
                      placeholder="Pilih Tanggal"
                      required
                    />
                  </div>
                  <div className="col-md-3 my-auto">
                    <label className="form-label">
                      Jumlah Penumpang (opsional)
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 my-auto">
                    <div className="row mt-3">
                      <div className="col">
                        <button
                          id="cari-btn"
                          className="btn btn-success mt-0"
                          onClick={handleSearch}
                        >
                          Cari Mobil
                        </button>
                      </div>
                      <div className="col">
                        <button
                          id="clear-btn"
                          className=" btn btn-outline-secondary"
                          onClick={handleClear}
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="result-container">
          <div className="container">
            <div id="count-result"></div>
            <div id="cars-container" className="row row-cols-4  gy-3">
              {filteredCars.map((car) => (
                <div key={car.id} className="col">
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={"http://localhost:8000/" + car.image}
                        alt={car.manufacture}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                      <p className="mt-3">
                        {car.manufacture} {car.model}/{car.type}
                      </p>
                      <p>
                        <b>Rp {car.rentPerDay} / hari</b>
                      </p>
                      <p>{car.description}</p>
                      <p>
                        <i className="bi bi-person me-2"></i>
                        {car.capacity} orang
                      </p>
                      <p>
                        <i className="bi bi-gear me-2"></i>
                        {car.transmission}
                      </p>
                      <p>
                        <i className="bi bi-calendar me-2"></i>Tahun {car.year}
                      </p>
                      <button className="btn btn-success w-100 mt-auto">
                        Pilih Mobil
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCar;
