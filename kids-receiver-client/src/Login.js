/*global _ps*/
import React, {Component} from 'react';
import AppNav from './AppNav';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import {PSClickWrap} from 'pactsafe-react-sdk';
import './Login.css';


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
      }
      this.updateEmail = this.updateEmail.bind(this);
      this.updatePassword = this.updatePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }



    async handleSubmit(event) {
    event.preventDefault();
    if (document.getElementById('email').value === ''){
          alert('You must provide an email before logging in! ;)');
    } else if (_ps.getByKey('kids-receiver-clickwrap').allChecked()){
        try {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

       //  firebase.auth().onAuthStateChanged(function(user) {
       //    if(!user.emailVerified){
       //      alert("You cannot login until you verify your account");
       //      user.sendEmailVerification();
       //      alert("Another email has been sent to "+user.email)
       //    }
       // //
       //  });

        } catch (e) {
          alert(e.toString());
        }
    }else{
      alert('You must accept the ClickWrap before you can submit!');
    }


 }

   updatePassword(event, value) {
     this.setState({
       password: value
     })
   }

   updateEmail(event, value) {
     this.setState({
       email: value
     });
   }


    render() {
      return (
        <div className="login-panel">
          <h1> Login to K.I.D.S. Receiver </h1><br />
          <form >
            <p>Email</p>
            <TextField type="email" value={this.state.email} onChange={this.updateEmail} id="email"/>
            <p>Password</p>
            <TextField type="password" value={this.state.password} onChange={this.updatePassword}/>
            <br />
            <RaisedButton type="submit" label="Login" primary={true} onClick={this.handleSubmit}/>
            <br/>
            <PSClickWrap accessId="29ea80d9-d386-4cfd-a280-505e802ee732" signerIDSelector="email" groupKey="kids-receiver-clickwrap" testMode={true} displayAll={false}/>

          </form>
        </div>
      )
    }
}

export default Login;
