import React from 'react';
import { StyleSheet, Image, View } from "react-native";

const Preloader = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.preloader} source={{ uri: "https://static.wixstatic.com/media/f3cf26_63eb576ca3e24f9fadac0da9e6ef9444~mv2.gif" }} />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    preloader: {
        height: 150,
        width: 150
    }
})

export default Preloader;