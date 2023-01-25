import React, { useState } from 'react';

const Banknotes = ({ addMoneyToMachine }) => {
    const [nominal] = useState([50, 100, 500, 1000]);

    return (
        <div className="banknotes flex">
            <p className="banknotes__title">
                <span>Внести наличные</span>
            </p>
            {nominal.map((n, index) => (
                <button
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="banknotes__item btn"
                    value={n}
                    type="button"
                    onClick={addMoneyToMachine}
                >
                    {`${n} Р`}
                </button>
            ))}
        </div>
    );
};

export default Banknotes;
