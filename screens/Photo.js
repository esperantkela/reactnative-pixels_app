import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Photo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
    </View>
  )
}

export default Photo

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'lightgreen',
        justifyContent : 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
    }
})