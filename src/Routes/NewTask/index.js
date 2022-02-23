import React, { useState, useCallback, useContext } from 'react'
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'

import TaskContext from '@/Context'

import styles from './styles'

const NewTask = () => {
  const { t } = useTranslation()
  const s = styles()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const { tasks, updateTasks } = useContext(TaskContext)

  const [text, onChangeText] = useState(null)

  const handleSave = useCallback(() => {
    updateTasks(text)
  }, [text, updateTasks])

  console.log(tasks)
  return (
    <>
      <ScrollView
        style={Layout.fill}
        contentContainerStyle={[
          Layout.fill,
          Layout.colCenter,
          Gutters.smallHPadding,
        ]}
      >
        <Text>{t('link.tasks')}</Text>
        <TextInput
          style={s.input}
          onChangeText={onChangeText}
          placeholder="Write task"
          value={text}
        />
      </ScrollView>
      <TouchableOpacity
        style={[Common.button.rounded, s.saveButton]}
        onPress={handleSave}
      >
        <Text style={Fonts.textRegular}>Save</Text>
      </TouchableOpacity>
    </>
  )
}

export default NewTask
