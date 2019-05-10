import React from 'react'

class Component extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render = () => {
    const { classes } = this.props
    return (
      <div className={classes.Component}>

      </div>
    )
  }
}

export default Component