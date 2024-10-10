import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <FallingLines
      color="#4d87a9"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
    />
  );
};

export default Loader;
