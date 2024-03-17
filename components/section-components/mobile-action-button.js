import React from 'react'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
//components
import { Button } from 'components/section-components'
import _ from 'lodash';

class MobileActionButton extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    const { fields } = this.props.actionButton

    return ( 
      <Transition
        as={Fragment}  
        appear={this.props.show} 
        show={this.props.show}
        enter="transition-all ease-in duration-150 "
        enterFrom="-bottom-16"
        enterTo="bottom-0"
        leave="transition-all ease-out duration-200 "
        leaveFrom="bottom-0"
        leaveTo="-bottom-16"
      >
        <div className="flex sm:hidden fixed bottom-0 z-50 w-full">
          <div className="bg-white p-2 w-full">
            <Button
              data={{
                fields: {
                  button: {..._.get(fields, 'button')},
                  buttonPageLink: _.get(fields, 'buttonPageLink'),
                },
                name: _.get(this.props.actionButton, 'name'),
                styles: 'light-section-theme button button-sm flex mt-1 bg-section-button-primary text-section-button-primary hover:bg-section-button-primary-hover'
              }}
            />
          </div>
        </div>
      </Transition>
    );
  }
}
 
export default MobileActionButton;