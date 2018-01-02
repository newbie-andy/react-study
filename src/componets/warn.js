import React from 'react';

function Warn(props) {
    if(props.ishow) {
        return null;
    }

    return (
        <p>
            Woops! There is a warning!
        </p>
    )
}

export default Warn;