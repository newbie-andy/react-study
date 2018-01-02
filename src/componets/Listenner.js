import React from 'react';

class Listenner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '周星驰',
            isToggleOn: true
        };

        //this.handleFun = this.handleFun.bind(this);
    }

    //此方法需要在初始化的时候绑定this,即constructor中的注释函数部分的初始化
    // handleFun() {
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }))
    // }

    //属性初始化器语法方式
    handleFun = ()=>{
        this.setState((prevState)=>({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    //传参处理函数
    responseFun(name, e) {
        e.preventDefault();
        alert(name);
    }


    render() {
        return (
            <div>
                <p>重点（类的this问题）: 
                    初始化器语法this对象的隐式方式、
                    内联函数形式的方式(建议不要用)、
                    构造函数中初始化
                </p>
                <p>函数的传参:
                    1.隐式事件对象bind方式，但是要注意this和参数的位置，在函数的方法中e事件对象应该在参数的后面
                    2.显示的方式，箭头函数事件对象可以作为第二个参数进行传递
                </p>

                <button onClick={this.handleFun}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <br/>

                <button onClick={(e)=>this.responseFun(this.state.name, e)}>
                    1.事件处理传参，事件对象显示(箭头函数)
                    2.处理函数的参数中，事件对象要放到最后
                </button>
                <br/>
                
                <button onClick={this.responseFun.bind(this, this.state.name)}>
                    事件处理传参，事件对象隐式传递(bind)
                </button>
            </div>
        );
    }
}

export default Listenner;