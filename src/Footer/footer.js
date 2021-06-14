import "./main.scss";


function Footer(params) {
    return (
      <footer>
        <div className="info">
            <p className="footer_logo">BestShop</p>
            <p className="footer_rights">© 2021 BestShop LTD, All Rights Reserved</p>
        </div>
        <div className="social"> 
            <span className="twitter"/>
            <span className="facebook"/>
        </div>
      </footer>
    );
}

export default Footer;