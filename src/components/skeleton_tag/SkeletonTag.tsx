import './SkeletonTag.styles.css';

const SkeletonTag = ({ width, height }: { width: number; height: number }) => {
  return (
    <span
      className="skeleton-tag"
      style={{ width: width, height: height }}
    ></span>
  );
};

export default SkeletonTag;
