import React from 'react';

//定时器组件
class Clock extends React.Component {
    //初始化
    constructor(props) {
        super(props);
        //初始化state数据的地方
        this.state = {date: new Date()}
    }

    //挂载组件的生命钩子
    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.tick();
                console.log('当前定时器正在被调用中');
            },
            1000
        );
    }

    //卸载组件的生命钩子
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //tick,通过setState更改状态值
    tick() {
        this.setState({
            date: new Date()
        }) 
    }

    render() {
        return (
            <div>
                <p>Hello China!</p>
                <p>Time : {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}



export default Clock;