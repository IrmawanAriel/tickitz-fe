import Logo from "./Logo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <header className="flex justify-between items-center font-mulish py-5 px-4 tbt:px-10 lg:px-32 text-sm text-center border-b border-neutral-200">
      <Logo />
      <NavLinks />
      <AuthButtons />
      <Hamburger />
    </header>
  );
}

export default Header;
