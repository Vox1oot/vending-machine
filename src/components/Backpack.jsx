import React from 'react';

const Backpack = ({ backpack }) => (
    <div className="user__backpack backpack">
        <div className="backpack__title">Мой рюкзак</div>
        <div className="backpack__items flex">
            {backpack.map((product) => (
                <div key={product.id} className="backpack__item">
                    <img
                        className="product-img"
                        src={`/assets/${product.img}`}
                        alt={product.name}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default Backpack;
