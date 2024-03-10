import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorMsg = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>{text}</Text>
    </View>
  )
}

export default ErrorMsg

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    msg:{
        fontSize:28,
        color:'grey',
        fontWeight:'bold',
        width:270,
        textAlign:'center'
    }
})    