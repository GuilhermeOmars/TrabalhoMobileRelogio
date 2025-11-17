import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import Button from '@/components/Button';
import Stopwatch from '@/components/Stopwatch';
import Header from '@/components/Header';

export default function Lista() {

    return (
        <ScrollView style={{ backgroundColor: "#000000ff" }}>
            <View style={styles.container}>
                <Header nome="+   ⋮"></Header>
                <Stopwatch hora="00:00.00"></Stopwatch>

                <View style={styles.buttonsRow}>
                    <Button nome="Lap" cor="#313131ff" />
                    <Button nome="Start" cor="#ffc400ff" />
                </View>

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
        subtitle: {
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
            color: '#FFFFFF',
            backgroundColor: '#313131ff'
        },
        text: {
            textAlign: 'center',
            fontSize: 20,
        },
        horario: {
            textAlign: 'left',
            fontSize: 50,
            color: 'white',

        },
        buttonsRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
    }
    });