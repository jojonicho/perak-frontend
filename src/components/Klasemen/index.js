import React from "react";
import { BarLoader as Loader } from "react-spinners";
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
      <div className="group">
        {loading ? (
          <Loader />
        ) : (
          <>
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
                      // const {
                      //   name,
                      //   win,
                      //   lose,
                      //   draw,
                      //   goal_masuk,
                      //   goal_kebobolan,
                      //   points,
                      //   selisih_goal,
                      //   banyak_match
                      // } = team;
                      return (
                        <tr>
                          {/* <td>{team.id}</td> */}
                          <td>{team.name}</td>
                          <td>{team.banyak_match}</td>
                          <td>{team.win}</td>
                          <td>{team.draw}</td>
                          <td>{team.lose}</td>
                          <td>{team.goal_kebobolan}</td>
                          <td>{team.goal_masuk}</td>
                          <td>{team.selisih_goal}</td>
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
