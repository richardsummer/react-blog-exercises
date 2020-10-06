import React, { Component } from 'react';
import './App.css';
import BlogForm from './components/BlogForm/';
import PersonForm from './components/PersonForm/';
import BlogList from './components/BlogList';

class App extends Component {

  constructor(props) {
  super(props);

  this.state = {
    selection: 'blog-form',
    // blogs: [],
    // people: [],
  }

    // this.saveBlog=this.saveBlog.bind(this);
    // this.savePerson=this.savePerson.bind(this);
    this.handleSelection = this.handleSelection.bind(this)
  }

  handleSelection(selection) {
    this.setState({selection})
  }

  // saveBlog(blog) {
  //   const blogs = [...this.state.blogs];
  //   blogs.push(blog);
  //   this.setState({blogs});
  //   console.log(this.state.blogs);
  // }

  // savePerson(person) {
  //   const people = [...this.state.people];
  //   people.push(person);
  //   this.setState({people});
  //   console.log(this.state.people);
  // }

  render() {
    const selection = this.state.selection;
    let html;

    if(selection === 'blog-form') {
      html = <BlogForm />
    } else if (selection === 'person-form') {
      html = <PersonForm />
    } else if (selection === 'blog-list') {
      html = <BlogList />
    }




  //   if(selected === 'BlogForm') {
  //     html = <BlogForm saveBlog={this.saveBlog}/>
  //   }
  //
  //   return (
  //     <div className="">
  //         <button onClick={() => this.changeSelection('BlogForm')}>a</button>
  //         {html}
  //     </div>
  // );
  //
  //   else (selected === 'PersonForm') {
  //     html = <PersonForm savePerson={this.savePerson}/>
  //   }

    return (
      <div className="">
        <button onClick={() => this.handleSelection('blog-form')}>Blog Form</button>
        <button onClick={() => this.handleSelection('person-form')}>Person Form</button>
        <button onClick={() => this.handleSelection('blog-list')}>Blog List</button>
        {html}
      </div>
  );}
}

export default App;
