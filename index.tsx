import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header';
import Alarm from '@/components/Alarm';
export default function Lista() {
    return (

        <ScrollView style={{backgroundColor: "#000000ff"}}>
        
        <View style={styles.container}>
            <Text style={styles.title}>Alarm in 1 day</Text>
            <Text style={styles.subtitle}>Mon, 18 Nov, 5:30 am</Text>
            <Header nome='+     ⋮'></Header>
            <Alarm hora={'5:30 am'} estado = {true} diaSemana='Tue' dia={18} mes='Nov'></Alarm>
            <Alarm hora={'5:40 am'} estado = {false} diaSemana='Tue' dia={18} mes='Nov'></Alarm>
            <Alarm hora={'6:00 am'} estado = {true} diaSemana='Tue' dia={18} mes='Nov'></Alarm>
            <Alarm hora={'7:30 am'} estado = {false} diaSemana='Tue' dia={18} mes='Nov'></Alarm>
            
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