import { useState, useCallback, useEffect, useRef } from "react";

export type ElapsedTime = number;

export type TimerStates = {
  running: boolean | null;
  clockedIn: boolean | null;
};

export type TimerControls = {
  start: () => void;
  reset: () => void;
  pause: () => void;
  resume: () => void;
};

export type UseTimer = [ElapsedTime, TimerStates, TimerControls];

export function useTimer(): UseTimer {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [elapsedTime, setElapsedTime] = useState<ElapsedTime>(0);
  const [timerStates, setTimerStates] = useState<TimerStates>({
    running: null,
    clockedIn: null,
  });

  const tick = useCallback(function () {
    setElapsedTime((elapsedTime) => {
      return elapsedTime + 1;
    });
  }, []);

  const clearTimer = useCallback(function () {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(
    function () {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(tick, 1000);

        setTimerStates({
          running: true,
          clockedIn: true,
        });
      }
    },
    [tick],
  );

  const pause = useCallback(
    function () {
      clearTimer();

      setTimerStates({
        running: false,
        clockedIn: true,
      });
    },
    [clearTimer],
  );

  const resume = useCallback(
    function () {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(tick, 1000);

        setTimerStates({
          running: true,
          clockedIn: true,
        });
      }
    },
    [tick],
  );

  const reset = useCallback(
    function () {
      clearTimer();

      setElapsedTime(0);
      setTimerStates({
        running: null,
        clockedIn: null,
      });
    },
    [clearTimer],
  );

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
    elapsedTime,
    timerStates,
    {
      start,
      reset,
      pause,
      resume,
    },
  ];
}
