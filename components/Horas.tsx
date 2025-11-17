import { ScrollView, StyleSheet, Text} from 'react-native';

export default function Horas({hora}:{hora:string}) {
    return (
            <ScrollView
                style={styles.scrollContainer} contentContainerStyle={styles.itemsContainer}>
                <Text style={styles.horario}> {hora} </Text>
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
            alignItems: 'stretch',
            color:'#FFFFFF',
            backgroundColor: '#313131ff'
        },
        horario:{
            textAlign: 'left',
            fontSize: 50,
            color: 'white',

        }
    });