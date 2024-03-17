import React from 'react'

class P extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 
    return (
      <p className={this.props.styles}>{this.props.title}</p>
    );
  }
}
 
export default P;