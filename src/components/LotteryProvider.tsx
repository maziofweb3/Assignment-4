
import { ethers } from "ethers";
import { createContext, useState, FC, ReactNode } from "react";
import { BUNN_ICO_ABI, BUNN_ICO_ADDRESS } from "./store";

interface LotteryContextType {
  account: string;
  connect: () => void;
  buttonText: string;
  owner: string;
  getOwner: () => void;
  createLottery: () => void;
  lotteryId: string;
  setLotteryId: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Lottery_noOfPart: string;
  setNoOfPart: (event: React.ChangeEvent<HTMLInputElement>) => void;
  lotteryId_p: string;
  setLotteryId_p: (event: React.ChangeEvent<HTMLInputElement>) => void;
  participate: () => void;
  logout: () => void;
  viewWinner: () => void;
  winner: string;
  lotteryId_w: string;
  setLotteryId_w: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  transactionStatus: string;
}

export const LotteryContext = createContext<LotteryContextType>({
  account: "",
  connect: () => {},
  buttonText: "Connect Wallet",
  owner: "",
  getOwner: () => {},
  createLottery: () => {},
  lotteryId: "",
  setLotteryId: () => {},
  Lottery_noOfPart: "",
  setNoOfPart: () => {},
  lotteryId_p: "",
  setLotteryId_p: () => {},
  participate: () => {},
  logout: () => {},
  viewWinner: () => {},
  winner: "",
  lotteryId_w: "",
  setLotteryId_w: () => {},
  loading: false,
  transactionStatus: "",
});

interface LotteryProviderProps {
  children: ReactNode;
}

export const LotteryProvider: FC<LotteryProviderProps> = ({ children }) => {
  const [account, setAccount] = useState(""),
    [buttonText, setButtonText] = useState("Connect Wallet"),
    [owner, setOwner] = useState(""),
    [lotteryId, setLotteryIdValue] = useState(""),
    [lotteryId_p, setLotteryIdValue_p] = useState(""),
    [Lottery_noOfPart, setLottery_noOfPart] = useState(""),
    [winner, setWinner] = useState(""),
    [lotteryId_w, setLotteryId_w_value] = useState(""),
    [loading, setLoading] = useState(false),
    [transactionStatus, setTransactionStatus] = useState("");

  const getProvider = () => {
    if (window.ethereum) {
      return new ethers.BrowserProvider(window.ethereum);
    } else {
      alert("MetaMask not installed; using read-only defaults");
      return ethers.getDefaultProvider();
    }
  };

  const connect = async () => {
    try {
      const provider = getProvider();
      if (provider instanceof ethers.BrowserProvider) {
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        setAccount(account);
        setButtonText(account);
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const getOwner = async () => {
    try {
      const provider = getProvider();
      const contract = new ethers.Contract(
        BUNN_ICO_ADDRESS,
        BUNN_ICO_ABI,
        provider
      );
      const owner = await contract.owner();
      setOwner(owner);
    } catch (error) {
      console.error("Failed to get owner:", error);
    }
  };

  const createLottery = async () => {
    try {
      setLoading(true);
      setTransactionStatus("Creating lottery...");
      const provider = getProvider();
      if (provider instanceof ethers.BrowserProvider) {
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          BUNN_ICO_ADDRESS,
          BUNN_ICO_ABI,
          signer
        );
        const lottery = await contract.createLottery(
          lotteryId,
          Lottery_noOfPart
        );
        await lottery.wait();
        setTransactionStatus("Lottery created successfully!");
      }
    } catch (error) {
      console.error("Failed to create lottery:", error);
      setTransactionStatus("Failed to create lottery.");
    } finally {
      setLoading(false);
    }
  };

  const setLotteryId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLotteryIdValue(event.target.value);
  };

  const setNoOfPart = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLottery_noOfPart(event.target.value);
  };

  const setLotteryId_p = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLotteryIdValue_p(event.target.value);
  };

  const participate = async () => {
    try {
      setLoading(true);
      setTransactionStatus("Participating in lottery...");
      const provider = getProvider();
      if (provider instanceof ethers.BrowserProvider) {
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          BUNN_ICO_ADDRESS,
          BUNN_ICO_ABI,
          signer
        );
        const participation_tx = await contract.participate(lotteryId_p);
        await participation_tx.wait();
        setTransactionStatus("Successfully participated in the lottery!");
      }
    } catch (error) {
      console.error("Failed to participate in lottery:", error);
      setTransactionStatus("Failed to participate in the lottery.");
    } finally {
      setLoading(false);
    }
  };
  const viewWinner = async () => {
    try {
      setLoading(true);
      setTransactionStatus("Fetching winner...");
      const provider = getProvider();
      const contract = new ethers.Contract(
        BUNN_ICO_ADDRESS,
        BUNN_ICO_ABI,
        provider
      );
      const winner = await contract.viewWinner(lotteryId_w);
      setWinner(winner);
      setTransactionStatus("Winner fetched successfully!");
    } catch (error) {
      console.error("Failed to fetch winner:", error);
      setTransactionStatus("Failed to fetch winner.");
    } finally {
      setLoading(false);
    }
  };

  const setLotteryId_w = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLotteryId_w_value(event.target.value);
  };

  const logout = () => {
    setAccount("");
    setButtonText("Connect Wallet");
  };

  return (
    <LotteryContext.Provider
      value={{
        account,
        connect,
        buttonText,
        owner,
        getOwner,
        createLottery,
        lotteryId,
        setLotteryId,
        Lottery_noOfPart,
        setNoOfPart,
        lotteryId_p,
        setLotteryId_p,
        participate,
        logout,
        viewWinner,
        winner,
        lotteryId_w,
        setLotteryId_w,
        loading,
        transactionStatus,
      }}
    >
      {children}
    </LotteryContext.Provider>
  );
};
