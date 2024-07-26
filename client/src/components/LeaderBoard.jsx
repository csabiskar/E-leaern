import React, { Fragment, useContext, useEffect, useState } from 'react'
import appContext from '../context/appContext'

function LeaderBoard() {
  const { State } = useContext(appContext);
  const { WalletAddress, ReadContract } = State;

  const [leaderBoard, setLeaderBoard] = useState([]);

  const getLeaderBoardData = async () => {
    const data = await ReadContract.getLeaderboard({ from: WalletAddress });
      // Create a new array from data to avoid mutating the original array
    const sortedData = [...data].sort((a, b) => b[1] - a[1]);
    setLeaderBoard(sortedData);
  }

  useEffect(() => {
    getLeaderBoardData();
  }, [])

  return (
    <Fragment>
      <section className="leaderPage ">
        {
          leaderBoard && (
            <Fragment>
              
              {/* <h1>{element[0]} - {element[1].toString()}</h1> */}
              <table>
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>USER</th>
                    <th>SCORE</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    leaderBoard.map((user, index) => {
                      return (
                        <Fragment>
                          <tr key={index}>

                            <td>{index + 1}</td>

                            <td>{user[0]}</td>

                            <td>{user[1].toString()}</td>
                            
                          </tr>
                        </Fragment>
                      );
                    })
                  }
                </tbody>
              </table>
            </Fragment>
          )
        }
      </section>
    </Fragment>
  )
}

export default LeaderBoard