import React from 'react';

const nominals = [1, 5, 10, 50, 100, 500];

const PayBack = ({ getChange }) => (
    <div className="container-payback">
        <div className="payback">
            <p className="payback__title">Получить сдачу номиналом:</p>
            <div className="payback__buttons flex">
                {nominals.map((n, index) => (
                    <button
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        type="button"
                        className="payback__btn btn"
                        value={n}
                        onClick={getChange}
                    >
                        {`${n} Р`}
                    </button>
                ))}
            </div>
        </div>
    </div>
);

export default PayBack;
