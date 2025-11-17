import { Pressable, View, StyleSheet, Text } from 'react-native';

export default function Header({ nome }: { nome: string}) {
  return (
    <View style={styles.buttonContainer}>
        <Text style={styles.horario}>{nome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 40,
    marginVertical: 10,
    alignItems: 'flex-end'
  },



  horario: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff7abff',
  },
});
