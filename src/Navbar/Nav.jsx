

const Nav = () => {
    return (
          <div className="border-b border-gray-300">
            <div className="navbar bg-base-100 max-w-screen-xl m-auto my-5 text-[#171717] hover:underline ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="font text-xl menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
        <li>
          <a>Home</a>
          <ul className="p-2">
            <li><a>Page 1</a></li>
            <li><a>Page 2</a></li>
          </ul>
        </li>
        <li>
          <a>Pages</a>
          <ul className="p-2">
            <li><a>Page 1</a></li>
            <li><a>Page 2</a></li>
          </ul>
        </li>
        <li>
          <a>Portfolio</a>
          <ul className="p-2">
            <li><a>Page 1</a></li>
            <li><a>Page 2</a></li>
          </ul>
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <img src="src/assets/image 1.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font text-xl">
      
      <li>
        <details>
          <summary>Home</summary>
          <ul className="p-2">
            <li><a>Page 1</a></li>
            <li><a>Page 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
            <li><a>Page 1</a></li>
            <li><a>Page 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Portfolio</summary>
          <ul className="p-2">
            <li><a>Page 1</a></li>
            <li><a>Page 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="cursor-pointer font-semibold text-lg ">Join With us</a>
  </div>
</div>
          </div>
    );
};

export default Nav;