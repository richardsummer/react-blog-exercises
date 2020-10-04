import React, { Component } from 'react';
import './App.css';
import BlogForm from './components/Blog-A/BlogForm';
import PersonForm from './components/Blog-B/PersonForm';

class App extends Component {

  constructor(props) {
  super(props);

  this.state = {
    isSelected: '',
    blogs: []
  }

  this.saveBlog=this.saveBlog.bind(this);
  }

  changeSelection(selection) {
    this.setState({isSelected:selection})
  }

  saveBlog(blog) {
    const blogs = [...this.state.blogs];
    blogs.push(blog);
    this.setState({blogs});
    console.log(this.state.blogs);
  }

  render() {
    const selected = this.state.isSelected;
    let html;

    if(selected === 'BlogForm') {
      html = <BlogForm saveBlog={this.saveBlog}/>
    }

    return (
      <div className="">
          <button onClick={() => this.changeSelection('BlogForm')}>a</button>
          {html}
      </div>
  );}
}

export default App;
