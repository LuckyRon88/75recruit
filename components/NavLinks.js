import React, { useState, useEffect } from "react";
import Link from "next/link";


const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
    console.log(dropdownStatus);
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>




      <li>


<Link href="/positions">



            <a>Jobs</a></Link>



      </li>
        <li>
            <Link href="/contactus">
                <a>Contact Us</a>
            </Link>
        </li>
        <li>
            <Link href="/china">
                <a>Life In China</a>
            </Link>
        </li>
    </ul>
  );
};

export default NavLinks;
