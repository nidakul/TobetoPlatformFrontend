import React from "react";
import { Button, Container, Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {};
const logoSrc = process.env.PUBLIC_URL + "/images/Tebeto-logo-yatay-beyaz.png";

const divStyle = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-style mt-3">
      <Container className="col-12 col-md-10">
        <div className="d-flex justify-content-between align-items-center">
          <Image
            src={logoSrc}
            width="100"
            height="20"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Link to="/iletisim">
            <Button className="footer-button">Bize Ulaşın</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
