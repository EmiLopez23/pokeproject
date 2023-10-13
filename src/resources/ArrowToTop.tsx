type ArrowToTopProps = {
  [key: string]: string | number | boolean | undefined;
};

const ArrowToTop = (props: ArrowToTopProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="white"
    {...props}
  >
    <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
  </svg>
);
export default ArrowToTop;
