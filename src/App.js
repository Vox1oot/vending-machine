import React, { useState } from 'react';
import data from './data/data.js';

import Store from './components/Store.jsx';
import Controller from './components/Controller';
import User from './components/User';

const App = () => {
    const [products, setProducts] = useState(data);
    const [machineMoney, setMachineMoney] = useState(0);
    const [userMoney, setUserMoney] = useState(1000);
    const [backpack, setBackpack] = useState([]);

    const addMoneyToMachine = (event) => {
        const value = +event.target.value;
        if (userMoney - value < 0) {
            return;
        }

        setMachineMoney((prev) => prev + value);
        setUserMoney((prev) => prev - value);
    };

    const buyProduct = (event) => {
        const { id } = event.target;
        const product = products[id];

        if (machineMoney - product.cost < 0) {
            return;
        }

        const newProducts = { ...products };
        newProducts[id].count -= 1;

        setMachineMoney((prev) => prev - product.cost);
        setProducts(newProducts);
        setBackpack([...backpack, product]);
    };

    const getChange = (event) => {
        const value = +event.target.value;

        if (machineMoney - value < 0) {
            return;
        }

        setMachineMoney((prev) => prev - value);
        setUserMoney((prev) => prev + value);
    };

    return (
        <div className="App">
            <h1>Вендинговый аппарат</h1>
            <main className="main flex">
                <Store products={products} />
                <Controller
                    machineMoney={machineMoney}
                    addMoneyToMachine={addMoneyToMachine}
                    products={products}
                    buyProduct={buyProduct}
                    getChange={getChange}
                />
                <User userMoney={userMoney} backpack={backpack} />
            </main>
        </div>
    );
};

export default App;
