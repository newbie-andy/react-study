import React from 'react';
import PropTypes from 'prop-types';

class Default extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const children =  this.props.children;
        return (<div>Hello {this.props.name}</div>);
    }
}

//设置默认得值
Default.defaultProps = {
    name: "说张传稿"
}

export default Default;