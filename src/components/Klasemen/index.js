import React from "react";
import { BarLoader as Loader } from "react-spinners";
import { KlasemenContainer } from "./style";
import { useFetch } from "./useFetch";
import SVG from "../RegisterSelection/SVGIcon";

const Klasemen = props => {
  const { id } = props;
  const klasemenUrl = `https://perak.cs.ui.ac.id/backend/api/group/${id}/teams`;

  const { data, loading } = useFetch(klasemenUrl);
  const decorA = [
    "orange-green-ball-rect",
    "purple-yellow-ball",
    "orange-ellipse-2"
  ];
  const decorB = ["purple-ball", "purple-rect", "orange-ellipse"];
  return (
    <KlasemenContainer color={id > 4 ? "#F2CF35" : "#33b3a6"}>
      <div className="group">
        {loading ? (
          <Loader />
        ) : (
          <>
            {id % 2 === 1 &&
              decorA.map(dec => <SVG name={dec} className={dec} />)}
            {id % 2 === 0 && decorB.map(dec => <SVG name={dec} />)}
            <h1 className="grouptitle">GROUP {data.name}</h1>
            <div className="tableDiv">
              <table>
                <thead>
                  <tr>
                    {/* <th>No</th> */}
                    <th>
                      <div className="namaTeam">Nama Tim</div>
                    </th>
                    <th>
                      <div className="stats">P</div>
                    </th>
                    <th>
                      <div className="stats">M</div>
                    </th>
                    <th>
                      <div className="stats">S</div>
                    </th>
                    <th>
                      <div className="stats">K</div>
                    </th>
                    {id > 4 ? null : (
                      <>
                        <th>
                          <div className="stats">GM</div>
                        </th>
                        <th>
                          <div className="stats">GA</div>
                        </th>
                        <th>
                          <div className="stats">SG</div>
                        </th>
                      </>
                    )}
                    <th>
                      <div className="point">PTS</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.group_teams &&
                    data.group_teams.map(team => {
                      return (
                        <tr>
                          <td>{team.name}</td>
                          <td>{team.banyak_match}</td>
                          <td>{team.win}</td>
                          <td>{team.draw}</td>
                          <td>{team.lose}</td>
                          {id > 4 ? null : (
                            <>
                              <td>{team.goal_masuk}</td>
                              <td>{team.goal_kebobolan}</td>
                              <td>{team.selisih_goal}</td>
                            </>
                          )}
                          <td>{team.points}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </KlasemenContainer>
  );
};

export default Klasemen;
