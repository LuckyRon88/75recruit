import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunFact = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="funfact-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 1 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 453 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Teachers found</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 1 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 96 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Average phone time (minutes) spent on a teacher before they move to China</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 1 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 134 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Partner Schools</p>
            </div>
          </div>
          {/*<div className="col-lg-3 col-md-6">*/}
          {/*  <div className="funfact-one__single">*/}
          {/*    <h3 className="counter">*/}
          {/*      <VisibilitySensor*/}
          {/*        onChange={onVisibilityChange}*/}
          {/*        offset={{ top: 1 }}*/}
          {/*        delayedCall*/}
          {/*      >*/}
          {/*        <CountUp end={counter.startCounter ? 266 : 0} />*/}
          {/*      </VisibilitySensor>*/}
          {/*    </h3>*/}
          {/*    <p>Awards</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default FunFact;
