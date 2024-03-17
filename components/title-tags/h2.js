import React from 'react'

class H2 extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 
    return (
      <h2 className={this.props.styles}>{this.props.title}</h2>
    );
  }
}
 
export default H2;