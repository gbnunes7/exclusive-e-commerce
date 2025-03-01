'use client'
import { useEffect, useState } from 'react';

type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    const difference = targetDate.getTime() - new Date().getTime();

    let timeLeft: TimeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 text-center text-black text-xl font-bold">
      <div>
        <span className="block text-sm">Days</span>
        {String(timeLeft.days).padStart(2, '0')}
      </div>
      <span className="text-red-400">:</span>
      <div>
        <span className="block text-sm">Hours</span>
        {String(timeLeft.hours).padStart(2, '0')}
      </div>
      <span className="text-red-400">:</span>
      <div>
        <span className="block text-sm">Minutes</span>
        {String(timeLeft.minutes).padStart(2, '0')}
      </div>
      <span className="text-red-400">:</span>
      <div>
        <span className="block text-sm">Seconds</span>
        {String(timeLeft.seconds).padStart(2, '0')}
      </div>
    </div>
  );
};
