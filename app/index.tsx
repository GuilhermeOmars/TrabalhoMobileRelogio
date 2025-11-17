import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import  Horas  from "../components/Horas";
import { useLocalSearchParams } from 'expo-router';
import { Background } from '@react-navigation/elements';


export default function Lista() {
    const { time } = useLocalSearchParams();
    const [itens, setItens] = useState([]);

    return (
        <ScrollView style={{backgroundColor: "#000000ff"}}>
        <View style={styles.container}>
            <Text style={styles.title}>Alarm in 3 days</Text>
            <Text style={styles.subtitle}>Mon, 10 Nov, 5:00 am</Text>
            <Horas hora={'2:00 pm'}></Horas>
            <Horas hora={'2:00 am'}></Horas>
                        <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>




            <Horas hora={'2:00 am'}></Horas>
v            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>


            <Horas hora={'2:00 am'}></Horas>
            <Horas hora={'2:00 am'}></Horas>
v            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            <Horas hora={'2:00 am'}></Horas>

            
        </View>
        </ScrollView>
    );
}
const styles =
    StyleSheet.create({
        container: {
            backgroundColor: "#000000ff",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
        },
        title: {
            color: '#fff7abff',
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 30,
            marginBottom: 15
        },
        subtitle:{
            color: 'gray',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 30,

        },
        scrollContainer: {
            width: '90%',
        },
        itemsContainer: {
            flex: 1,
            width: '100%',
            marginTop: 5,
            padding: 20,
            borderRadius: 20,
            marginBottom: 100,
            alignItems: 'stretch',
            color:'#FFFFFF',
            backgroundColor: '#313131ff'
        },
        text: {
            textAlign: 'center',
            fontSize: 20,
        },
        horario:{
            textAlign: 'left',
            fontSize: 50,
            color: 'white',

        }
    });