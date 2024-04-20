import { Suspense } from "react";
import Loading from "./Loading";

const Loader = (Component) =>
  function Internal(props) {
    const comp = (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
    return comp;
  };

export default Loader;
