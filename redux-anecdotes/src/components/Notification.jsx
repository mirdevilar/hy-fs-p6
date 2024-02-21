import { useSelector } from 'react-redux'
import { actionSetNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification.content) {
    return (
      <div style={style}>
        {notification.content}
      </div>
    )
  }
}

export default Notification
