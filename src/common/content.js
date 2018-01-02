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
import logo from './../logo.svg';
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
        </div>
      );
    }
  }
  
  export default Content;
  