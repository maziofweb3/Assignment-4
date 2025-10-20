
import "./CreateLottery.css";
interface createLotteryProps {
  createLottery: () => void;
  setLotteryId: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setNoOfPart: (event: React.ChangeEvent<HTMLInputElement>) => void;
  lotteryId: string;
  Lottery_noOfPart: string;
}

const CreateLottery = ({
  createLottery,
  setLotteryId,
  setNoOfPart,
  lotteryId,
  Lottery_noOfPart,
}: createLotteryProps) => {
  return (
    <div className="CreateLottery lottery-inputs">
      <input
        placeholder="Lottery ID"
        value={lotteryId}
        min={1}
        onChange={setLotteryId}
        type="number"
      />

      <input
        placeholder="No Of Participants"
        value={Lottery_noOfPart}
        onChange={setNoOfPart}
        min={2}
        type="number"
      />

      <input
        type="submit"
        onClick={createLottery}
        className="button"
        value="Create Lottery"
      />
    </div>
  );
};

export { CreateLottery };
