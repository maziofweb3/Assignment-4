
import * as Tabs from "@radix-ui/react-tabs";
import { CreateLottery } from "./CreateLottery/CreateLottery";
import { Participant } from "./Participant/Participant";
import { ViewWinner } from "./ViewWinner/ViewWinner";
import "./Main.css";

interface MainProps {
  account: string;
  getOwner: () => void;
  owner: string;
  lotteryId_p: string;
  setLotteryId_p: (event: React.ChangeEvent<HTMLInputElement>) => void;
  participate: () => void;
  createLottery: () => void;
  setLotteryId: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setNoOfPart: (event: React.ChangeEvent<HTMLInputElement>) => void;
  lotteryId: string;
  Lottery_noOfPart: string;
  viewWinner: () => void;
  winner: string;
  lotteryId_w: string;
  setLotteryId_w: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  transactionStatus: string;
}
// major component
const Main = ({
  createLottery,
  account,
  getOwner,
  owner,
  setLotteryId,
  setNoOfPart,
  lotteryId,
  Lottery_noOfPart,
  lotteryId_p,
  setLotteryId_p,
  participate,
  viewWinner,
  winner,
  lotteryId_w,
  setLotteryId_w,
  loading,
  transactionStatus,
}: MainProps) => {
  return (
    <div className="Main">
      <Tabs.Root
        defaultValue="tab1"
        className="flex tab flex-col w-[560px] shadow-[0_2px_10px] rounded-md shadow-black/50"
      >
        <Tabs.List
          className="flex tab-title border-b border-gray-600 shrink-0"
          aria-label="Interact with Ethers.js"
        >
          {account.toUpperCase() ===
            "0x49f2451abee35b261bb01f9d0cdc49f8f8df6e3f".toUpperCase() && (
            <Tabs.Trigger
              id="Create"
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-700 select-none first:rounded-tl-md last:rounded-tr-md hover:text-purple-700 data-[state=active]:text-purple-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab1"
            >
              Create Lottery
            </Tabs.Trigger>
          )}

          <Tabs.Trigger
            id="Participant"
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-700 select-none first:rounded-tl-md last:rounded-tr-md hover:text-purple-700 data-[state=active]:text-purple-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
            value="tab2"
          >
            Participate
          </Tabs.Trigger>
          <Tabs.Trigger
            id="ViewWinner"
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-700 select-none first:rounded-tl-md last:rounded-tr-md hover:text-purple-700 data-[state=active]:text-purple-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
            value="tab3"
          >
            View Winner
          </Tabs.Trigger>
        </Tabs.List>

        {account.toUpperCase() ===
          "0x49f2451abee35b261bb01f9d0cdc49f8f8df6e3f".toUpperCase() && (
          <Tabs.Content
            className="grow  p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab1"
          >
            <CreateLottery
              createLottery={createLottery}
              setLotteryId={setLotteryId}
              setNoOfPart={setNoOfPart}
              lotteryId={lotteryId}
              Lottery_noOfPart={Lottery_noOfPart}
            />
          </Tabs.Content>
        )}

        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab2"
        >
          <Participant
            account={account}
            getOwner={getOwner}
            owner={owner}
            lotteryId_p={lotteryId_p}
            setLotteryId_p={setLotteryId_p}
            participate={participate}
          />
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab3"
        >
          <ViewWinner
            viewWinner={viewWinner}
            winner={winner}
            lotteryId_w={lotteryId_w}
            setLotteryId_w={setLotteryId_w}
          />
        </Tabs.Content>
      </Tabs.Root>
      {loading && <p>Loading...</p>}
      {transactionStatus && <p>{transactionStatus}</p>}
    </div>
  );
};

export { Main };
