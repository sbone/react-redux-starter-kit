import React from 'react'

export const Sidebar = (props) => {
  console.log(props.isOpen);
  return <div style={{ margin: '0 auto' }} >

    <h2>Sidebar: { props.isOpen ? 'open' : 'false' }</h2>
    <button className='btn btn-default' onClick={props.isOpen ? props.closeSidebar : props.openSidebar}>
    {props.isOpen ? 'Close' : 'Open'} Sidebar
    </button>
  </div>
}

Sidebar.propTypes = {
  isOpen       : React.PropTypes.bool.isRequired,
  openSidebar  : React.PropTypes.func.isRequired,
  closeSidebar : React.PropTypes.func.isRequired
}

export default Sidebar
