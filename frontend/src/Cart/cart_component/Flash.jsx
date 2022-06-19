import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../Cart.css';
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
    <>
      <div className="offer">
        {on % 2 === 0 ? (
          <div>
            <span className="highlight">free shipping</span>
            <span className="subhighlight"> on order over $99</span>
          </div>
        ) : (
          <div>
            <span className="highlight">Welcome to bluefly</span>
            <span className="subhighlight">
              luxury brands at discounted price
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Flash;
