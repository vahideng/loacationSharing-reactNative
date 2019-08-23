import React from 'react';

import {View,Text,Button} from 'react-native'
import console = require('console');



class MyForm extends React.Component {

constructor (props) {


    super(props)

    do the binding
}


    state ={ 

        name :  ""




    }




    render(){




        submitHandelr = (name) =>{

            console.log(name)

        }




        return(
<View>

    <Text>xz</Text>

           { this.props.data.map(name=>{

               return <Button title ="sa" onPress={this.submitHandelr()} />
           })}
    
</View>

            
        )
    }
}


export default MyForm