import Logo from "../common/Logo";
import Nav from "../common/Nav";

function Header() {
  return (
    <header className="w-full fixed z-100 flex justify-between items-center bg-white text-black h-16 shadow-lg px-10">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
