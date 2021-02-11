import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  const handleAuthentification = () => {
    if (user) {
      auth.signOut();
      history.replace("/");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentification} className="header__option">
            <span className="header__optionLineONe">
              Bonjour {user ? user.email : ",S'identifier"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Se déconnecter" : "Se connecter"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineONe">Retours</span>
            <span className="header__optionLineTwo">&amp; Commandes</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineONe">Votre</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link className="basket" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
