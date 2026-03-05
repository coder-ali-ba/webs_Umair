export default function SpinningText({dark}) {

   
    
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative w-40 h-40">
        <svg
          className="absolute inset-0 w-full h-full animate-spin"
          style={{ animationDuration: '8s' }}
          viewBox="0 0 160 160"
        >
          <defs>
            <path
              id="curve"
              d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              fill="none"
            />
          </defs>
          <text
            className="text-sm font-semibold"
            letterSpacing="3"
            fill={dark ? "#e5e7eb" : "#1e293b"}
          >
            <textPath href="#curve" startOffset="0%" textAnchor="start" >
              SCROLL-DOWN
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 border-2 border-slate-400 rounded-full" />
      </div>
    </div>
  );
}