import React from "react";
// import PropTypes from 'prop-types';

import { Section4Container } from "./style";

class Section4 extends React.Component {
  render() {
    return (
      <Section4Container>
        <div className="section-4">
          <h1 className="title">LIGA PERAK</h1>
          <p className="desc">
            Liga PERAK adalah kompetisi olahraga futsal dan berbagai macam
            permainan yang diselenggarakan untuk semua elemen Fasilkom UI. Liga
            PERAK ini mengedepankan asas kekeluargaan, namun tidak meninggalkan
            asas saling menghormati dan sportivitas. Permainan yang nantinya
            akan dimainkan di Liga PERAK ini adalah DOTA 2, CSGO, Mobile Legend,
            Super Smash Bros Ultimate, Mario Cart 8 Deluxe, FIFA 20, Catur, dan
            Codenames.
          </p>
        </div>
      </Section4Container>
    );
  }
}

Section4.propTypes = {};

export default Section4;
