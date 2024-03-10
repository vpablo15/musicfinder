import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Options from '../components/Options'
import Section from '../components/Section'

export const HomePage = ({navigation}) => {

    const goToFavs = () => {
        navigation.navigate('Favs')
    }

    const goToSearch = () => {
        navigation.navigate('Search')
    }

    const generos = [
        {
            text:"Pop",
            value:"Pop"
        },
        {
            text:"Urbano",
            value:"Urbano"
        },
        {
            text:"Clasico",
            value:"Classic"
        },
        {
            text:"Rock",
            value:"Rock"
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.appTitleContainer}>
                <Text style={styles.appTitle}>Music <Text style={{color:'#19E491'}}>Finder</Text></Text>
            </View>
            <Options 
                goToFavs={goToFavs}
                goToSearch={goToSearch}/>
            <Section title="Generos" list={generos} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
        padding:20
    },
    appTitleContainer:{
        width:'100%',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30,
    },
    appTitle:{
        fontSize:50,
        color:'white',
        fontWeight:'600'
    }
});