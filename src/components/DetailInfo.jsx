import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailInfo = ({title, desc}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  )
}

export default DetailInfo

const styles = StyleSheet.create({
    title:{
        color:'#19E491',
        fontWeight:'bold',
        fontSize:18
    },
    desc:{
        color:'white',
        fontSize:18
    }
})