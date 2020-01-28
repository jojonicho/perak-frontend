import React from "react";
// import PropTypes from "prop-types";

import { Section1Container } from "./style";

class Section1 extends React.Component {
  render() {
    return (
      <Section1Container>
        <div className="section-1">
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
      </Section1Container>
    );
  }
}

Section1.propTypes = {};

export default Section1;
