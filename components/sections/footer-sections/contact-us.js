import React from 'react'
//components
import { Button } from 'components/section-components'

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    const { fields } = this.props.data

    return (
      <div className="">
        <span className="block font-heading text-2xl font-semibold text-section-footer-title">Contact Me</span>
        <div className={`mt-3 ${this.props.styles}`}>
          {
            fields.button && (
              <Button
                data={{
                  fields: {
                    button: {...fields.button},
                    buttonPageLink: fields.buttonPageLink,
                  },
                  name: fields.button.text,
                  styles: 'button button-sm flex max-w-[216px] bg-section-button-footer-secondary text-section-button-footer-secondary hover:bg-section-button-footer-secondary-hover'
                }}v
              />
            )
          }

          {
            _.get(fields, 'button-2') && (
              <Button
                data={{
                  fields: {
                    button: {..._.get(fields, 'button-2')},
                    buttonPageLink: _.get(fields, 'buttonPageLink-2'),
                  },
                  buttonSize: fields.buttonSize,
                  buttonStyle: _.get(fields, 'buttonStyle-2'),
                  name: _.get(fields, 'button-2.text'),
                  styles: 'button button-sm flex max-w-[216px] mt-2 bg-section-button-footer text-section-button-footer hover:bg-section-button-footer-hover'
                }}
              />
            )
          }
        </div>
      </div> 
    );
  }
}
 
export default ContactUs;