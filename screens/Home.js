import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

export default function Home ({navigation}) {
    return (
        <ScrollView style={StyleSheet.scrollView}>
            <Card style={StyleSheet.card}>
                <Card.Content>
                    <Button mode="contained" onPress={() => navigation.navigate('Livros')}>
                        Livros
                        </Button> 
                </Card.Content>
            </Card>
            <Card style={StyleSheet.card}>
                <Card.Content>
                    <Button mode="contained" onPress={() => navigation.navigate('Filmes')}>
                        Filmes
                        </Button> 
                </Card.Content>
            </Card>
            <Card style={StyleSheet.card}>
                <Card.Content>
                    <Button mode="contained" onPress={() => navigation.navigate('Series')}>
                        Séries
                        </Button> 
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'Cyan',
        paddingTop: 10
    },
    card: {
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});