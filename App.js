import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Platform
} from 'react-native';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: ''
    }
  }

  mudouMensagem = msg => {
    this.setState({ mensagem: msg });
  }

  render() {
    const { mensagem } = this.state

    return (
      <View style={styles.container}>
        {Platform.OS === 'android' ? (
          <Text>Android</Text>
        ) : (
          <Text style={styles.text}>FIAP</Text>
        )}
        <Text style={[styles.text, styles.textColor]}>portal do aluno</Text>
        <TextInput
          placeholder='Login'
          style={styles.textInput}
          onChangeText={this.mudouMensagem}
        />
        <TextInput
          placeholder='Password'
          style={styles.textInput}
        />
        <Button
          title="Clique-me"
          onPress={() => alert(mensagem)}
          color="red"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    ...Platform.select({
      ios: {
        color: 'red'
      },
      android: {
        color: 'green'
      }
    })
  },
  textColor: {
    color: 'gray'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    width: 200
  }
});
