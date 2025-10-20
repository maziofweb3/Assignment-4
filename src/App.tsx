
import { useContext } from "react";
// components
import { Main } from "./components/Main/Main";
import { ConnectWallet } from "./components/Connectwallet/Connectwallet";
import { Footer } from "./components/Footer/Footer";
import { Title } from "./components/Title/Title";
import { Sidebar } from "./components/Sidebar/Sidebar";
// context
import { LotteryContext } from "./components/LotteryProvider";
import "./App.css";
// app
function App() {
  const {
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
  } = useContext(LotteryContext);
  // render
  return (
    <div className="body">
      <Sidebar />
      <div className="mainSection">
        <Title />
        <Main
          createLottery={createLottery}
          account={account}
          getOwner={getOwner}
          owner={owner}
          setLotteryId={setLotteryId}
          setNoOfPart={setNoOfPart}
          lotteryId={lotteryId}
          Lottery_noOfPart={Lottery_noOfPart}
          lotteryId_p={lotteryId_p}
          setLotteryId_p={setLotteryId_p}
          participate={participate}
          viewWinner={viewWinner}
          winner={winner}
          lotteryId_w={lotteryId_w}
          setLotteryId_w={setLotteryId_w}
          loading={loading}
          transactionStatus={transactionStatus}
        />
        <ConnectWallet
          account={account}
          logout={logout}
          buttonText={buttonText}
          connectWallet={connect}
        />
      </div>
      <Footer />
    </div>
  );
}
export default App;
