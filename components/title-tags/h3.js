import React from 'react'

class H3 extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 
    return (
      <h3 className={this.props.styles}>{this.props.title}</h3>
    );
  }
}
 
export default H3;