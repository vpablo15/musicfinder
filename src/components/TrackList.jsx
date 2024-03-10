import { StyleSheet, Text, View, FlatList,Image,Pressable } from 'react-native'
import React from 'react'

const TrackList = (props) => {

    const renderItem = (track) => {
        return (
        <Pressable key={track.trackId} onPress={() => props.onItemClick(track)}>
            <View style={styles.listItem}>
                <Image
                    style={styles.trackLogo}
                    source={{
                        uri: track.artworkUrl100,
                    }}
                />
                <View style={styles.texts}>
                    <Text numberOfLines={2} ellipsizeMode='head' style={styles.title}>{track.trackName}</Text>
                    <Text style={styles.subtitle}>{track.artistName}</Text>
                    <Text style={styles.subtitle}>{track.primaryGenreName}</Text>
                </View>
            </View>
        </Pressable>
        
        )
    }

  return (
    <FlatList 
        style={styles.list}
        data={props.listado}
        renderItem={({item}) => renderItem(item)}/>
  )
}

export default TrackList

const styles = StyleSheet.create({
    list:{
        flex:1
    },
    listItem:{
        backgroundColor:'black',
        margin:2,
        flexDirection:'row',
        gap:10
    },
    trackLogo:{
        width:110,
        height:110,
        margin:10,
        borderRadius:10
    },
    texts:{
        marginTop:10,
    },
    title:{
        color:'#19E491',
        fontSize:18,
        fontWeight:'bold',
        overflow:'hidden',
        width:230
    },
    subtitle:{
        color:'white',
        fontSize:14
    }
})    