import { useCallback, useEffect, useState } from "react";

let interval: NodeJS.Timeout | null = null;

export type ElapsedTime = number;

export type TimerControl = {
  isRunning: boolean;

  start: () => void;
  reset: () => void;
  pause: () => void;
  resume: () => void;

  onChange?: (time: number, isRunning: boolean) => void;
};

export type UseTimer = [ElapsedTime, TimerControl];

export function useTimer(): UseTimer {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const start = useCallback(function () {
    setIsRunning(true);

    if (!interval) {
      interval = setInterval(function () {
        setCounter((counter) => counter + 1);
      }, 1000);
    }
  }, []);

  const reset = useCallback(function () {
    setCounter(0);
    setIsRunning(false);

    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }, []);

  const pause = useCallback(function () {
    setIsRunning(false);

    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }, []);

  const resume = useCallback(function () {
    setIsRunning(true);

    if (!interval) {
      interval = setInterval(function () {
        setCounter((counter) => counter + 1);
      }, 1000);
    }
  }, []);

  useEffect(
    function () {
      start();

      return function () {
        reset();
      };
    },
    [start, reset],
  );

  return [
    counter,
    {
      start,
      reset,
      pause,
      resume,
      isRunning,
    },
  ];
}
