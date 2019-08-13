import { Formik } from 'formik';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import myImage from '../../assets/placeImage.jpg';
import DefaultButton from '../../components/UI/defaultButton';
import DefaultTextInput from '../../components/UI/defaultTextInput';
type Props = {
  onpresed: any;
};

class Auth extends React.Component<Props> {
  render() {
    return (
      <ImageBackground
        source={myImage}
        style={{ width: '100%', height: '100%' }}>
      <View style={styled.container}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirmation: ''
          }}
          onSubmit={values => {
          this.props.onpresed()
           
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string().required('Password is required').min(6),
            passwordConfirmation: Yup.string().oneOf(
              [Yup.ref('password'), ''],
              'Passwords must match'
            )
          })}
        >
          
          {({ handleChange, handleSubmit, values , errors,touched}) => (
            <React.Fragment>
              <DefaultButton
                onPress={this.props.onpresed}
                title="Switch to login"
              />

              <DefaultTextInput
                placeholder="Your email Adrress"
                style={styled.textLogin}
                onChangeText={handleChange('email')}
                value={values.email}
                
              />
               { errors.email && touched.email ? <Text style={styled.Warning}>{errors.email}</Text> : null}
              <DefaultTextInput
                placeholder="Password"
                style={styled.textLogin}
                onChangeText={handleChange('password')}
                value={values.password}
              />
              { errors.password && touched.password ? <Text style={styled.Warning}>{errors.password}</Text> : null}
              <DefaultTextInput
                placeholder="Confirm password"
                style={styled.textLogin}
                onChangeText={handleChange('passwordConfirmation')}
                value={values.passwordConfirmation}
              />
               <Text style={styled.Warning}>{errors.passwordConfirmation}</Text>
              <DefaultButton onPress={handleSubmit} title="Submit" />
             
            </React.Fragment>
          )}
        </Formik>
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
    height: 40
  },
  login: {
    flex: 1,
    backgroundColor: 'blue',
    height: 80,
    width: 100
  },
  Warning : {
   color :"white",
   fontSize: 14
  }
});
export default Auth;
