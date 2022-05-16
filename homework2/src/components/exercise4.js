import { useState, useEffect } from "react";

const Exercise4 = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  if (props.withLoading && !loaded) return <div>Loading, please wait!</div>;

  return (
    <div className="border-style">
      <div>Exercise4</div>
      <div>Finished loading</div>
    </div>
  );
};

export default Exercise4;
