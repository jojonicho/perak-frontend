import React from "react";
// import PropTypes from 'prop-types';

import { Section4Container } from "./style";

class Section4 extends React.Component {
  render() {
    return (
      <Section4Container>
        <div className="section-4">
          <h1 className="title">BIOSKOP ALA PERAK</h1>
          <p className="desc">
            Bioskop Ala Perak adalah acara yang dilaksanakan pada malam hari
            yang bisa menjadi wadah untuk elemen Fasilkom saling bercengkrama
            sambil menonton film.
          </p>
        </div>
      </Section4Container>
    );
  }
}

Section4.propTypes = {};

export default Section4;
