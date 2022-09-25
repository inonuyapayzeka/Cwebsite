import React from "react";
import AnimatedNumbers from "react-animated-numbers";

function Info() {
  const [num, setNum] = React.useState(331231);
  return (


    <div className="container">
        <div    className=' font-bold text-color2 text-3xl h-80  bg-gradient-to-r from-purple-900 to-fuchsia-500 flex flex-row justify-items-center items-center   '>
                    <div className="basis-1/3 sm:p-20 text-color1 ">
                        <AnimatedNumbers
        includeComma
        animateToNumber={100}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers> Projects</div>
      <div className="basis-1/3 text-color1">
                        <AnimatedNumbers
        includeComma
        animateToNumber={10}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers> Active Member</div>
      <div className="basis-1/3 text-color1">
                        <AnimatedNumbers
        includeComma
        animateToNumber={100}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers> Members</div>
                   
                    </div>
      

  
      
    </div>
  );
}

export default Info;