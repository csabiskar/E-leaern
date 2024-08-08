// import React, { Fragment, useContext, useEffect, useState } from 'react'
// import appContext from '../context/appContext'

// function LeaderBoard() {
//   const { State } = useContext(appContext);
//   const { WalletAddress, ReadContract } = State;

//   const [leaderBoard, setLeaderBoard] = useState([]);
//   const [tokenBalance, setTokenBalances] = useState([]);

//   const getLeaderBoardData = async () => {
//     const [data,tokens] = await ReadContract.getLeaderboard({ from: WalletAddress });
//       // Create a new array from data to avoid mutating the original array
//     const sortedData = [...data].sort((a, b) => b[1] - a[1]);
//     // const sortedData = [...data].sort((a,b)=>b.score - a.score);
//     setLeaderBoard(sortedData);
//     // setTokenBalances(sortedData.map((item) => item[1]));
//     setTokenBalances(tokens);
//   }

//   useEffect(() => {
//     getLeaderBoardData();
//   }, [])

//   return (
//     <Fragment>
//       <section className="leaderPage ">
//         {
//           leaderBoard && (
//             <Fragment>
              
//               {/* <h1>{element[0]} - {element[1].toString()}</h1> */}
//               <table>
//                 <thead>
//                   <tr>
//                     <th>SI NO</th>
//                     <th>USER</th>
//                     <th>SCORE</th>
//                     <th>Tokens</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {
//                     leaderBoard.map((user, index) => {
//                       return (
//                         <Fragment>
//                           <tr key={index}>

//                             <td>{index + 1}</td>

//                             <td>{user[0]}</td>

//                             <td>{user[1].toString()}</td>
//                             <td>{tokenBalance[1].toString()}</td>
//                           </tr>
//                         </Fragment>
//                       );
//                     })
//                   }
//                 </tbody>
//               </table>
//             </Fragment>
//           )
//         }
//       </section>
//     </Fragment>
//   )
// }

// export default LeaderBoard

import React, { Fragment, useContext, useEffect, useState } from 'react'
import appContext from '../context/appContext'

function LeaderBoard() {
  const { State } = useContext(appContext);
  const { WalletAddress, ReadContract } = State;

  const [leaderBoard, setLeaderBoard] = useState([]);
  const [tokenBalances, setTokenBalances] = useState([]);

  const getLeaderBoardData = async () => {
    const [data, tokens] = await ReadContract.getLeaderboard({ from: WalletAddress });
    // Sort the data by score
    const sortedData = [...data].sort((a, b) => b.score - a.score);
    setLeaderBoard(sortedData);
    setTokenBalances(tokens);
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
              <table>
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>USER</th>
                    <th>SCORE</th>
                    <th>TOKENS</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    leaderBoard.map((user, index) => {
                      return (
                        <Fragment>
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.userName}</td>
                            <td>{user.score.toString()}</td>
                            <td>{tokenBalances[index].toString()}</td>
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
