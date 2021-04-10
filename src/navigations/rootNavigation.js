import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Restaurant from "../screens/restaurant/restaurant.component";
import RestaurantMenu from "../screens/restaurantMenu/restaurantMenu.component";

const RootNavigation = () => {
    return (
        <HashRouter>
            <Route path="/:id" component={RestaurantMenu} />
            <Route exact path="/" component={Restaurant} />
        </HashRouter>
    );
};

export default RootNavigation;