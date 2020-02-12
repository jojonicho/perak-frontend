import React from "react";
// import PropTypes from 'prop-types';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Carousel from "@brainhubeu/react-carousel";
import { GroupProfileContainer } from "./style";

import logo from "../../asset/GroupProfile/logo.jpg";
import person from "../../asset/GroupProfile/Person3.jpg";
import HeaderFooter from "../HeaderFooter";
// import "@brainhubeu/react-carousel/lib/style.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import HeaderFooter from "../../components/HeaderFooter";

class GroupProfile extends React.Component {
  render() {
    return (
      <HeaderFooter color="dark">
        <GroupProfileContainer>
          <div className="profile-group">
            <div className="container">
              <div className="container-inside">
                <img className="logo" src={logo} alt="Logo Tim" />
                <h1>TUTUY FC</h1>
                <div className="line"></div>
                <h3>
                  MANAGER: <span>Alvia Dibby</span>
                </h3>
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
          </div>
        </GroupProfileContainer>
      </HeaderFooter>
    );
  }
}

GroupProfile.propTypes = {};

export default GroupProfile;
