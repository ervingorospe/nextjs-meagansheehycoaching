import React from 'react'

class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 
    if (this.props.data.body) {
      return (
        <div className={this.props.data.styles} dangerouslySetInnerHTML={{__html: this.props.data.body}}/>
      );
    }
  }
}
 
export default Body;