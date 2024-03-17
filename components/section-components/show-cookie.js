import React from 'react'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'


class ShowCookie extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 
    return (
      <Transition
        as={Fragment}  
        appear={this.props.showCookie} 
        show={this.props.showCookie}
        enter="transition-all ease-in duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all ease-out duration-200 "
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-white border font-medium sm:rounded-md fixed z-50 bottom-0 sm:left-5 sm:bottom-5 p-7">
          <div className="max-w-[280px]">
            <span className="">This website uses cookies to ensure you get the best experience on our website. </span>
            <a className="underline text-sm md:text-base inline-flex items-center justify-center group text-red-700 hover:text-red-800" href="/cookie-policy" rel="noreferrer" target="_blank"> View Cookie Policy</a>
            <button onClick={this.props.hideCookie} className="mt-4 button inline-flex w-full bg-primary-700 hover:bg-primary-800 text-white hover:text-gray-200">
              Got it!
            </button>
          </div>
        </div>
      </Transition>
    );
  }
}
 
export default ShowCookie;