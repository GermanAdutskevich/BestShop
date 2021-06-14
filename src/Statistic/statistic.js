import './main.scss';

function Statistic() {
    return(
        <div className="statistic">
            <h2 className="stat_h2">The most popular sales platform in country</h2>
            <div className="stat_data">
                <div className="stat_el">
                    <div className="stat_icon stat_icon_1">
                        <div className="stat_image stat_image_1"/>
                    </div>
                    <div className="stat_number">100000+</div>
                    <div className="stat_text">daily entries</div>
                </div>
                <div className="stat_el">
                    <div className="stat_icon stat_icon_2">
                        <div className="stat_image stat_image_2"/>
                    </div>
                    <div className="stat_number">2000000+</div>
                    <div className="stat_text">seen products every day</div>
                </div>
                <div className="stat_el">
                    <div className="stat_icon stat_icon_3">
                        <div className="stat_image stat_image_3"/>
                    </div>
                    <div className="stat_number">10000+</div>
                    <div className="stat_text">added posts daily</div>
                </div>
            </div>
        </div>
    )
}

export default Statistic;