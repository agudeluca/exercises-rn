import { StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import { Colors } from '@/Theme/Variables'
export default function () {
  const { Common, Colors } = useTheme()
  return StyleSheet.create({
    input: {
      ...Common.textInput,
      width: 300,
      borderWidth: 1,
      borderColor: Colors.gray,
    },
    saveButton: { margin: 10 },
  })
}
