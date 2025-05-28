"use client";

import { useEffect, useState } from 'react';

interface TimezoneClockProps {
  timezone: string;
}

export function TimezoneClock({ timezone }: TimezoneClockProps) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: timezone,
        timeZoneName: 'shortOffset', // Display offset like GMT+8
      };
      const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
      setCurrentTime(formattedTime);
    };

    updateTime(); // Initial call

    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [timezone]);

  return (
    <span className="text-sm text-muted-foreground/80">{currentTime}</span>
  );
} 