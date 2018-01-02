import React from 'react';


function BoildWater(props) {
    if(props.celsiu > 100) {
        return <p>水会烧开</p>;
    }else{
        return <p>水会不会烧开</p>
    }
}

export default BoildWater;