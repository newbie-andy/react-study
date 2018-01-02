import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e)=>{
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
                <div>
                    <p>请输入{scaleNames[scale]}温度:</p>
                    <input
                        type="text"
                        value={temperature}
                        onChange={this.handleChange} />
                </div>
        );
    }
}

export default TemperatureInput;