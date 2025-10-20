
interface ParticipantProps {
  account: string;
  getOwner: () => void;
  owner: string;

  lotteryId_p: string;
  setLotteryId_p: (event: React.ChangeEvent<HTMLInputElement>) => void;
  participate: () => void;
}

const Participant = ({
  account,
  getOwner,
  owner,
  lotteryId_p,
  setLotteryId_p,
  participate,
}: ParticipantProps) => {
  return (
    <div>
      <h4>{account}</h4>
      <div className="CreateLottery lottery-inputs">
        <input
          placeholder="Lottery ID"
          value={lotteryId_p}
          onChange={setLotteryId_p}
          type="number"
        />
        <input
          type="submit"
          className="button"
          onClick={participate}
          value="Participate"
        />
      </div>

      <div>
        <pre id="val">{owner}</pre>
        <button onClick={getOwner}>Admin</button>
      </div>
    </div>
  );
};

export { Participant };
