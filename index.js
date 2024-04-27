const Notification = props => {
  const {className, icon, children} = props
  return (
    <div className={`cont${className}`}>
      <img className={`img${className}`} alt='image' src={icon} />
      <p className={`para${className}`}>{children}</p>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Notification</h1>
    <div>
      <Notification
        className='1'
        icon='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        children='Information Message'
      />
      <Notification
        className='2'
        icon='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        children='Success Message'
      />
      <Notification
        className='3'
        icon='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        children='Warning Message'
      />
      <Notification
        className='4'
        icon='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        children='Error Message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
