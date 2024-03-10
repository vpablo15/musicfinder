import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Toolbar from '../components/Toolbar'
import TrackList from '../components/TrackList'
import Loader from '../components/Loader'
import { searchMusic } from '../services/HttpClient'
import NotFound from '../components/NotFound'

const SearchPage = ({navigation}) => {

    const [listado, setListado] = useState([])
    const [keyword, setKeyword] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getMusic(work) {
            setLoading(true)
            const musicList = await searchMusic(work)
            setListado(musicList)
            setLoading(false)
        }
        if(keyword != "")
            getMusic(keyword)
    }, [keyword])

    const onBack = () => {
        navigation.goBack()
    }

  return (
    <View style={styles.container}>
      <Toolbar title={"Busqueda"} onBack={onBack}/>
      <TextInput
                style={styles.input}
                onChangeText={setKeyword}
                value={keyword}
                placeholder='Ingresar Artista'
                placeholderTextColor={'grey'}
            />
        { 
        loading ? <Loader /> : (
            (listado.length == 0 && keyword != "") ? <NotFound /> :
            <TrackList listado={listado} onItemClick={(track) => navigation.navigate('Detail',{track})}/>
        )
        }
    </View>
  )
}

export default SearchPage

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    },
    input:{
        width:'95%',
        height:50,
        color:'whitesmoke',
        margin:15,
        borderRadius:10,
        backgroundColor:'#2E2E2E',
        padding:10,
        fontSize:18,
        borderColor:'#19E491',
        borderStyle:'solid',
        borderWidth:1
    }
})