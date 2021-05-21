import React, { useEffect, useState, createContext } from "react";

import SideNavBar from "../../../components/common/sideNav/SideNav";
import Practice from "../../../components/practices/practice/Practice";

const PracticePage = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <SideNavBar />
      <div className="container">
        <Practice />
      </div>
      ;
    </>
  );
};

export default PracticePage;
