import React from "react";
// import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

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
        <Fade>
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
                  <label htmlFor="makanan">
                    <input
                      type="radio"
                      id="makanan"
                      name="jenis"
                      value="Makanan"
                      onChange={setData}
                    />
                    Makanan
                  </label>
                  <br />
                  <label htmlFor="minuman">
                    <input
                      type="radio"
                      id="minuman"
                      name="jenis"
                      value="Minuman"
                      onChange={setData}
                    />
                    Minuman
                  </label>
                  <br />
                  <label htmlFor="Other" className="flex-label">
                    <input
                      type="radio"
                      id="Other"
                      name="jenis"
                      value="other"
                      onChange={setData}
                    />
                    <p className="p-marg">Other</p>
                    <input
                      className={`input-long ${
                        jenisJualan === "other" ? null : "hide"
                      }`}
                      id="input-other"
                      value={other}
                      onChange={setData}
                      autoComplete="off"
                    />
                  </label>
                </div>
              </div>
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
                <label htmlFor="setuju">
                  <input
                    type="checkbox"
                    id="setuju"
                    checked={setuju}
                    onChange={setData}
                    autoComplete="off"
                    className="bazar-agree"
                  />
                  Setuju
                </label>
              </div>
            </Section>
          </OpenTenantFormContainer>
        </Fade>
      </PersonFormRegistrationContainer>
    );
  }
}

OpenTenantForm.propTypes = {};

export default OpenTenantForm;
