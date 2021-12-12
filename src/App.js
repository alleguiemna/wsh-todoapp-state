import React, { Component } from 'react'
import AddTodo from './components/addTodo/AddTodo';
import TaskList from './components/taskList/TaskList';
import "./App.css"

export class App extends Component {
  state={
    taskList:[
      {
        id:Math.random(),
        task:"Learn HTML",
        isDone:true,
      },
      {
        id:Math.random(),
        task:"Learn HTML",
        isDone:true
      },
      {
        id:Math.random(),
        task:"Learn HTML",
        isDone:false
      }
    ]
  }
  handleComplete = (idTask) =>{
    this.setState({ taskList:this.state.taskList.map(elt => elt.id ===idTask ? {...elt,isDone:!elt.isDone} : elt )  });
  }
  handleDelete = (idTask) =>{
   this.setState({ taskList:this.state.taskList.filter(elt => elt.id!==idTask)  });
  }
  handleAdd = (newTask) =>{
    this.setState({ taskList:[...this.state.taskList,{id:Math.random(),task:newTask,isDone:false}]});
  }
  render() {
    return (
      <div className="app">
        <h1>TODOLIST</h1>
        <AddTodo handleAdd={this.handleAdd}/>
        <TaskList taskList={this.state.taskList}
        handleComplete={this.handleComplete}
        handleDelete={this.handleDelete}
        handleAdd={this.handleAdd}/>
      </div>
    )
  }
}

export default App
