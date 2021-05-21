import SideNavBar from "../../../components/common/sideNav/SideNav";
import SearchBar from "../../../components/searchBar/SearchBar";
import Groups from "../../../components/groups/Groups";

const GroupsLanding = () => {
  return (
    <>
      <SideNavBar />
      <div className="container">
        <SearchBar />
        <Groups />
      </div>
    </>
  );
};

export default GroupsLanding;
