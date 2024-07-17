import { Link } from "react-router-dom";
import { brainwave } from "../assets/assets/";
import { navigation } from "../constants";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-small border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur=sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to="/" className="block w-(12rem) xl:mr=8">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </Link>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link className="m-1" to={item?.url} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
