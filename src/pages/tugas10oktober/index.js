import React, { Component } from 'react'
import { Button, StyleSheet, View, Image, TextInput } from 'react-native'
import dti from '../../assets/img/dti.jpeg'

export default class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    <Image source={dti} style={styles.logo} />
                </View>
                <TextInput placeholder='username' style={styles.id} />
                <TextInput placeholder='password' style={styles.pw} />
                <Button title='LOGIN' style={styles.button} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20
    },
    logoWrapper: {
        paddingTop: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 20
    },
    id: {
        borderRadius: 10,
        borderWidth: 0.5,
        marginBottom: 8
    },
    pw: {
        borderRadius: 10,
        borderWidth: 0.5,
        marginBottom: 8
    },
    button: {
        borderRadius: 10
    }
})
