import React, { Component } from 'react';

class Modal extends Component {

  constructor(props){
    super(props);

    this.state ={
      username: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    }  
  }

  render() {
    return (
        <div id="fieldsModal" className="modal">
          <div className="modal-content">
            <div id="addBackgroundColor">
              <i className="fa fa-times close" id="closeColor"></i>
              <form className="form" onSubmit={this.onSubmit}>
                <div className="fieldEntry">
                  <div className="fieldTxt">Username:</div>
                    <input id="username" type="text"
                    name="username" value={this.state.username} onChange={this.onChange}/>
                </div>
                <div className="fieldEntry">
                  <div className="fieldTxt"> Password: </div>
                  <input id="password" type="password" name="password"
                    value={this.state.password} onChange={this.onChange}/>
                </div>
                <input type="submit" name="Submit"/>
              </form>
            </div>
          </div>
        </div>
    )
  }
}
export default Modal;
