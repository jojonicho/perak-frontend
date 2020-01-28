import React from "react";
// import PropTypes from "prop-types";

import { Section5Container } from "./style";

class Section5 extends React.Component {
  render() {
    return (
      <Section5Container>
        <div className="section-5">
          <h1 className="title">PESTANYA</h1>
          <h3 className="title-middle">PESTA RAKYAT KOMPUTER:</h3>
          <h1 className="title">KARNAVAL</h1>
          <p className="desc">
            Pestanya Pesta Rakyat Komputer adalah Main Event dari Perak, dimana
            akan mengajak seluruh elemen fasilkom untuk turut bergabung dan
            berpartisipasi untuk bersenang-senang bersama. Acara ini juga
            merupakan acara puncak dari Pesta Rakyat Komputer.
          </p>
        </div>
      </Section5Container>
    );
  }
}

Section5.propTypes = {};

export default Section5;
