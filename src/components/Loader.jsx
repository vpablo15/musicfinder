import { StyleSheet, Text, View, Animated, Easing, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Loader = () => {

    return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#19E491" />    
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        opacity: 0.5,
    },
});

export default Loader
