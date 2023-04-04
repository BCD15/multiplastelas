import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from 'react-native-paper';

export default function Series () {
    return (
        <View style={StyleSheet.container}>
            <Card style={styles.card}>
                <Card.Title title="Esta é a tela de Séries" />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'darkcyan',
        alignItems: 'center',
        paddingTop: 10
    },
    card: {
        width: '90%'
    }
});