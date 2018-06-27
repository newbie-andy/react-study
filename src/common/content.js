import React, { Component } from 'react';
import Clock from './../componets/Clock';
import Event from './../componets/Event';
import Listenner from './../componets/Listenner';
import ConditionDemo from './../componets/conditiondemo';
import Page from './../componets/Page';
import MyList from './../componets/List';
import Form from './../componets/Form';
import Select from './../componets/select';
import MultiInput from './../componets/MultiInput';
import Calculator from './../componets/Calculator';
import ParentScreen from './../componets/ChildScreen';
import Greeting from './../componets/Greeting';
import Limit from './../componets/Limit';
import Default from './../componets/Default';
import './common.css';

class Content extends Component {
    render() {
      return (
        <div className="content">
          <Clock/>
          <br/>
          <Event/>
          <br/>
          <Listenner/>
          <br/>
          <ConditionDemo/>
          <br/>
          <Page/>
          <br/>
          <MyList/>
          <br/>
          <Form/>
          <br/>
          <Select/>
          <br/>
          <MultiInput/>
          <br/>
          <Calculator/>
          <br/>
          <Greeting name={['张烁','正在','学习中']}/>
          <br/>
          <Limit>
            <div>
              <p>你好世界</p>
              <p>我的地盘我做主</p>
            </div>
          </Limit>
          <ParentScreen></ParentScreen>
          <Default/>
        </div>
      );
    }
  }
  
  export default Content;
  