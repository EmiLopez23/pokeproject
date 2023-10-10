import './LinearProgress.css';

const LinearProgress = ({ value }: { value: number }) => {
  return (
    <div className="linear-progress-container">
      <span className="linear-progress" style={{ width: `${value}%` }}></span>
    </div>
  );
};

export default LinearProgress;
