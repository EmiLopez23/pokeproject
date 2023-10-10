import './SkeletonTitle.styles.css';

const SkeletonTitle = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <div
      className="skeleton-title"
      style={{ width: width, height: height }}
    ></div>
  );
};

export default SkeletonTitle;
