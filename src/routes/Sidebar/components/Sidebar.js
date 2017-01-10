import React from 'react'
import './../Sidebar.scss'

export const Sidebar = (props) => {
  console.log(props.isOpen);
  return <div style={{ margin: '0 auto' }} >
    <h2>The sidebar is {props.isOpen ? 'open!' : 'closed.'}</h2>
    <button className={'btn btn-' + (props.isOpen ? 'red' : 'teal')} onClick={props.isOpen ? props.closeSidebar : props.openSidebar}>
    {props.isOpen ? 'Close' : 'Open'} it{props.isOpen ? '. ☹️ ' : '! 😄'}
    </button>
    <div className={'sidebar padding-medium ' + (props.isOpen ? 'is-open' : '')}>
      <button className='btn btn-default' onClick={props.closeSidebar}>
      Close Sidebar 👻
      </button>
    </div>
  </div>
}

Sidebar.propTypes = {
  isOpen       : React.PropTypes.bool.isRequired,
  openSidebar  : React.PropTypes.func.isRequired,
  closeSidebar : React.PropTypes.func.isRequired
}

export default Sidebar
