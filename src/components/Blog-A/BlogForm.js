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

  // event.target.value = is the value of the pressed key
  // fires everytime user types
  handleChange(event){
  // [event.target.name] alows you to target  what properity you specifly want to target
  // calling by refrence is why e.t.n in []
  this.setState({[event.target.name]: event.target.value});
  }

  submitForm(event) {
    event.preventDefault();
    this.props.saveBlog(this.state);
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
