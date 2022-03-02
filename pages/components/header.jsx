import Link from "next/link";

const Header = () => {
  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center text-white">
            <a href="contact-us" className="d-none d-md-block d-lg-block mx-1">
              Hubungi Kami
            </a>
            <a href className="d-none d-md-block d-lg-block mx-1">
              <i className="fa fa-instagram">smpi.ainul Huda</i>
            </a>
            <a href="tel:" className="d-none d-md-block d-lg-block mx-1">
              <i className="fa fa-phone">0829198645</i>
            </a>
          </div>
          <div className="contact-info d-none d-lg-flex social-links align-items-center">
            <a href="#facebook" className="facebook">
              <i className="fa fa-facebook-square">smpi.ainul huda</i>
            </a>
            <a href="#instagram" className="instagram">
              <i className="fa fa-instagram">smpi.ainul Huda</i>
            </a>
          </div>
        </div>
      </div>
      <header>
        <div id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <img src="img/pavicon_logo/favicon-96x96.png" alt srcSet />
              <a href=".">SMPI Ainul Huda</a>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <Link href="/">
                    <a className="nav-link">Beranda</a>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <a className="nav-link">Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="nav-link" href="about">
                      Tentang SMPI
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/ppdb">
                    <a className="nav-link">PPDB</a>
                  </Link>
                </li>

                <li>
                  <a className="nav-link scrollto" href="https://wa.me/+6283143506069?text=Saya%20mau%20bertanya%20mengenai%20PPDB%20SMP%20Islam%20Ainul%20Huda..%3F%0A">
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
