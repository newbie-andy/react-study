import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (<h1>hello {this.props.name}</h1>)
    }
}

Greeting.propTypes = {
    // name: PropTypes.oneOf(['张烁','近']) //   这里我们需要的数据类型是字符串
    name: PropTypes.arrayOf(PropTypes.string)
    // name: PropTypes.objectOf(PropTypes.number)
}

export default Greeting;