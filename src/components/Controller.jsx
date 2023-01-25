import React from 'react';
/* import Display from './Display'; */
import Banknotes from './Banknotes';
import Choice from './Choice';
import PayBack from './PayBack';

const Controller = ({
    machineMoney, addMoneyToMachine, products, buyProduct, getChange,
}) => (
    <div className="container-controller">
        <div className="controller">
            <div className="display">
                <div className="display__count">{ machineMoney }</div>
            </div>
            <Banknotes addMoneyToMachine={addMoneyToMachine} />
            <Choice products={products} buyProduct={buyProduct} />
            <PayBack getChange={getChange} />
        </div>
    </div>
);

export default Controller;
