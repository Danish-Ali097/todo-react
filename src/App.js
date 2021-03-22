import React, {Component} from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import './App.css';
import List from './components/list';
import NavBar from './components/navbar';
import Input from './components/input';
import Edit from './components/edit';
import Delete from './components/delete';

import { alert, success, info, defaultModules } from '@pnotify/core';
import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
import '@pnotify/mobile/dist/PNotifyMobile.css';
 
defaultModules.set(PNotifyMobile, {});
defaultModules.set(PNotifyBootstrap4, {});


class App extends Component {
  state={
    id:0,
    items:[]
  };

  onHandleSubmit = (value) => {
    console.log('App', value);
    let count = this.state.items.filter(i => i.text.toLowerCase() === value.toLowerCase()).length;
    if(count === 0 && value !== ""){ 
      let items = this.state.items;
      let id = this.state.id;
      id++;
      items.push({ id: id, text: value, isCompleted: false });

      this.setState({id,items});

      alert({
        text: 'TODO:: Item Added',
        delay: 1000
      });

    }
  }

  handleDelete = (id) =>{
    console.log('App - delete', id);
    let items = this.state.items;
    items = items.filter(x => x.id !== Number.parseInt(id));
    this.setState({items:items});

    this.props.history.push('/');

    success({
      text: 'TODO:: Item Deleted',
      delay: 1000
    });
  }

  handleEdit = (e, item) =>{
    console.log('App - item', item);
    let items = this.state.items;
    let index = items.findIndex( i=> i.id === item.id);
    items[index] = item;
    this.setState({items:items});
    e.preventDefault();
    
    this.props.history.push('/');
    success({
      text: 'TODO:: Item Updated',
      delay: 1000
    });
  }

  handleComplete = (id) => {let items = this.state.items;
    let message ='';
    let index = items.findIndex( i=> i.id === id);
    items[index].isCompleted = (!items[index].isCompleted);
    this.setState({items:items});
    if(items[index].isCompleted)
    {
      message = 'TODO:: Item marked Complete';
    }
    else
    {
      message = 'TODO:: Item marked Pending';
    }
    info({
      text: message,
      delay: 1000
    });
  }

  render(){
    return (
      <React.Fragment>
        <NavBar/>
        <div className="container">
          <Switch>
              <Route path="/" exact>
                <Input onSubmit = {this.onHandleSubmit}/>
                <List onComplete = {this.handleComplete} items={this.state.items}/>
              </Route>
              <Route path="/edit/:id" exact>
                <Edit onEdit = {this.handleEdit} items={this.state.items}/>
              </Route>
              <Route path="/delete/:id" exact>
                <Delete onDelete = {this.handleDelete}/>
              </Route>
            </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
