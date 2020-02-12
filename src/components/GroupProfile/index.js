import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import Loader from "react-loader-spinner";
import HeaderFooter from "../HeaderFooter";
import { useFetch } from "./useFetch";
import { GroupProfileContainer } from "./style";

const GroupProfile = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const GroupProfileUrl = `https://perak.cs.ui.ac.id/backend/api/team/${id}`;
  const { data, loading } = useFetch(GroupProfileUrl);
  return (
    <HeaderFooter color="dark">
      <GroupProfileContainer>
        <div className="container">
          {loading ? (
            <Loader type="Rings" color="#31B3A6" height={150} width={150} />
          ) : (
            <div className="container-inside">
              <img className="logo" src={data.team_logo} alt="Logo Tim" />
              <h1>{data.name}</h1>
              <div className="line"></div>
              <h3>
                MANAGER: <span>{data.manager}</span>
              </h3>
              <div className="card-container">
                {data.team_players.map(player => {
                  return (
                    <div className="card">
                      <div className="card-img">
                        <img src={player.profile_picture} alt="Avatar" />
                      </div>
                      <div className="desc">
                        <h4>
                          {player.name.split(" ")[0] === "Muhammad" ||
                          player.name.split(" ")[0] === "Muhamad" ||
                          player.name.split(" ")[0] === "Mohammad" ||
                          player.name.split(" ")[0] === "Mohamad" ||
                          player.name.split(" ")[0] === ""
                            ? player.name.split(" ")[1]
                            : player.name.split(" ")[0]}
                        </h4>
                        <p>{player.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </GroupProfileContainer>
    </HeaderFooter>
  );
};

export default GroupProfile;
