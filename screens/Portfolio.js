import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
    </View>
  )
}

export default Portfolio

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'orange',
        justifyContent : 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
    }
})