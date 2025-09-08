"use client";

export function HeroAnimation() {
  return (
    <div className="hero-animation" aria-hidden>
      {/* Floating Tools */}
      <div className="floating-tool hammer" style={{ '--delay': '0s', '--duration': '8s' } as React.CSSProperties}>
        🔨
      </div>
      <div className="floating-tool wrench" style={{ '--delay': '2s', '--duration': '10s' } as React.CSSProperties}>
        🔧
      </div>
      <div className="floating-tool paintbrush" style={{ '--delay': '4s', '--duration': '12s' } as React.CSSProperties}>
        🎨
      </div>
      <div className="floating-tool drill" style={{ '--delay': '1s', '--duration': '9s' } as React.CSSProperties}>
        ⚡
      </div>
      
      {/* Floating Furniture/Design Elements */}
      <div className="floating-furniture chair" style={{ '--delay': '3s', '--duration': '11s' } as React.CSSProperties}>
        🪑
      </div>
      <div className="floating-furniture lamp" style={{ '--delay': '5s', '--duration': '13s' } as React.CSSProperties}>
        💡
      </div>
      <div className="floating-furniture plant" style={{ '--delay': '2.5s', '--duration': '10.5s' } as React.CSSProperties}>
        🌿
      </div>
      
      {/* Floating Design Patterns */}
      <div className="floating-pattern pattern1" style={{ '--delay': '1.5s', '--duration': '14s' } as React.CSSProperties}>
        ⬜
      </div>
      <div className="floating-pattern pattern2" style={{ '--delay': '3.5s', '--duration': '16s' } as React.CSSProperties}>
        🔲
      </div>
      <div className="floating-pattern pattern3" style={{ '--delay': '0.5s', '--duration': '15s' } as React.CSSProperties}>
        ⬛
      </div>
    </div>
  );
}
