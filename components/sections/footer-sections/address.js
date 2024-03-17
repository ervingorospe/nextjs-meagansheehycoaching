import React from 'react'
import _ from 'lodash'

class Address extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  
  render() { 

    return ( 
      <div className="">
        <span className="block font-heading text-2xl font-semibold text-section-footer-title">Find Me</span>
        <div className="mt-3 text-section-footer-body">
          <span className="block">
            {_.get(this.props.location, 'fields.address.address')} <br/>
            {_.get(this.props.location, 'fields.address.address2')} <br/>
            {_.get(this.props.location, 'fields.address.city')}, {_.get(this.props.location, 'fields.address.state')} {_.get(this.props.location, 'fields.address.zip')} {_.get(this.props.location, 'fields.address.country')}
          </span>
          <a href={_.get(this.props.location, 'fields.googleMapUrl')} target="_blank" rel="noreferrer" className="inline-flex mt-3 button button-sm bg-section-button-footer text-section-button-footer hover:bg-section-button-footer-hover">
            Get Directions
          </a>
        </div>
      </div>
    );
  }
}
 
export default Address;