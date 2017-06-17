import React, {Component} from 'React';
import Paper from 'material-ui/Paper';
import {PSClickWrap} from 'pactsafe-react-sdk';

class MOUAgreement extends Component{
  constructor(props){
    super(props);
    this.user = {
      email: 'test1234@lol.com'
    }
  }
  
  render(){
    const containerStyle = {
      width: '90%',
      padding: 20,
      display: 'block',
      marginTop: 20,
      marginBottom: 20,
      marginLeft: `auto`,
      marginRight: `auto`
    };
    const title = {
      fontWeight: '300',

    };
    return(
      <Paper zDepth={2} style={containerStyle}>
        <h1 style={title}>MOU Agreement</h1>
        <PSClickWrap accessId="29ea80d9-d386-4cfd-a280-505e802ee732" signerID="hahaha12345@gmail.com" dynamic={true} renderData={}/>
      </Paper>
    )
  }
}