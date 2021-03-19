import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import List from './components/list';
import NavBar from './components/navbar';
import Input from './components/input';
import Edit from './components/edit';
import Delete from './components/delete';


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
      items.push({id:id,text:value});

      this.setState({id,items});
    }
  }

  handleDelete = (id) =>{
    console.log('App - delete', id);
  }

  handleEdit = (item) =>{
    console.log('App - item', item);
  }

  render(){
    return (
      <React.Fragment>
        <NavBar/>
        <div className="container">
          <Router>
          
            <Switch>
              <Route path="/" exact>
                <Input onSubmit = {this.onHandleSubmit}/>
                <List items={this.state.items}/>
              </Route>
              <Route path="/edit/:id" exact>
                <Edit onEdit = {this.handleEdit} items={this.state.items}/>
              </Route>
              <Route path="/delete/:id" exact>
                <Delete onDelete = {this.handleDelete}/>
              </Route>
            </Switch>
          
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
