import { useState, useCallback } from 'react'

export default function () {
  const [tasks, setTasks] = useState([])
  const updateTasks = useCallback(
    task => {
      setTasks([...tasks, task])
    },
    [tasks],
  )
  return [tasks, updateTasks]
}
