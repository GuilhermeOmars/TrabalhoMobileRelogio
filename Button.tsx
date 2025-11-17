import { Pressable, View, StyleSheet, Text } from 'react-native';

export default function Button({ nome, cor }: { nome: string; cor: string }) {
  return (
    <View style={[styles.buttonContainer, { backgroundColor: cor }]}>
      <Pressable style={styles.pressable}>
        <Text style={styles.horario}>{nome}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    padding: 20,
    borderRadius: 40,
    marginVertical: 10,
    alignItems: 'center',
  },

  pressable: {
    width: '100%',
    alignItems: 'center',
  },

  horario: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
});
