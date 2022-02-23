import React, { useMemo, useContext } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import TaskContext from '@/Context'
import useProviderTasksState from '@/Hooks/useProviderTasksState'

import styles from './styles'
import { navigate } from '@/Navigators/utils'

const List = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const s = styles()
  const { tasks } = useContext(TaskContext)
  const TaskList = useMemo(
    () =>
      tasks.map(task => {
        return (
          <View style={s.taskContainer}>
            <Text style={s.taskText}>{task}</Text>
          </View>
        )
      }),
    [s.taskContainer, s.taskText, tasks],
  )

  return (
    <>
      <Text style={s.text}>{t('link.tasks')}</Text>
      <ScrollView
        style={Layout.fill}
        contentContainerStyle={[
          Layout.fill,
          Layout.colCenter,
          Gutters.smallHPadding,
        ]}
      >
        {TaskList}
        <TouchableOpacity
          style={[Common.button.rounded, Gutters.regularBMargin]}
          onPress={() => navigate('NewTask')}
        >
          <Text style={Fonts.textRegular}>Create new task</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default List
