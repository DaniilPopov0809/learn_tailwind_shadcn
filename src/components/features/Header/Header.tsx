import Navigation from "@/components/entities/Navigation/Navigation";
import ButtonGroup from "@/components/entities/ButtonGroup/ButtonGroup";

const Header = () => {
  return (
    <div className="bg-[#FEFCF8] py-4">
      <div className="container flex font-work">
        <Navigation />
        <ButtonGroup />
      </div>
    </div>
  )
};

export default Header;
