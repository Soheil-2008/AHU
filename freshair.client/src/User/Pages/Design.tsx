import { useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className="flex h-dvh">
      <div className="w-2/5 bg-emerald-700 px-2">Section 1</div>
      <div className="w-2/5 bg-emerald-800 px-2">Section 2</div>
      <div className="w-1/5 bg-emerald-900 px-2">Section 3</div>
    </div>
  );
};

export default Home;
