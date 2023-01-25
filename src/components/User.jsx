import React from 'react';
import Backpack from './Backpack.jsx';

const User = ({ userMoney, backpack }) => (
    <div className="container-user">
        <div className="user">
            <div className="user__wallet">
                <span>{`${userMoney} Р`}</span>
            </div>
            <Backpack backpack={backpack} />
        </div>
    </div>
);

export default User;
