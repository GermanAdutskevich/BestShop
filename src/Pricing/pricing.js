import "./main.scss";

function Pricing() {
    return (
      <section className="section_pricing">
        <div className="pricing_container">
          <h3 className="h3_pricing">Pricing</h3>
          <div className="pricing_container_info">
            <div className="basic">
              <div className="single_pricing_container">
                <div className="title_container">
                  <p className="title">Basic</p>
                  <p className="price price_basic">$0</p>
                </div>
                <ul className="price_list">
                  <li className="include">100 MB HDD</li>
                  <li className="include">1 subdomain</li>
                  <li className="include">2 e-mails</li>
                  <li className="not_include">Two years license</li>
                  <li className="not_include">Full support</li>
                </ul>
              </div>
              <button className="button_begin button_basic">Begin</button>
            </div>
            <div className="professional">
              <div className="single_pricing_container">
                <div className="title_container">
                  <p className="title title_professional">Professional</p>
                  <p className="price price_professional">$25</p>
                  <p className="price_limit">Limited offer</p>
                </div>
                <ul className="price_list">
                  <li className="include">500 MB HDD</li>
                  <li className="include">2 subdomain</li>
                  <li className="include">5 e-mails</li>
                  <li className="include">One year license</li>
                  <li className="not_include">Full support</li>
                </ul>
              </div>
              <button className="button_begin button_professional">
                Begin
              </button>
            </div>
            <div className="premium">
              <div className="single_pricing_container">
                <div className="title_container">
                  <p className="title">Premium</p>
                  <p className="price price_premium">$60</p>
                  <p className="price_limit">Limited offer</p>
                </div>
                <ul className="price_list">
                  <li className="include">2 GB HDD</li>
                  <li className="include">5 subdomain</li>
                  <li className="include">20 e-mails</li>
                  <li className="include">Two years license</li>
                  <li className="include">Full support</li>
                </ul>
              </div>
              <button className="button_begin button_premium">Begin</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Pricing;