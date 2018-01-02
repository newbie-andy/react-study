import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleTel = (e)=>{
        this.setState({
            email: e.target.value
        })
    }

    handlePwd = (e)=>{
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e)=>{
        alert(`Your login telephone is ${this.state.email} and password is ${this.state.password}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleTel} type="email" value={this.state.email} placeholder="请输入手机号码"/>
                <input onChange={this.handlePwd} type="password" placeholder="请输入用户密码"/>
                <button type="submit">登录</button>
            </form>
        );
    }
}

export default Form;