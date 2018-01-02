import React from 'react';

class Event extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.buttonEvent}>按钮223</button>
                <a onClick={this.preventDefaultEvent} href="https://www.baidu.com">链接</a>
            </div>
        )
    }

    //事件的处理
    //注意我们定义的组件是通过类的方式，调用的时候需要遵守类的方法调用
    buttonEvent() {
        alert('处理事件与传统的方式不太一样：1.事件属性，驼峰命名 2。事件调用的方式');
    }

    //阻止默认事件的触发
    preventDefaultEvent(e) {
        //这里阻止了链接被点击的默认转跳事件的触发
        e.preventDefault();
        alert('sorry! 我的默认事件被阻止了');
    }
}

export default Event;