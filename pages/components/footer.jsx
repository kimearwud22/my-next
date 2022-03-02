import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  fatwiterr,
  fafacebook,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row grid-divider mt-4">
          <div className="col-sm-3">
            <div className="col-padding">
              <div className="text-center">
                <img src="img/pavicon_logo/apple-icon-180x180.png" alt srcSet />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="col-padding">
              <h4>TENTANG KAMI</h4>
              <p className>
                Lembaga profesional dengan basis iman, ilmu pengetahuan dan
                teknologi. Mengembangkan pendidikan dengan pelatihan ilmiah dan
                amaliah dan Membudayakan prilaku cerdas, berkarakter qurani
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="col-padding">
              <h4>SOSIAL MEDIA</h4>
              <p>Smpislam ainulhuda</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="col-padding">
              <h4>CONTACT PERSON</h4>
              <li>092812642</li>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
