import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { init, useConnectWallet, useSetChain } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import abi from "./contractABI.json";
import { ethers } from "ethers";

export interface contextType {
  state: boolean;
  toggle: () => void;
  userAddress?: string;
}

export const Context = createContext<contextType>({
  state: true,
  toggle: () => {},
});

interface childrenProps {
  children: React.ReactNode;
}

const CONTRACT_ADDRESS = "0x9473c284b40710c08D73f67bd346554620B7103c";

const rpcUrl = "https://filecoin-hyperspace.chainstacklabs.com/rpc/v1";
const injected = injectedModule();

init({
  wallets: [injected],
  chains: [
    {
      id: "3141",
      token: "tFIL",
      label: "Filecoin Hyperspace",
      rpcUrl,
    },
  ],
  accountCenter: {
    desktop: {
      enabled: false,
    },
    mobile: {
      enabled: false,
    },
  },
});

const ContextProvider: React.FC<childrenProps> = ({ children }) => {
  const [state, setState] = useState(true);
  const [{ wallet }] = useConnectWallet();
  const [{ connectedChain }, setChain] = useSetChain();
  const [hyperspaceProvider, setHyperspaceProvider] = useState<any>();
  const [userAddress, setUserAddress] = useState<string>();
  const [signer, setSigner] = useState();
  const [diamond, setDiamond] = useState<any>();
  const [provider, setProvider] = useState<any>();

  const toggle = () => setState(!state);

  useEffect(() => {
    const mProvider = new ethers.providers.JsonRpcProvider(rpcUrl);
    setHyperspaceProvider(mProvider);
  }, []);

  useEffect(() => {
    if (wallet) {
      const { label, provider, accounts } = wallet;
      window.localStorage.setItem("connectedWallets", JSON.stringify(label));
      setProvider(new ethers.providers.Web3Provider(provider, "any"));
      setUserAddress(accounts[0].address);
    }
  }, [wallet]);

  useEffect(() => {
    if (provider) {
      setSigner(provider.getSigner());
    }
  }, [provider]);

  useEffect(() => {
    if (!signer || connectedChain?.id !== "3141") return;
    const diamond = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    setDiamond(diamond);
  }, [signer, connectedChain]);

  useEffect(() => {
    if ((wallet || signer || userAddress) && connectedChain?.id !== "3141") {
      try {
        setChain({ chainId: "3141" });
      } catch (error) {
        console.log(error);
      }
    }
  }, [connectedChain, signer, wallet, userAddress]);

  return (
    <Context.Provider value={{ state, toggle, userAddress }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
