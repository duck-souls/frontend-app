import { useState, useEffect } from "react";

const Timer2 = () => {
  const [time, setTime] = useState(2 * 60 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div>
      {hours}h {minutes}m {seconds}s
    </div>
  );
};

export default Timer2;
