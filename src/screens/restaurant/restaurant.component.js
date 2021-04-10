import React, { useState } from "react";
import './restaurant.component.css';
import restaurantData from "../../mockData/restaurant.json";

const Restaurant = (props) => {

    const [restaurant, setRestaurant] = useState(restaurantData);

    const renderCard = (item, index) => {
        let template = [];
        if (index % 2 === 0) {
            template.push(<img key="evenImg" src={item.image} />);
            template.push(
                <div key="evenDiv" className="details">
                    <h4 className="normal-margin">{item.name}</h4>
                    <p className="normal-margin">{item.description}</p>
                    <small style={{ color: "darkgrey" }} className="normal-margin">
                        {item.location.street}, {item.location.city}, {item.location.state}, {item.location.pincode}, {item.location.country}
                    </small>
                </div>
            );
        } else {
            template.push(
                <div key="oddDiv" className="details">
                    <h4 className="normal-margin">{item.name}</h4>
                    <p className="normal-margin">{item.description}</p>
                    <small style={{ color: "darkgrey" }} className="normal-margin">
                        {item.location.street}, {item.location.city}, {item.location.state}, {item.location.pincode}, {item.location.country}
                    </small>
                </div>
            );
            template.push(<img key="oddImg" src={item.image} />);
        }
        return template;
    }

    const navigateToMenu = (item) => {
        props.history.push(`/${item.id}`);
    }

    return (
        <div className="rootMain">
            <p className="heading">Food world</p>
            {restaurant.map((item, index) => {
                return (
                    <div onClick={() => navigateToMenu(item)} key={item.id} className="restaurantCard">
                        {renderCard(item, index)}
                    </div>
                );
            })}
            {!(restaurant && restaurant.length) && (<div>No Items Found!</div>)}
        </div>
    );
};

export default Restaurant;