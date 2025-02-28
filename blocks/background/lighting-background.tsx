import React from 'react';

export const LightingBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-accent/10 opacity-80"></div>
      
      {/* Central radial glow */}
      <div className="absolute -inset-[30%] bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_60%)] opacity-20 blur-3xl"></div>
      
      {/* Top-right light source */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl opacity-30 transform -translate-y-1/2 translate-x-1/4"></div>
      
      {/* Bottom-left light source */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl opacity-20 transform translate-y-1/4 -translate-x-1/4"></div>
    </div>
  );
}; 