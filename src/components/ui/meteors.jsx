import React from "react";

export const Meteors = ({ count = 30 }) => {
  const meteors = new Array(count).fill(true);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {meteors.map((_, i) => (
        <span
          key={i}
          className="absolute block h-[2px] w-[100px] bg-gradient-to-r from-white/80 to-transparent opacity-60 rounded-full animate-meteor"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1.5 + Math.random() * 2}s`,
          }}
        ></span>
      ))}

      <style>
        {`
          @keyframes meteor {
            0% {
              transform: translateX(0) translateY(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateX(300px) translateY(200px) scale(1);
              opacity: 0;
            }
          }

          .animate-meteor {
            animation: meteor linear infinite;
          }
        `}
      </style>
    </div>
  );
};
