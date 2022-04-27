import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const New: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>new</Text>
    </View>
  );
};
//navigation 2nd
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'wheat'
  },
});