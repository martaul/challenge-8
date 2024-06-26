import { Link } from "react-router-dom";

const Landing = () => {
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
                  width="100%;"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="service">
          <div className="row">
            <div className="col-sm-6 service-gambar">
              <img
                src="/images/img_service.png"
                alt="Hero-Image"
                className="img-fluid"
                style={{ width: "80%" }}
              />
            </div>
            <div className="col-sm-6 sevice-judul">
              <h2>Best Car Rental for any kind of trip in Bekasi !</h2>
              <p>
                Sewa mobil di Bekasi bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className="list-chek">
                <div className="row">
                  <div className="col-auto">
                    <img src="/images/list-style.png" alt="list check" />
                  </div>
                  <div className="col-auto">
                    <p>Sewa Mobil Dengan Supir di Bekasi 12 Jam</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <img src="/images/list-style.png" alt="list check" />
                  </div>
                  <div className="col-auto">
                    <p>Sewa Mobil Lepas Kunci di Bekasi 24 Jam</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <img src="/images/list-style.png" alt="list check" />
                  </div>
                  <div className="col-auto">
                    <p>Sewa Mobil Jangka Panjang Bulanan</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <img src="/images/list-style.png" alt="list check" />
                  </div>
                  <div className="col-auto">
                    <p>Gratis Antar - Jemput Mobil di Bandara</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <img src="/images/list-style.png" alt="list check" />
                  </div>
                  <div className="col-auto">
                    <p>Layanan Airport Transfer / Drop In Out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="usp">
          <div className="usp-judul">
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          <div className="row" data-aos="flip-up-left">
            <div className="col-sm-3" id="card-usp">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/images/icons/icon_complete.png"
                    alt="thumb-up-icon"
                    className="mb-3"
                  />
                  <h5 className="card-title">Mobil Lengkap</h5>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3" id="card-usp">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/images/icons/icon_price.png"
                    alt="price-icon"
                    className="mb-3"
                  />
                  <h5 className="card-title">Harga Murah</h5>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3" id="card-usp">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/images/icons/icon_24hrs.png"
                    alt="time-icon"
                    className="mb-3"
                  />
                  <h5 className="card-title">Layanan 24 Jam</h5>
                  <p className="card-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3" id="card-usp">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/images/icons/icon_professional.png"
                    alt="profesional-icon"
                    className="mb-3"
                  />
                  <h5 className="card-title">Sopir Profesional</h5>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid">
        <section className="testi">
          <div className="testi-judul text-center">
            <h2>Testimonial</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>

          <div className="owl-carousel owl-theme owl-loaded">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <div className="owl-item">
                  <div className="row py-5 px-4">
                    <div className="col-md-4 text-center" id="user">
                      <img
                        src="/images/testimoni_foto1.png"
                        alt="testimonial user image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div
                        className="rating-stars d-flex flex-row"
                        style={{ width: "110px" }}
                      >
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                      </div>
                      <div className="testi-desc">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vitae ipsam obcaecati optio minima facilis
                          quaerat, quis, culpa harum deleniti ea quisquam alias
                          reprehenderit cum non nam fugiat corrupti veritatis
                          ut!
                        </p>
                        <p className="user fw-bold">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="row py-5 px-4">
                    <div className="col-4 text-center" id="user">
                      <img
                        src="/images/testimoni_foto2.png"
                        alt="testimonial user image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div
                        className="rating-stars d-flex flex-row"
                        style={{ width: "100px" }}
                      >
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae ipsam obcaecati optio minima facilis quaerat,
                        quis, culpa harum deleniti ea quisquam alias
                        reprehenderit cum non nam fugiat corrupti veritatis ut!
                      </p>
                      <p className="user fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="row py-5 px-4">
                    <div className="col-4 text-center" id="user">
                      <img
                        src="/images/testimoni_foto1.png"
                        alt="testimonial user image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div
                        className="rating-stars d-flex flex-row"
                        style={{ width: "110px" }}
                      >
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                        <img src="/images/Star.png" alt="Rating stars" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae ipsam obcaecati optio minima facilis quaerat,
                        quis, culpa harum deleniti ea quisquam alias
                        reprehenderit cum non nam fugiat corrupti veritatis ut!
                      </p>
                      <p className="user fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btns d-flex flex-row">
            <div className="customNextBtn">
              <span className="material-icons">chevron_left</span>
            </div>
            <div className="customPreviousBtn">
              <span className="material-icons">navigate_next</span>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="banner">
          <div className="judul-banner text-center" style={{ color: "#fff" }}>
            <h1>Sewa Mobil di Bekasi Sekarang</h1>
            <p style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn" id="tombol">
              Mulai Sewa Mobil
            </button>
          </div>
        </section>
        <section className="faq">
          <div className="row">
            <div className="col-md-6">
              <h2>Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-md-6">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quisquam, assumenda magni rem error nemo ipsum quos
                      perspiciatis cumque obcaecati eos cupiditate? Quo,
                      officiis! Accusamus maiores in tempora corrupti doloribus
                      fugiat.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Porro consequatur provident pariatur a et qui ratione
                      quia, ea quo dolorem. Iusto repellendus hic quia amet
                      dolorum, odio aut dolor tenetur.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quam neque dicta veritatis dolore nobis corrupti error
                      odio quasi deserunt, cupiditate blanditiis ducimus
                      repudiandae nemo expedita eaque veniam nesciunt illo sit?
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quam neque dicta veritatis dolore nobis corrupti error
                      odio quasi deserunt, cupiditate blanditiis ducimus
                      repudiandae nemo expedita eaque veniam nesciunt illo sit?
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Bagaimana jika terjadi kecelakaan
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quam neque dicta veritatis dolore nobis corrupti error
                      odio quasi deserunt, cupiditate blanditiis ducimus
                      repudiandae nemo expedita eaque veniam nesciunt illo sit?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="row">
            <div className="col-md-3">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-3" id="link-sosmed">
              <p href="#our-services"> Our services</p>
              <p href="#why-us">Why Us </p>
              <p href="#testimonial">Testimonial </p>
              <p href="#faq-section">FAQ </p>
            </div>
            <div className="col-md-3">
              <p>Connect with us</p>
              <div className="icon-container d-flex">
                <img
                  className="sosmed-icon"
                  src="/images/icons/icon_facebook.png"
                  alt="facebook-icon"
                />
                <img
                  className="sosmed-icon"
                  src="/images/icons/icon_instagram.png"
                  alt="instagram-icon"
                />
                <img
                  className="sosmed-icon"
                  src="/images/icons/icon_twitter.png"
                  alt="twitter-icon"
                />
                <img
                  className="sosmed-icon"
                  src="/images/icons/icon_mail.png"
                  alt="mail-icon"
                />
                <img
                  className="sosmed-icon"
                  src="/images/icons/icon_twitch.png"
                  alt="twictch-icon"
                />
              </div>
            </div>
            <div className="col-md-3">
              <p>Copyright Binar 2022</p>
              <a href="#home">
                <img src="/images/logo.png" alt="Company-Logo" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Landing;
