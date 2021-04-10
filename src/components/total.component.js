import React, { useContext } from "react";
import { Context } from "../context/priceContext";
import menus from "../mockData/restaurantMenu.json";

const rootContainer = {
    backgroundColor: "#F8F8F8",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
}

const child = {
    marginRight: 20,
    fontFamily: 'cursive',
    color: 'black',
    fontSize: 28
}

const Total = function () {
    const [items] = useContext(Context);

    const totalPrice = Object.keys(items).reduce((acc, curr) => {
        const [group, item] = curr.split("-");
        const amount = items[curr] * (menus[group][item]).price;
        return acc + amount;
    }, 0);

    return (
        <div style={rootContainer}>
            <div style={child}>
                <span>Total : </span>
                <span>${totalPrice}</span>
            </div>
        </div>
    );
}

export default Total;