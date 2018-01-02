import React from 'react';
import Warn from './warn';

class Pagewarn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            warning: false
        };
    }

    handleWarnFun = () => {
        this.setState((prevState)=>({
            warning: !prevState.warning
        }))
    }

    render() {
        const statu = this.state.warning;
        return (
            <div>
                <Warn ishow={statu} />
                <button onClick={this.handleWarnFun}>
                    {statu ? 'show warning' : 'hide warning'}
                </button>
            </div>
        );
    }


}

export default Pagewarn;