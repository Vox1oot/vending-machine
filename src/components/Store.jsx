import React from 'react';

const Store = ({ products }) => (
    <section className="container-store">
        <div className="store flex">
            {products.iDs.map((id) => (
                <div key={id} className="item">
                    <div className="item__img">
                        <img
                            className="product-img"
                            src={
                                products[id].count !== 0
                                    ? `/assets/${products[id].img}`
                                    : '/assets/sold-out.png'
                            }
                            alt={products[id].name}
                        />
                    </div>
                    <div className="item__info">
                        <div className="item__number">
                            <span>{`№${products[id].id}`}</span>
                        </div>
                        <div className="item__cost">
                            <span>{`${products[id].cost} Р`}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="output-box" />
    </section>
);

export default Store;
