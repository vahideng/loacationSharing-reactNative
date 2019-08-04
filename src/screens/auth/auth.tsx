import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultButton from '../../components/UI/defaultButton';
import DefaultTextInput from '../../components/UI/defaultTextInput';

type Props = {
  onpresed: any;
};

class Auth extends React.Component<Props> {
  render() {
    
    return (
      <View style={styled.container}>
         <DefaultButton  onPress={this.props.onpresed} title="Switch to login" />
        <DefaultTextInput placeholder="Your email Adrress" style={styled.textLogin} />
        <DefaultTextInput placeholder="Password" style={styled.textLogin} />
        <DefaultTextInput placeholder="Confirm password" style={styled.textLogin} />
        <DefaultButton  onPress={this.props.onpresed} title="Submit" />
       
      </View>
    );
  }
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLogin: {
    width: '80%',
    height : 30
  
  },
  login: {
    flex: 1,
    backgroundColor: 'blue',
    height: 80,
    width: 100
  }
});
export default Auth;
