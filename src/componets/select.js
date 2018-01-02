import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '周星驰'
        };
    }

    handleSelect = (e)=>{
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e)=>{
        alert(`Your select is ${this.state.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleSelect}>
                    <option value="周星驰">周星驰</option>
                    <option value="冯小刚">冯小刚</option>
                    <option value="张艺谋">张艺谋</option>
                    <option value="陈可辛">陈可辛</option>
                </select>
                <button type="submit">确定</button>
            </form>
        );
    }
}

export default Select;