// screens/Home.js

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function Home() {
  const [total, setTotal] = useState('');
  const [newTotal, setNewTotal] = useState('');
  const inputRef = useRef(null);

  const calculateTip = (percent) => {
    const inputValue = parseFloat(inputRef.current?.value || inputRef.current);
    if (isNaN(inputValue)) return;

    const tipped = (inputValue * percent) / 100;
    const afterTip = inputValue + tipped;
    setTotal(tipped.toFixed(2));
    setNewTotal(afterTip.toFixed(2));
    inputRef.current = '';
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <Card style={styles.card}>
        <Card.Title title="💸 Tipper" titleStyle={styles.title} />
        <Card.Content>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            onChangeText={(text) => (inputRef.current = text)}
          />
          <View style={styles.buttonRow}>
            <Button mode="outlined" onPress={() => calculateTip(18)} style={styles.button}>18%</Button>
            <Button mode="outlined" onPress={() => calculateTip(20)} style={styles.button}>20%</Button>
            <Button mode="outlined" onPress={() => calculateTip(22)} style={styles.button}>22%</Button>
          </View>
          <View style={styles.result}>
            <Text style={styles.text}>Tip: ${total}</Text>
            <Text style={styles.text}>New Total: ${newTotal}</Text>
          </View>
        </Card.Content>
      </Card>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1f1f1f',
    padding: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    width: '30%',
  },
  result: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 2,
  },
});
