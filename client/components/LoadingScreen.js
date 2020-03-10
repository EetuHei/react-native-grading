import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingScreen = () => {
  return (
    <View style={ styles.screen }>
      <ActivityIndicator size="large" color="#FFFFFF" />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#323232',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default LoadingScreen