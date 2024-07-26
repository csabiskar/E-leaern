import React, { Fragment, useContext, useState } from 'react';
import appContext from '../context/appContext';
import LeaderBoard from '../components/LeaderBoard';
import ImageCarousel from '../components/ImageCarousel';
import { TailSpin } from 'react-loader-spinner'; // Import the loader component

function Dashboard() {
  const { State } = useContext(appContext);
  const {
    isLogin,
    userName,
    WriteContract,
    WalletAddress
  } = State;

  const [login, setLogin] = useState(!isLogin);
  const [uname, setUname] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (uname.trim() !== '') {
      try {
        setLoading(true); // Set loading state to true
        const tx = await WriteContract.registerNewUser(uname, { from: WalletAddress });
        await tx.wait();
        setLoading(false); // Set loading state to false after transaction completes
      } catch (e) {
        console.log(e.message);
        setLoading(false); // Set loading state to false on error
      }
    }
  };

  const handleLoginToggle = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  const handleUnameChange = (e) => {
    setUname(e.target.value);
  };

  return (
    <Fragment>
      <section className="page dashboard_page ">
        {/* Username welcome card */}
        {isLogin && userName && userName.trim() !== '' ? (
          <h1 className='welcome_card  font-semibold tracking-widest'>Hello, {userName}</h1>
        ) : (
          <button className='login_btn ' onClick={handleLoginToggle}>Login</button>
        )}

        {/* Login Form */}
        {!login && !userName && (
          <Fragment>
            <form className="login" onSubmit={handleSubmit}>
              <input
                type="text"
                name="uname"
                id="uname"
                value={uname}
                onChange={handleUnameChange}
                placeholder='username'
                disabled={loading} // Disable input while loading
              />
              <button type="submit"  disabled={loading} className='btn  bg-customBlue'>
                {loading ? (
                  <TailSpin
                    height="25"
                    width="25"
                    color="#0000FF"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  'Login'
                )}
              </button>
            </form>
          </Fragment>
        )}
        <ImageCarousel />
        {/* { userName && <LeaderBoard /> } */}
      </section>
    </Fragment>
  );
}

export default Dashboard;
