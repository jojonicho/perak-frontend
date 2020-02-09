import React from "react";
// import PropTypes from 'prop-types';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { GroupProfileContainer } from "./style";

import logo from "../../asset/GroupProfile/Logo.svg";
import person from "../../asset/GroupProfile/Person.jpg";

// import HeaderFooter from "../../components/HeaderFooter";

class GroupProfile extends React.Component {
  render() {
    return (
      <GroupProfileContainer>
        <div className="profile-group">
          <div className="container">
            <img className="logo" src={logo} alt="Logo Tim" />
            <h1>TUTUY FC</h1>
            <div className="line"></div>
            <h3>MANAGER: Alvia Dibby</h3>
            <div className="card-container">
              <div className="card">
                <div className="card-img">
                  <img src={person} alt="Avatar" />
                </div>
                <div className="desc">
                  <h4>GANI</h4>
                  <p>MUHAMMAD GANI ILHAM IRSYADI</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={person} alt="Avatar" />
                </div>
                <div className="desc">
                  <h4>GANI</h4>
                  <p>MUHAMMAD GANI ILHAM IRSYADI</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={person} alt="Avatar" />
                </div>
                <div className="desc">
                  <h4>GANI</h4>
                  <p>MUHAMMAD GANI ILHAM IRSYADI</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={person} alt="Avatar" />
                </div>
                <div className="desc">
                  <h4>GANI</h4>
                  <p>MUHAMMAD GANI ILHAM IRSYADI</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={person} alt="Avatar" />
                </div>
                <div className="desc">
                  <h4>GANI</h4>
                  <p>MUHAMMAD GANI ILHAM IRSYADI</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={person} alt="Avatar" />
                </div>
                <div className="desc">
                  <h4>GANI</h4>
                  <p>MUHAMMAD GANI ILHAM IRSYADI</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={person} alt="Avatar" />
                </div>
                <div className="desc">
                  <h4>GANI</h4>
                  <p>MUHAMMAD GANI ILHAM IRSYADI</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={person} alt="Avatar" />
                </div>
                <div className="desc">
                  <h4>GANI</h4>
                  <p>MUHAMMAD GANI ILHAM IRSYADI</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={person} alt="Avatar" />
                </div>
                <div className="desc">
                  <h4>GANI</h4>
                  <p>MUHAMMAD GANI ILHAM IRSYADI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GroupProfileContainer>
    );
  }
}

GroupProfile.propTypes = {};

export default GroupProfile;
