import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../Cart.css';
import BlackSlider from '../../Landing page/bannerslider/blackSlider';
const Flash = () => {
  const [on, setOn] = useState(0);
  //   let ref = useRef(0);
  useEffect(() => {
    setInterval(() => {
      setOn(on + 1);

      // ref.current += 1;
    }, 2000);
    setOn(0);
  }, []);

  return (
      <>  <div className="blackdiv">
        <BlackSlider />
       </div>  
    </>
  );
};

export default Flash;
