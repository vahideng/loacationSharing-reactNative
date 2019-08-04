import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import DefaultButton from '../../components/UI/defaultButton';
import DefaultTextInput from '../../components/UI/defaultTextInput';

import myImage from '../../assets/placeImage.jpg';

type Props = {
  onpresed: any;
};

class Auth extends React.Component<Props> {
  render() {
    return (
      <ImageBackground
        source={myImage}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styled.container}>
          <DefaultButton
            onPress={this.props.onpresed}
            title="Switch to login"
          />
          <DefaultTextInput
            placeholder="Your email Adrress"
            style={styled.textLogin}
          />
          <DefaultTextInput placeholder="Password" style={styled.textLogin} />
          <DefaultTextInput
            placeholder="Confirm password"
            style={styled.textLogin}
          />
          <DefaultButton onPress={this.props.onpresed} title="Submit" />
        </View>
      </ImageBackground>
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
    height: 30
  },
  login: {
    flex: 1,
    backgroundColor: 'blue',
    height: 80,
    width: 100
  }
});
export default Auth;
