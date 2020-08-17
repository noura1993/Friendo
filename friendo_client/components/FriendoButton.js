import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FriendoButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.friendoButton, props.buttonExternalStyles]} underlayColor='#fff' onPress={props.onPressMethod} >
                <Text style={[styles.buttonText, props.textExtraStyles]}>{props.text}</Text>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center'
      },
      friendoButton: {
        paddingTop:5,
        paddingBottom:5,
        marginBottom:10,
        backgroundColor:'white',
        borderRadius:4,
        borderWidth: 1,
        borderColor: 'white'
      },
      buttonText:{
        color:'#809fff',
        textAlign:'center'
    }
})

export default FriendoButton;
