import React from 'react';

class MultiInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            buyBook: '你好世界'
        };
    }

    handleInput = (e)=>{
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        console.log(value);
        this.setState({
            [name]: value
        })
        
    }

    handleSubmit = (e)=>{
        alert(`Your select is ${this.state.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="checkbox"
                    name="isOpen"
                    checked={this.state.isOpen}
                    onChange={this.handleInput}/>
                <input 
                    type="text"
                    name="buyBook"
                    value={this.state.buyBook}
                    onChange={this.handleInput}/>
                <button type="submit">确定</button>
            </form>
        );
    }
}

export default MultiInput;