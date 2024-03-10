import { StyleSheet, Text, View, Image, Share, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import DetailInfo from '../components/DetailInfo'
import { LocalStorage } from '../services/Storage'
import Toolbar from '../components/Toolbar'
import { useStore } from '../services/Store'
import FavIcon from '../components/FavIcon'
import ShareIcon from '../components/ShareIcon'

const DetailSongPage = ({ navigation, route }) => {

    const { track } = route.params

    const [loading, setLoading] = useState(true)
    const [isFav, setIsFav] = useState(false)
    const { addFav,removeFav } = useStore()

    useEffect(() => {
        async function checkFav(id){
            const res = await LocalStorage.instance.isFav(id)
            setIsFav(_ => res)
            setLoading(_ => false)
        }
        checkFav(track.trackId)
    },[setIsFav])

    const shareSong = () => {
        Share.share({ url: track.trackViewUrl })
    }

    const addToFavs = async (track) => {
        if(isFav){
            await removeFav(track)
            setIsFav(false)
        } else {
            await addFav(track)
            setIsFav(true)
        }
    }

    const getDuration = (millis) => {
        const minutes = millis / 60000
        const seconds = millis % 60000
        return `${minutes.toString().at(0)}:${seconds.toString().substring(0,2)}`
    }

    return (
        <View style={styles.container}>
            <Toolbar title={"Detalles"} onBack={() => navigation.goBack()} />
            {
                loading ? <Text>Cargando</Text> :
                    <View>
                        <View style={styles.header}>
                            <Image
                                style={styles.trackHeader}
                                source={{
                                    uri: track.artworkUrl100,
                                }}
                            />
                            <View>
                                <Text
                                    numberOfLines={2}
                                    ellipsizeMode='head'
                                    style={styles.title}>{track.trackName}</Text>
                                <View style={styles.btnContainer}>
                                    <Pressable onPress={() => addToFavs(track)}>
                                        {
                                            isFav ? 
                                            <FavIcon 
                                                active
                                            /> : 
                                            <FavIcon 
                                        />
                                        }
                                        
                                    </Pressable>
                                    <Pressable onPress={() => shareSong()}>
                                        <ShareIcon style={styles.btn} />
                                    </Pressable>
                                </View>
                            </View>

                        </View>
                        <View style={styles.infoContainer}>
                            <DetailInfo title={'Artista'} desc={track.artistName} />
                            <DetailInfo title={'Coleccion'} desc={track.collectionName} />
                            <DetailInfo title={'Genero'} desc={track.primaryGenreName} />
                            <DetailInfo title={'Duracion'} desc={getDuration(track.trackTimeMillis)}/>
                        </View>
                    </View>

            }
        </View>

    )
}

export default DetailSongPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        overflow: 'hidden'
    },
    header: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontSize: 20,
        color: '#19E491',
        width: 230,
        fontWeight: 'bold'
    },
    trackHeader: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginRight: 10
    },
    btnContainer: {
        flexDirection: 'row',
        gap:20,
        paddingTop:20
    },
    btn: {
        width: 30,
        height: 30,
    },
    infoContainer: {
        gap: 12,
        padding: 20
    }
})