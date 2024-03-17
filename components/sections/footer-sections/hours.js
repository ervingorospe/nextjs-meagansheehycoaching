import _ from 'lodash';
import React from 'react'

class Hours extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <div className="">
        <span className="block font-heading text-2xl font-semibold text-section-footer-title">Hours</span>
        <div className="mt-3 p-0 text-section-footer-body" dangerouslySetInnerHTML={{__html: _.get(this.props.location, 'fields.hours')}}/>
      </div>
    );
  }
}
 
export default Hours;