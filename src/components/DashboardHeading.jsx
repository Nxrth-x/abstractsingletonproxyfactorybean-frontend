import { useContext, useEffect, useState } from 'react'
import { getCurrentLocaleTimeString } from '@helpers/dates'
import { randomGreetingMessages, randomNames } from '@helpers/fake-data'
import { AuthContext } from '@contexts/AuthContext'

/**
 *
 * @returns A heading element for the dashboard page
 */
export default function DashboardHeading() {
  const { state: appState } = useContext(AuthContext)
  const { user } = appState
  const [greetingMessage] = useState(randomGreetingMessages.randomMessage)
  const [currentTime, setCurrentTime] = useState(getCurrentLocaleTimeString())

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentTime(getCurrentLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [currentTime])

  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-4xl tracking-tighter">
        {greetingMessage}, <span className="font-bold">{user.firstName}!</span>{' '}
        👋
      </h1>
      <div>
        <p>Bom ter você aqui! 😸</p>
        <p className="text-lg tracking-wide">{currentTime}</p>
      </div>
    </div>
  )
}
