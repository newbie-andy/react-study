import React from 'react';


function ChildFun(props) {
    let item = [];
    for(let i = 0; i<props.numTimes; i++) {
        console.log(props.children(i));
        item.push(props.children(i));
    }
    return <div>{item}</div>
}

class ParentScreen extends React.Component {
    render() {
        return (
            <ChildFun numTimes={10}>
                {(index)=><div key={index}> This is item {index} in the list </div>}
            </ChildFun>
        )
    }
}
export default ParentScreen;