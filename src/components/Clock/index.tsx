import React, { useState, useEffect } from 'react';

interface ClockProps {
  status: "start" | "stop"|"running";
  setTime: (clock: string) => void;
}

const Clock: React.FC<ClockProps> = ({ status, setTime }) => {

  const [clock, setClock] = useState('0:00');

  useEffect(() => {
    if (status === 'start') {
      setClock('0:00');
    }
    let interval = setInterval(() => {
      setClock(clock => {
        const [minute, second] = clock.split(':');
        let newMinute = Number(minute);
        let newSecond = Number(second) + 1;
        if (newSecond === 60) {
          newMinute = newMinute + 1;
          newSecond = 0;
        }
        const newHour = newMinute.toString() + ":" + `0${newSecond}`.slice(-2);
        return newHour;
      });
    }, 1000);
    if (status === 'stop' && clock !== '0:00') {
      setTime(clock);
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [status, clock, setTime]);

  return (
    <p>
      {clock}
    </p>
  )

}

export default Clock;