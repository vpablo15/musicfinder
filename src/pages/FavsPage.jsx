import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import TrackList from '../components/TrackList'
import Toolbar from '../components/Toolbar'
import { useStore } from '../services/Store'
import NoElements from '../components/NoElements'

const FavsPage = ({navigation}) => {

  const { favs, getAll } = useStore()

  useEffect(() => {
    getAll()
  },[])

  const goBack = () => navigation.goBack()

  return (
    <View style={styles.container}>
      <Toolbar title={"Favoritos"} onBack={goBack}/>
      {
        favs.length == 0 ? <NoElements /> : 
        <TrackList listado={favs} onItemClick={(track) => navigation.navigate('Detail', {track})}/>
      }
    </View>
  )
}

export default FavsPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
})