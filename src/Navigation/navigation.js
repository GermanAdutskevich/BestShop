import "./main.scss";



function Navigation() {
  
  return (
    <header>
      <div className="nav_container">
        <div className="logo">BestShop</div>
        <ul className="navigation">
          <li className="nav_li">WHY US</li>
          <li className="nav_li">BENEFITS</li>
          <li className="nav_li">PRICES</li>
          <li className="nav_li">CONTACT</li>
        </ul> 
        <div class="burger">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
