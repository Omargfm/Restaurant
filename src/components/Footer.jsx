import {Instagram, Twitter, Facebook, LinkedIn} from '@mui/icons-material';

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram /> <Twitter /> <Facebook /> <LinkedIn />
      </div>
      <p> &copy; desde 2024 </p>
    </div>
  );
}

export default Footer;