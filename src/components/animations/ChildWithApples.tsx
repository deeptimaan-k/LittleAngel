import React from 'react';

const ChildWithApples = () => {
  return (
    <div className="absolute bottom-0 right-10 w-64 h-64 animate-float hidden lg:block">
      <div className="relative w-full h-full">
        {/* Child */}
        <div
          className="absolute bottom-0 right-0 w-40 h-40 bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('https://raw.githubusercontent.com/kkj-100/school-images/main/child.png')`,
            animation: 'bounce 2s ease-in-out infinite'
          }}
        ></div>

        {/* Floating Apples */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('https://raw.githubusercontent.com/kkj-100/school-images/main/apple.png')`,
              animation: `float-apple-${i} 3s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              top: `${20 + i * 30}%`,
              right: `${50 + i * 20}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ChildWithApples;