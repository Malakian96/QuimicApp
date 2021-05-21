import SideNavBar from "../../../components/common/sideNav/SideNav";
import SearchBar from "../../../components/searchBar/SearchBar";
import Components from "../../../components/components/Components";

const ComponentsLanding = () => {
  return (
    <>
      <SideNavBar />
      <div className="container">
        <SearchBar />
        <Components />
      </div>
    </>
  );
};

export default ComponentsLanding;
