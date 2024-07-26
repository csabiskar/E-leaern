import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import appContext from '../context/appContext';
import { GrClose } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
import { TailSpin } from 'react-loader-spinner'; // Import the loader component
import kitelogo from '../assets/kitelogo.png';

function Navbar() {
    const { getStateParameters, State, setState } = useContext(appContext); // Include setState from context
    const { WalletAddress, isAdmin } = State;
    const [menuBtn, setMenuBtn] = useState(false); // State for menu button toggle
    const [loading, setLoading] = useState(false); // State for loading indicator

    const toggleMenu = () => {
        setMenuBtn(!menuBtn);
    };

    const logoutFromMetaMask = async () => {
        setLoading(true); // Set loading state to true

        try {
            if (window.ethereum && window.ethereum.selectedAddress) {
                // Request permissions (if needed, specify the permissions being requested)
                await window.ethereum.request({
                    method: 'wallet_requestPermissions',
                    params: [{ eth_accounts: {} }]
                });

                // Request accounts to logout
                const accounts = await window.ethereum.request({
                    method: 'eth_accounts'
                });

                // Logout logic: reset state or perform actions accordingly
                setState(prevState => ({
                    ...prevState,
                    WalletAddress: null,
                    isAdmin: false // Reset any other relevant state
                }));

                setLoading(false); // Set loading state to false after logout
            } else {
                console.log("MetaMask not initialized or no account connected.");
                setLoading(false); // Set loading state to false if MetaMask is not initialized
            }
        } catch (error) {
            console.error("Error while logging out from MetaMask:", error);
            setLoading(false); // Set loading state to false on error
        }
    };

    const connectWallet = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
        await  getStateParameters();
        setLoading(false); // Set loading state to false after connecting
    };

    return (
        <Fragment>
            <header className="navbar ">
                <nav className=' border-b-stone-950'>
                    <Link to='/' className=' font-sans font-bold text-white text-4xl'> <img src={kitelogo} className='w-20 h-20  object-contain' alt="" /></Link>
                    <input type="checkbox" id="check" checked={menuBtn} onChange={toggleMenu} />
                    <label htmlFor='check' className="checkbtn">
                        {
                            menuBtn ? <GrClose className='menu_btn'/> : <FaBarsStaggered className='menu_btn' />
                        }
                    </label>

                    <ul className={menuBtn ? "nav-menu active" : "nav-menu"}>
                        <li title='Dashboard'>
                            <Link to={'/'} className=' font-bold'>
                                Home
                            </Link>
                        </li>
                        <li title='Courses'>
                            <Link to={'/courses'} className='font-bold'>
                                Courses
                            </Link>
                        </li>
                        <li title='Dashboard'>
                            <Link to={'/dashboard'} className='font-bold'>
                                Dashboard
                            </Link>
                        </li>
                        {isAdmin && (
                            <li title='New Course'>
                                <Link to={'/new-course'} className='font-bold'>
                                    New Course
                                </Link>
                            </li>
                        )}
                        {WalletAddress ?
                            (<Fragment>
                                <li title={WalletAddress}>
                                    <Link to={'/profile'} className='font-bold'>
                                        {WalletAddress.slice(0, 5)}...{WalletAddress.slice(-6, -1)}
                                    </Link>
                                </li>
                                <li title='Logout'>
                                    {loading ? (
                                        <TailSpin
                                            height="25"
                                            width="35"
                                            color="#0000FF"
                                            ariaLabel="tail-spin-loading"
                                            radius="2"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                    ) : (
                                        <button onClick={logoutFromMetaMask} className='btn bg-green-400 font-sans font-bold'  disabled={loading}>
                                            Logout
                                        </button>
                                    )}
                                </li>
                            </Fragment>) :
                            (<li title='Connect Wallet'>
                                <button onClick={connectWallet} className='btn font-sans font-bold' disabled={loading}>
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
                                        'Connect'
                                    )}
                                </button>
                            </li>)}
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
}

export default Navbar;
