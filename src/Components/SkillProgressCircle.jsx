import React from 'react';

const SkillProgressCircle = ({ name, percent }) => {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        // className="rotate-[-90deg]"
      >
        <circle
          stroke="#2D2D2D"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#22C55E"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fill="white"  // <== THIS IS THE FIX
        >
          {percent}%
        </text>
      </svg>
      <p className="text-white mt-2">{name}</p>
    </div>
  );
};

export default SkillProgressCircle;
