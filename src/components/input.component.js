import React, { useContext } from "react";
import { Context } from "../context/priceContext";

const Input = function ({ type, name, index }) {
    const [items, updateItem] = useContext(Context);

    const priceInputStyle = {
        borderRadius: 57,
        width: 27
    };

    return (
        <input
            type="text"
            style={priceInputStyle}
            inputmode="numeric"
            pattern="[0-9]*"
            onChange={({ target }) => updateItem(type, index, target.value)}
            name={name.replace(" ", "-").toLowerCase()}
        />
    );
}

export default Input;
