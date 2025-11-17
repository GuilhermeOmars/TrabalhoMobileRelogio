import { Pressable,ScrollView, StyleSheet, Text} from 'react-native';

export default function Stopwatch({hora}:{hora:string}) {
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
            marginTop: 100,
            padding: 20,
            borderRadius: 20,
            marginBottom: 300,
            alignItems: 'stretch',
            color:'#FFFFFF',
        },
        horario:{
            textAlign: 'center',
            fontSize: 100,
            color: '#fff7abff',

        }
    });