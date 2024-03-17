import React from 'react'

class Telephone extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return (
      <div className="">
        <span className="block font-heading text-2xl font-semibold text-section-footer-title">Call Me</span>
        <div className="mt-3 text-section-footer-body">
          <span className="block">{_.get(this.props.location, 'fields.telephone')}</span>
        </div>
      </div>
    );
  }
}
 
export default Telephone;