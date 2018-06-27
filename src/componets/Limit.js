import React from 'react';
import PropTypes from 'prop-types';

class Limit extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const children =  this.props.children;
        return (<div>
            {children}
        </div>);
    }
}

Limit.propTypes = {
    children: PropTypes.element.isRequired
}

export default Limit;