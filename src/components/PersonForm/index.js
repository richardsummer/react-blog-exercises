import React, { Component } from 'react';

class PersonForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event){

  this.setState({[event.target.name]: event.target.value});
  }

  submitForm(event){
    event.preventDefault();
    alert('Yay! You saved a person!');
    this.setState({
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
    });
    // this.props.saveBlog(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
          <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/>
          <input type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange}/>
          <input type="tel" name="phoneNumber" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
  );}
}

export default PersonForm;
