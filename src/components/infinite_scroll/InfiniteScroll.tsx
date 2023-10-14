import Loader from 'components/loader/Loader';
import { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  children: React.ReactNode;
  loadMore: () => Promise<void>;
  hasNext: boolean;
}

const InfiniteScroll = ({
  children,
  loadMore,
  hasNext,
}: InfiniteScrollProps) => {
  const ref = useRef(null);
  const isFetching = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNext && !isFetching.current) {
          isFetching.current = true;
          loadMore().finally(() => {
            isFetching.current = false;
          });
        }
      },
      {
        threshold: 1.0,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [hasNext, loadMore]);

  return (
    <div>
      {children}
      <div ref={ref}></div>
      {hasNext && (
        <div
          style={{ width: '100%', textAlign: 'center', marginTop: 10 }}
          key="infinite-scroll-loader"
        >
          <Loader size={50} color="black" />
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
