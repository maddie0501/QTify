import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const Navbar = () => {
  const handleSearchChange = (event) => {

    console.log("Search", event.target.value);
  };

  const handleButtonClick = () => {
    
    console.log("Button");
  };

  return (
    <nav className={styles.navbar}>
      <Logo />

      <Search placeholder="Search..." onChange={handleSearchChange} />

      <Button onClick={handleButtonClick}>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
