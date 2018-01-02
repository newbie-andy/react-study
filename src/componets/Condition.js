import React from 'react';

//这里尝试以函数的形式进行组件的定义
function Greeting(props) {
    const isLogin = props.isLogin;
    if(isLogin)
        return (<div>You Logined</div>);
    else
        return (<div>Please Login</div>);
}

export default Greeting;