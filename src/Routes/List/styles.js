import { StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'

export default function () {
  const { Fonts } = useTheme()
  return StyleSheet.create({
    text: {
      ...Fonts.textRegular,
      textAlign: 'center',
      margin: 15,
    },
    taskContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'gray',
      width: 300,
      margin: 10,
      height: 30,
      textAlign: 'center',
      alignContent: 'center',
      borderRadius: 2,
    },
    taskText: {
      ...Fonts.textCenter,
      ...Fonts.textRegular,
      color: 'white',
    },
  })
}
