import React from "react";
import { useParams } from "react-router";
import { Provider } from "../../context/priceContext";
import logo from "../../assets/subway-logo.png";
import { maincourse, appetizers, beverages, desserts } from "../../mockData/restaurantMenu.json";
import Input from "../../components/input.component";
import "./restaurantMenu.component.css";
import Total from "../../components/total.component";

const RestaurantMenu = () => {

    const { id } = useParams();

    return (
        <div className="rootMain">
            <Provider>
                <div className="menu">
                    <img src={logo} />
                    <section>
                        <h2>Main Course</h2>
                        {maincourse.map((meal, index) => (
                            <div key={index}>
                                <div className="menuHead">
                                    <h4>{meal.name}</h4>
                                    <div className="menuInput">
                                        <Input type="mainCourse" name={meal.name} index={index} />
                                        <strong>${meal.price}</strong>
                                    </div>
                                </div>
                                <p style={{ marginTop: 0 }}>{meal.description}</p>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h2>Appetizers</h2>
                        {appetizers.map((meal, index) => (
                            <div key={index}>
                                <div className="menuHead">
                                    <h4>{meal.name}</h4>
                                    <div className="menuInput">
                                        <Input type="appetizers" name={meal.name} index={index} />
                                        <strong>${meal.price}</strong>
                                    </div>
                                </div>
                                <p style={{ marginTop: 0 }}>{meal.description}</p>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h2>Beverages</h2>
                        {beverages.map((meal, index) => (
                            <div key={index}>
                                <div className="menuHead">
                                    <h4>{meal.name}</h4>
                                    <div className="menuInput">
                                        <Input type="beverages" name={meal.name} index={index} />
                                        <strong>${meal.price}</strong>
                                    </div>
                                </div>
                                <p style={{ marginTop: 0 }}>{meal.description}</p>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h2>Desserts</h2>
                        {desserts.map((meal, index) => (
                            <div key={index}>
                                <div className="menuHead">
                                    <h4>{meal.name}</h4>
                                    <div className="menuInput">
                                        <Input type="desserts" name={meal.name} index={index} />
                                        <strong>${meal.price}</strong>
                                    </div>
                                </div>
                                <p style={{ marginTop: 0 }}>{meal.description}</p>
                            </div>
                        ))}
                    </section>
                </div>
                <Total />
            </Provider>
        </div>
    );
};

export default RestaurantMenu;