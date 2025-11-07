import React from "react";
import chevron from "../../images/chevron.png";
export default function ArrowScrolldown(){
return( 
    <>
    {/* Right scroll down */}
  <div className="hidden lg:flex flex-col items-center justify-center h-full mt-20">
            <div className="flex flex-col items-center gap-3 animate-bounce">
              {[...Array(3)].map((_, i) => (
                <img key={i} src={chevron} alt="Scroll down" className="w-10 h-10" />
              ))}
            </div>
          </div>
                  {/* Mobile Scroll Indicator */}
                  <div className="lg:hidden relative z-20 flex flex-col items-center justify-center pb-8 translate-y-[80px]">
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                      {[...Array(3)].map((_, i) => (
                        <img key={i} src={chevron} alt="Scroll down" className="w-8 h-8" />
                      ))}
                    </div>
                  </div>
</>
);
}