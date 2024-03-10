import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Section = ({title, list, navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView 
        style={styles.scroll}
        horizontal 
        showsHorizontalScrollIndicator={false}>
            {
                list.map((e,index) => (
                    <Pressable key={index} onPress={() => navigation.navigate('Filter',{text:e.text, value:e.value})}>
                        <View style={{...styles.item,backgroundColor:'#19E491'}} key={e.value}>
                            <Text style={styles.itemText}>{e.text}</Text>
                        </View>
                    </Pressable>
                    
                ))
            }
      </ScrollView>
    </View>
  )
}

export default Section

const styles = StyleSheet.create({
    container:{
        width:'100%',
        gap:20
    },
    title:{
        fontSize:24,
        fontWeight:600,
        color:'white'
    },
    item:{
        height:260,
        width:180,
        marginRight:10,
        borderRadius:10,
        justifyContent:'flex-end',
        padding:10
    },
    itemText:{
        fontSize:18,
        color:'black',
        fontWeight:'bold'
    }
})