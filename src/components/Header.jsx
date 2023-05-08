import React from "react";
import myimage from "../user-secret-solid.svg"

function Header() {
  return (
    <header className="makeflex">
    
      <img src={myimage} className="imgMain" alt={"h"} />
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
