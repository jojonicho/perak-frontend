import React from "react";
// import PropTypes from "prop-types";
import {
  PersonFormRegistrationContainer,
  Section
} from "../PersonFormRegistration/style";

import { OpenTenantFormContainer } from "./style";

class OpenTenantForm extends React.Component {
  render() {
    const {
      namaPemilik,
      kontak,
      jenisJualan,
      other,
      deskripsi,
      setuju,
      setData
    } = this.props;
    return (
      <PersonFormRegistrationContainer>
        <OpenTenantFormContainer>
          <Section>
            Nama
            <input
              className="input-long"
              id="nama-pemilik"
              value={namaPemilik}
              onChange={setData}
              autoComplete="off"
            />
          </Section>
          <Section>
            Kontak (WhatsApp)
            <input
              className="input-long"
              id="kontak-pemilik"
              value={kontak}
              onChange={setData}
              autoComplete="off"
            />
          </Section>
          <Section>
            Jenis yang akan dijual
            <div className="check-box-container">
              <div className="check-box">
                <input
                  type="radio"
                  id="makanan"
                  name="jenis"
                  value="Makanan"
                  onChange={setData}
                />
                <label htmlFor="makanan">Makanan</label>
                <br />
                <input
                  type="radio"
                  id="minuman"
                  name="jenis"
                  value="Minuman"
                  onChange={setData}
                />
                <label htmlFor="minuman">Minuman</label>
                <br />
                <input
                  type="radio"
                  id="Other"
                  name="jenis"
                  value="other"
                  onChange={setData}
                />
                <label htmlFor="Other">Other</label>
              </div>
            </div>
            <input
              className={`input-long ${
                jenisJualan === "other" ? null : "hide"
              }`}
              id="input-other"
              value={other}
              onChange={setData}
              autoComplete="off"
            />
          </Section>
          <Section>
            Deskripsi singkat mengenai apa yang ingin dijual
            <input
              className="input-long"
              id="deskripsi-jualan"
              value={deskripsi}
              onChange={setData}
              autoComplete="off"
            />
          </Section>
          <Section>
            <p>
              Saya bersedia untuk membayar commitment fee Rp100.000,- (Sudah
              termasuk DP)
            </p>
            <div className="check-box-container">
              <input
                type="checkbox"
                id="setuju"
                checked={setuju}
                onChange={setData}
                autoComplete="off"
                className="bazar-agree"
              />
              <label htmlFor="setuju">Setuju</label>
            </div>
          </Section>
        </OpenTenantFormContainer>
      </PersonFormRegistrationContainer>
    );
  }
}

OpenTenantForm.propTypes = {};

export default OpenTenantForm;
