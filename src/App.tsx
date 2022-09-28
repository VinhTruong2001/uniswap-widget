import "./App.css";
//Store some state variables.
import { useState, useEffect } from "react";
//connect to our infura endpoint
import { providers, ethers } from "ethers";
//@ts-ignore
import detectEthereumProvider from "@metamask/detect-provider";
//uniswap widgets library
import { SwapWidget, Theme } from "@uniswap/widgets";

import { Box, Center } from "@chakra-ui/react";
import Header from "./components/Header";

// const infuraId = process.env.REACT_APP_INFURA_ID;
const jsonRpcEndpoint = process.env.REACT_APP_JSON_RPC;
const jsonRpcProvider = new providers.JsonRpcProvider(jsonRpcEndpoint);
//@ts-ignore
const provider = new ethers.providers.Web3Provider(jsonRpcProvider);

const theme: Theme = {
  primary: "#FFF",
  secondary: "#A9A9A9",
  interactive: "#40444F",
  container: "#212429",
  module: "#222633",
  accent: "#1966D4",
  outline: "#CC1",
  dialog: "#40444F",
  fontFamily: "Inter custom",
  borderRadius: 24,
};

function App() {
  const [account, setAccount] = useState({
    address: "",
    provider: provider,
  });

  async function connectWallet() {
    //check if Metamask is installed in the browser
    const ethereumProvider = await detectEthereumProvider();
    if (ethereumProvider) {
      //prompt user to connect their wallet
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      setAccount({
        address: address,
        //@ts-ignore
        provider: ethereumProvider,
      });
    }
  }

  useEffect(() => {
    connectWallet();
  }, [])

  return (
    <Box
      bg="var(--highlight-color)"
      bgGradient="radial-gradient(50% 50% at 50% 50%, rgba(252, 7, 125, 0.063) 0px, rgba(255, 255, 255, 0) 100%);"
      minHeight="100vh"
      color="#fff"
    >
      <Header account={account} onConnectWallet={connectWallet}/>
      <Center>
        <SwapWidget
          provider={account.provider}
          //@ts-ignore
          JsonRpcEndpoint={jsonRpcEndpoint}
          theme={theme}
          width="500px"
          height="282px"
        />
      </Center>
    </Box>
  );
}

export default App;
