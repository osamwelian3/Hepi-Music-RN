import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fonts } from '../utils/Fonts'

const TitleBlock = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
            <MaterialCommunityIcons name='cloud-upload' size={30} color={colors.primaryColor} />
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialCommunityIcons name='signal' size={30} style={{transform: [{rotate: '-90deg'}]}} color={colors.primaryColor} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TitleBlock

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: colors.primaryColor,
        fontWeight: '900',
        fontSize: 25,
        margin: 10,
        fontFamily: fonts.roboto
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: 80,
        justifyContent: 'space-between',
        margin: 10
    }
})