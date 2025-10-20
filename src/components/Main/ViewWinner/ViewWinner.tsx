
interface ViewWinnerProps {
  viewWinner: () => void;
  winner: string;
  lotteryId_w: string;
  setLotteryId_w: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ViewWinner = ({
  viewWinner,
  winner,
  lotteryId_w,
  setLotteryId_w,
}: ViewWinnerProps) => {
  return (
    <div>
      <div className="CreateLottery lottery-inputs">
        <input
          placeholder="Lottery ID"
          value={lotteryId_w}
          onChange={setLotteryId_w}
          type="number"
        />
        <input
          type="submit"
          className="button"
          onClick={viewWinner}
          value="View Winner"
        />
      </div>
      {winner && (
        <div>
          <h4>Winner:</h4>
          <pre>{winner}</pre>
        </div>
      )}
    </div>
  );
};

export { ViewWinner };
