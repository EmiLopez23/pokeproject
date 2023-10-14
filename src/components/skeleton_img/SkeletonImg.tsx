import './SkeletonImg.styles.css';

const SkeletonImg = ({ width, height }: { width: number; height: number }) => {
  return (
    <div
      className="skeleton-img"
      style={{ width: width, height: height }}
    ></div>
  );
};

export default SkeletonImg;
