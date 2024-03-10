import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FindIcon from './FindIcon'
import FavIcon from './FavIcon'

const Options = ({goToFavs, goToSearch}) => {

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={goToSearch}>
          <View style={styles.imgContainer}>
              <FindIcon 
                />
          </View>
        </Pressable>
        <Text style={styles.text}>Busqueda</Text>
      </View>
      
      <View>
        <Pressable onPress={goToFavs}>
          <View style={styles.imgContainer}>
              <FavIcon 
                active
                />
          </View>
        </Pressable>
        <Text style={styles.text}>Favoritos</Text>
      </View>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:150,
        width:'100%',
        justifyContent:'space-evenly',
    },
    btn:{
        width:30,
        height:30,
    },
    imgContainer:{
        padding:30,
        borderColor:'#19E491',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:5
    },
    text:{
      color:'grey',
      textAlign:'center',
      fontSize:16,
      marginTop:5
    }
})