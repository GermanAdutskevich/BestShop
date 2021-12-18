import "./main.scss";

function Navigation() {
  return (
    <header>
      <div className="nav_container">
        <div className="logo">BestShop</div>
        <ul className="navigation">
          <li>
            <a className="menuLink" href="#">
              Why us
            </a>
          </li>
          <li>
            <a className="menuLink" href="#">
              Benefits
            </a>
          </li>
          <li>
            <a className="menuLink" href="#">
              About
            </a>
          </li>
          <li>
            <a className="menuLink" href="#">
              Contacts
            </a>
          </li>
        </ul>
        <div className="burger_container">
          <div className="burger">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
