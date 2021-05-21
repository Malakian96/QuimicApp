import React, { useContext } from "react";
// import { User } from "../../../App";
import SideNavBar from "../../../components/common/sideNav/SideNav";
import SearchBar from "../../../components/searchBar/SearchBar";
import Users from "../../../components/users/Users";

const UsersLanding = () => {
  // const { user } = useContext(User);

  return (
    <>
      <SideNavBar />
      <div className="container">
        <SearchBar />
        <Users />
      </div>
    </>
  );
};

export default UsersLanding;
