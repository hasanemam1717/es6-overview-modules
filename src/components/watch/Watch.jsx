import React from 'react';

const Watch = ({watch}) => {
    console.log(watch);
    const {name,id,price} = watch;
    return (
        <div>
            <h2>Watchs: {name}</h2>
            <h2>id: {id}</h2>
            <h2>Price: {price}</h2>
        </div>
    );
};

export default Watch;