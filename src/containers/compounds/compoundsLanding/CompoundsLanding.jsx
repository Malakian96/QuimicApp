import SideNavBar from "../../../components/common/sideNav/SideNav";
import SearchBar from "../../../components/searchBar/SearchBar";
import Compounds from "../../../components/compounds/Compounds";

const CompoundsLanding = () => {
  return (
    <>
      <SideNavBar />
      <div className="container">
        <SearchBar />
        <Compounds />
      </div>
    </>
  );
};

export default CompoundsLanding;
