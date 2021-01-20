import React, { createContext, useState } from "react";

const Scroll = createContext([{}, () => {}]);

const ScrollContext = (props) => {
  const [scrollTop, setScrollTop] = useState({ position: 0 });
  return (
    <Scroll.Provider value={[scrollTop, setScrollTop]}>
      {props.children}
    </Scroll.Provider>
  );
};

export { Scroll, ScrollContext };
