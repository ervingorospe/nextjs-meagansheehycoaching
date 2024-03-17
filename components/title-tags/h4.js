import React from 'react'

class H4 extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 
    return (
      <h4 className={this.props.styles}>{this.props.title}</h4>
    );
  }
}
 
export default H4;