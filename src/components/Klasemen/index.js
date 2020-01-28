import React from "react";
import { PacmanLoader } from "react-spinners";
import { KlasemenContainer } from "./style";
import { useFetch } from "./useFetch";
import SVG from "../RegisterSelection/SVGIcon";

// class Klasemen extends React.Component {
//   render() {
//     return (
//       <KlasemenContainer>
//         <h2>Me gusta</h2>
//       </KlasemenContainer>
//     );
//   }
// }
const Klasemen = props => {
  const { id } = props;
  const klasemenUrl = `http://perak-backend.herokuapp.com/api/group/${id}/teams`;
  // const klasemenBUrl = "http://perak-backend.herokuapp.com/api/group/2/teams"

  const { data, loading } = useFetch(klasemenUrl);
  // const { group_teams } = data;
  // const { data: dataB, loading: loadingB } = useFetch(klasemenBUrl);
  const decorA = [
    "orange-green-ball-rect",
    "purple-yellow-ball",
    "orange-ellipse-2"
  ];
  const decorB = ["purple-ball", "purple-rect", "orange-ellipse"];
  return (
    <KlasemenContainer>
      {loading ? (
        <PacmanLoader />
      ) : (
        <div className="group">
          {id === 1 && decorA.map(dec => <SVG name={dec} className={dec} />)}
          {id === 2 && decorB.map(dec => <SVG name={dec} />)}
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
                  <th>
                    <div className="stats">GM</div>
                  </th>
                  <th>
                    <div className="stats">GA</div>
                  </th>
                  <th>
                    <div className="stats">SG</div>
                  </th>
                  <th>
                    <div className="point">PTS</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.group_teams &&
                  data.group_teams.map(team => {
                    const {
                      name,
                      win,
                      lose,
                      draw,
                      goalMasuk,
                      goalKebobolan,
                      points,
                      selisihGoal,
                      banyakMatch
                    } = team;
                    return (
                      <tr>
                        {/* <td>{team.id}</td> */}
                        <td>{name}</td>
                        <td>{banyakMatch}</td>
                        <td>{win}</td>
                        <td>{draw}</td>
                        <td>{lose}</td>
                        <td>{goalMasuk}</td>
                        <td>{goalKebobolan}</td>
                        <td>{selisihGoal}</td>
                        <td>{points}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </KlasemenContainer>
  );
};

export default Klasemen;
