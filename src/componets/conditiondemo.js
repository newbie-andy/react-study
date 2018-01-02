import React from 'react';
import LoginButton from './loginbutton';
import LoginOutButton from './loginoutbutton';
//通过函数进行引入
import Condition from './Condition';

class LoginCtrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
        this.loginFun = this.loginFun.bind(this);
    }

    loginFun() {
        this.setState({
            isLogin: true
        })
    }

    //属性初始化器
    loginOutFun = () => {
        this.setState({
            isLogin: false
        })
    }

    render() {
        const isLogin = this.state.isLogin;
        let button = null;

        if(isLogin){
            button = <LoginOutButton onClick={this.loginOutFun}/>;
        }else{
            button = <LoginButton onClick={this.loginFun}/>
        }

        return (
            <div>
                <Condition isLogin={isLogin}/>
                {button}
            </div>
        );
    }
}

export default LoginCtrl;