import React from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';
import { MoodOptionType } from '../types';
import { theme } from '../theme';
const moodOptions:MoodOptionType[] = [
    { emoji: '🧑‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
  ];
  // <> how do we tell typescript that we want this type to be Moodoptiontype
  // so this would either Moodoptiontype or undefined
  export const MoodPicker: React.FC = () => {
  const [selectedMood,setSelectedMood]=React.useState<MoodOptionType>();  
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>How are you right now?</Text>
    <View style={styles.moodList}>
      {moodOptions.map(option => (
        <View>
          <Pressable
            onPress={() => setSelectedMood(option)}
            key={option.emoji}
            style={[
              styles.moodItem,
              option.emoji === selectedMood?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text style={styles.moodText}>{option.emoji}</Text>
          </Pressable>
          <Text style={styles.descriptionText}>
            {selectedMood?.emoji === option.emoji ? option.description : ' '}
          </Text>
        </View>
      ))}
    </View>
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Choose</Text>
    </Pressable>
  </View>
);
};
const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454C73',
    borderColor: '#fff',
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});