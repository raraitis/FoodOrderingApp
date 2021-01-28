import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image } from 'react-native'

export const HomeScreen = () => {

    return (
        <View style={styles.conatiner}>
            <View style={styles.navigation}>
                </View>
            <View style={styles.body}>
            <Text>Home Screen</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}

    const styles = StyleSheet.create({
        conatiner: {
            flex: 1,
            backgroundColor:'green'
        },
        navigation: {
            flex: 2,
            backgroundColor: 'red'
        },
        body: {
            flex: 9,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yelow'
        },
        footer: {
            flex: 1,
            backgroundColor: 'cyan'
        }
    })


