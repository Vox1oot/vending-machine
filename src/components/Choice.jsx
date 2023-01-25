import React from 'react';

const Choice = ({ products, buyProduct }) => (
    <div className="container-choice">
        <p className="choice__title">Выбрать товар</p>
        <div className="choice__buttons flex">
            {products.iDs.map((id) => (
                <button
                    className="btn"
                    type="button"
                    key={id}
                    id={id}
                    onClick={buyProduct}
                    disabled={products[id].count === 0}
                >
                    {id}
                </button>
            ))}
        </div>
    </div>
);

export default Choice;
