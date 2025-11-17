import { useState } from 'react';
import { ScrollView, StyleSheet, Text,View, Switch} from 'react-native';
type tipoAlarm = {
    hora: string;
    estado:boolean;
    diaSemana: string;
    dia: number;
    mes: string
}

export default function Alarm({hora,estado,diaSemana,dia,mes}: tipoAlarm) {
    const [esstado, setEsstado] = useState(estado);
    return (
            <ScrollView
                style={styles.scrollContainer} contentContainerStyle={styles.itemsContainer}>
                    <View style = {{flexDirection: "row"}}>
                        <Text style={esstado?styles.horarioon : styles.horariooff}>{hora}</Text>
                        <Text style={esstado? styles.dataon : styles.dataoff }>{`${diaSemana}, ${dia}, ${mes}`}</Text>

                        <Switch value={esstado} style={{ transform: [{ scale: 2 }], marginTop:23   }} onValueChange={() => setEsstado(!esstado)} thumbColor = {esstado ? '#ffffffff' : '#ffffffff'}  trackColor={{ false: "#767577", true: "#FFE066" }}/>
                            
                </View>
            </ScrollView>
    );
}
const styles =
    StyleSheet.create({
        scrollContainer: {
            width: '90%',
        },
        itemsContainer: {
            flex: 1,
            width: '100%',
            marginTop: 10,
            padding: 20,
            borderRadius: 20,
            marginBottom: 10,
            color:'#FFFFFF',
            backgroundColor: '#313131ff'
        },
        horarioon:{
            textAlign: 'left',
            fontSize: 50,
            color: 'white',
        },
         horariooff:{
            textAlign: 'left',
            fontSize: 50,
            color: '#6e6e6eff',
        },
        dataon: {
            flex: 1,
            padding: 20,
            paddingLeft:85,
            paddingRight:45,
            textAlign:'right',
            fontSize: 20,
            color: '#fff7abff',
        },
         dataoff: {
           flex: 1,
            padding: 20,
            paddingLeft:85,
            paddingRight:45,
            textAlign:'right',
            fontSize: 20,
            color: '#6e6e6eff',
        },

    });