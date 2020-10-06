import React, { Component } from 'react';

class BlogForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  submitForm(event) {
    event.preventDefault();
    this.setState({title: '', body: ''});
    alert('Yay! You Sumbitted a Blog!');
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.submitForm}>
          <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange}/>
          <input type="text" name="body" placeholder="body" value={this.state.body} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
  );}
}

export default BlogForm;
