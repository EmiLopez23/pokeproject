import SkeletonTag from 'components/skeleton_tag/SkeletonTag';
import './SkeletonCard.styles.css';
import SkeletonTitle from 'components/skeleton_title/SkeletonTitle';
import SkeletonImg from 'components/skeleton_img/SkeletonImg';
const SkeletonCard = () => {
  return (
    <article className="skeleton-card">
      <SkeletonImg width={150} height={150} />
      <div className="skeleton-desc">
        <div className="skeleton-id"></div>
        <SkeletonTitle width={200} height={25} />
        <div className="skeleton-types">
          <SkeletonTag width={100} height={30} />
          <SkeletonTag width={100} height={30} />
        </div>
      </div>
    </article>
  );
};

export default SkeletonCard;