import React from 'react';

//list组件
class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [1,2,3,4,5,6,7,8]
        };
    }
    
    //这里注意需要给列表key值，否则会提示错误
    // num在真正的数据场景中可能是数据对象，里面可能存在很多的对象属性如id,这正是删除等一些操作需要的
    // 当数据num为非对象的一些简单的数据，我们可以用数据遍历的index，作为此条数据的key值
    //eg：
    // const listItem = itemsnum.map((num, index) =>
    // <li key={index}>
    //     list-{num}
    // </li>
    // );
    render() {
        const itemsnum = this.state.items; 
        const listItem = itemsnum.map((num) =>
            <li key={num.toString()}>
                list-{num}
            </li>
        );

        return (
            <ul>{listItem}</ul>
        );

    }
}
export default MyList;