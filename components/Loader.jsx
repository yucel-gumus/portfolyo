import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      className="flex justify-center items-center w-full h-full flex-col z-30"
    >
      <div className="relative">
        <div className="canvas-loader z-30 text-white animate-spin-slow"></div>
        <p className="text-[14px] text-white font-bold mt-10 z-30">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
}

export function PreLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      let i = 0;
      const interval = setInterval(() => {
        i += 1;
        setProgress(i);
        if (i >= 100) {
          clearInterval(interval);
        }
      }, 25);
    };

    updateProgress();
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-bgPrimaryLight dark:bg-bgPrimaryDark z-40 fixed top-0 left-0 flex flex-col justify-center items-center gap-8">
      <div className="loader md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
        <div className="loader_cube loader_cube--color"></div>
        <div className="loader_cube loader_cube--glowing"></div>
        <span className="loader-span"></span>
      </div>
      <h1 className="text-2xl text-ctnPrimaryLight dark:text-ctnPrimaryDark">
        {progress}%
      </h1>
    </div>
  );
}

export default CanvasLoader;
