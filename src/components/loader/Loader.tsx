import './Loader.styles.css';

const Loader = ({ size, color }: { size: number; color: string }) => {
  return (
    <div
      className="spinner"
      style={{ width: size, height: size, borderColor: color }}
    ></div>
  );
};

export default Loader;
