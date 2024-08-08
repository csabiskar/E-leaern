import React, { Fragment, useEffect, useState } from 'react';
import { ethers } from "ethers";
import ABI from "./contractJson/elearn.json";
import MyERC1155ABI from "./contractJson/MyERC1155.json";
import appContext from './context/appContext';
import Router from './router/Router';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navInitialState = {
    dashboard: true,
    transaction: false,
    history: false
  };

  const initialState = {
    WindowEthereum: false,
    ContractAddress: "0x1A82549199Ca0c7DF4D0Be0A7Da0e5c46360C136", // Updated contract
    MyERC1155Address: "0x33901220854072d10b2b9b2bC3ee73F7CBA7C8Bb",
    WalletAddress: null,
    ContractAbi: ABI.abi,
    MyERC1155Abi: MyERC1155ABI.abi,
    Provider: null,
    Signer: null,
    ReadContract: null,
    WriteContract: null,
    MyERC1155ReadContract: null,
    MyERC1155WriteContract: null,
    isAdmin: false,
    isLogin: false,
    userName: null
  };

  const [State, setState] = useState(initialState);
  const [navState, setNavState] = useState(navInitialState);
  const [msg, setMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getStateParameters();
  }, []);

  const getStateParameters = async () => {
    if (window.ethereum) {
      setState(prevState => ({
        ...prevState,
        WindowEthereum: true
      }));

      const Provider = new ethers.providers.Web3Provider(window.ethereum);
      await Provider.send("eth_requestAccounts", []);
      const Signer = await Provider.getSigner();
      const WalletAddress = await Signer.getAddress();

      setState(prevState => ({
        ...prevState,
        WalletAddress,
        Provider,
        Signer
      }));

      const ReadContract = new ethers.Contract(
        State.ContractAddress,
        State.ContractAbi,
        Provider
      );
      const WriteContract = new ethers.Contract(
        State.ContractAddress,
        State.ContractAbi,
        Signer
      );

      const MyERC1155ReadContract = new ethers.Contract(
        State.MyERC1155Address,
        State.MyERC1155Abi,
        Provider
      );
      const MyERC1155WriteContract = new ethers.Contract(
        State.MyERC1155Address,
        State.MyERC1155Abi,
        Signer
      );

      setState(prevState => ({
        ...prevState,
        ReadContract,
        WriteContract,
        MyERC1155ReadContract,
        MyERC1155WriteContract
      }));

      const isAdmin = await ReadContract.checkAdmin({ from: WalletAddress });
      setState(prevState => ({
        ...prevState,
        isAdmin
      }));

      const isLogin = await ReadContract.Login({ from: WalletAddress });
      setState(prevState => ({
        ...prevState,
        isLogin
      }));

      const user = await ReadContract.displayUserProfile({ from: WalletAddress });
      setState(prevState => ({
        ...prevState,
        userName: user[0]
      }));

    } else {
      console.log("Metamask Not Found");
    }
  };

  useEffect(() => {
    msg && (
      toast.success(msg, { autoClose: 4000 })
    )
    setMsg(null)
  }, [msg]);

  useEffect(() => {
    errorMsg && (
      toast.success(errorMsg, { autoClose: 4000 })
    )
    setErrorMsg(null)
  }, [errorMsg]);

  const context = {
    State,
    setState,
    getStateParameters,
    navState,
    setNavState,
    setMsg,
    setErrorMsg
  };

  return (
    <Fragment>
      <ToastContainer />
      <appContext.Provider value={context}>
        <Router />
      </appContext.Provider>
    </Fragment>
  );
}

export default App;
