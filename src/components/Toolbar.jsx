import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowBackIcon from './ArrowBackIcon'

const Toolbar = ({onBack,title}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack}>
        <View>
          <ArrowBackIcon
              style={styles.btnBack}
              />
        </View>
      </Pressable>
      <Text style={styles.title}>
        {title}
      </Text>
        <View style={{width:30,height:30}}>
        </View>
    </View>
  )
}

export default Toolbar

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:70,
        backgroundColor:'black',
        padding:15,
        flexDirection:'row'
    },
    btnBack:{
        width:35,
        height:35
    },
    title:{
      color:'white',
      fontSize:28,
    }
})