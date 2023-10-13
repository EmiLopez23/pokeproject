import Loader from 'components/loader/Loader';
import './LoadingScreen.styles.css';

const LoadingScreen = () => {
  return (
    <div className="loader-container">
      <Loader size={100} color="black" />
    </div>
  );
};

export default LoadingScreen;
