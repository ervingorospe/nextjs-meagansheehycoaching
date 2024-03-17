import React from 'react'

class H1 extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 
    return (
      <h1 className={this.props.styles}>{this.props.title}</h1>
    );
  }
}
 
export default H1;