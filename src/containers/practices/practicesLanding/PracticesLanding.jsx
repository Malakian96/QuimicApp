import SideNavBar from "../../../components/common/sideNav/SideNav";
import SearchBar from "../../../components/searchBar/SearchBar";
import Practices from "../../../components/practices/Practices";

const PracticesLanding = () => {
  return (
    <>
      <SideNavBar />
      <div className="container">
        <SearchBar />
        <Practices />
      </div>
    </>
  );
};

export default PracticesLanding;
