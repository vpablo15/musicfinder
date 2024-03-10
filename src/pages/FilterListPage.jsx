import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { searchMusicByGenre } from '../services/HttpClient'
import TrackList from '../components/TrackList'
import Toolbar from '../components/Toolbar'
import Loader from '../components/Loader'
import NotFound from '../components/NotFound'

const FilterListPage = ({navigation,route}) => {

    const { text, value } = route.params
    const [list, setlist] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getTracks(){
            let data = await searchMusicByGenre(value)
            setLoading(_ => false)
            setlist(data)
        }
        getTracks()
        .catch(e => {
            setLoading(_ => false)
        })
    },[])

    const back = () => navigation.goBack() 

  return (
    <View style={styles.container}>
        <Toolbar title={text} onBack={back}/>
        {
            loading ? <Loader /> : (
                list.length == 0 ? <NotFound /> :
                <TrackList listado={list} onItemClick={(track) => { navigation.navigate('Detail',{track})}}/>
            )
        }
    </View>
  )
}

export default FilterListPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    }
})