function Nav() {
  return (
    <nav className="flex justify-between items-center tracking-[0.3em]">
      <a href="#projects" className="px-8 py-2 hover:bg-gray-200">
        Projects
      </a>
      <a href="#about" className="px-8 py-2 hover:bg-gray-200">
        About
      </a>
      <a href="#contact" className="px-8 py-2 hover:bg-gray-200">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
