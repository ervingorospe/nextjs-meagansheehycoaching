/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash';
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// Components
import { NavLink, ActionButton } from 'components/common'
// lib
import { itemLink, actionButtonLink } from 'lib/link-functions'
import { formatRouteName } from 'lib/route-name'
//api
import { getNavItem } from 'api/collections'


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  async fetchItems(btnDetails) {
    if (_.get(btnDetails, 'fields.button.url')) {
      if (_.get(btnDetails, 'fields.button.target')) {
        return window.open (_.get(btnDetails, 'fields.button.url'), _.get(btnDetails, 'fields.button.target'));
      }

      return router.push(_.get(btnDetails, 'fields.button.url'))
    }

    const { items } = await getNavItem(_.get(btnDetails, 'fields.buttonPageLink'))
    const slug = _.get(items[0], 'fields.slug') || formatRouteName(_.get(items[0], 'name'))
    return window.location.href = slug
  }

  async navLink(details) {
    if (details.fields.pageLink) {
      const { items } = await getNavItem(details.fields.pageLink)
      const data = items[0]
      return window.location.href = _.get(data, 'fields.nav.text') || (_.get(data, 'fields.slug') || formatRouteName(data.name))
    }
   
    const route = details.fields.slug || formatRouteName(details.name)
    return window.location.href = _.get(details, 'fields.nav.url') || route
  }

  render() { 
    const navigation = _.get(this.props.navigation, 'items')
    const actionButtons = _.get(this.props.actionButtons, 'items')

    return (
      <div className={`relative max-w-[1920px] z-100 h-0 ${this.props.headerColor}`}>
        <div className="fixed w-full">
          <Popover>
            <div className="mx-auto w-full px-4 sm:px-6 bg-header-fill">
              <nav className="flex items-center justify-between px-4 py-6 sm:px-6 lg:justify-start lg:space-x-10 xl:px-8 2xl:px-12" aria-label="Global">
                <div className="flex justify-start xl:w-0 xl:flex-1">
                  <Link href="/" passHref>
                    <div className="w-48 lg:w-full justify-self-start cursor-pointer">
                      <span className="sr-only">Meagan Sheehy Coaching</span>
                      <Image
                        alt="Meagan Sheehy Coaching"
                        src="https://fluxconsole.com/files/item/1269/160843/logo.svg"
                        height={10}
                        width={100}
                        priority
                        className="image"
                      />
                    </div>
                  </Link>
                </div>
                <div className="hidden space-x-10 xl:flex mt-1">
                  {
                    _.size(navigation) > 0 && (
                      navigation.map(item => {
                        if (_.get(item, 'fields.showInNavigation'))
                          return <NavLink item={itemLink(item)} key={item.name} styles='nav-link text-base font-medium text-header-color hover:text-header-hover-color'/>
                      })
                    )
                  }
                </div>
                <div className="flex items-center justify-end lg:flex-1 lg:w-0 space-x-3">
                  <span className="hidden lg:block">
                    {
                      _.size(actionButtons) > 0 && (
                        actionButtons.map(buttons => {
                          return <ActionButton item={actionButtonLink(buttons)} key={buttons.name} styles='inline-flex button-animation button grid inline-flex border-section-button-hero-primary text-section-button-hero-primary sm:inline-flex hover:border-section-button-hero-primary-hover hover:text-section-button-hero-primary-hover'/>
                        })
                      )
                    }
                  </span>
                  
                  <div className="-mr-2 flex items-center xl:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-header-color hover:text-header-hover-color transition-colors duration-150">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition xl:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Link href="/" passHref>
                        <div className="w-48 lg:w-full justify-self-start cursor-pointer">
                          <span className="sr-only">Strategic Communications</span>
                          <Image
                            alt="Strategic Communications"
                            src="https://fluxconsole.com/files/item/1269/160843/logo.svg"
                            height={10}
                            width={80}
                            className="image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    {
                      _.size(navigation) > 0 && (
                        navigation.map((item) => {
                          if (_.get(item, 'fields.showInNavigation'))
                            return (
                              <Popover.Button onClick={() => this.navLink(item)} key={item.name} className="grid w-full text-left">
                                <a key={item.name}  className="block rounded-md px-3 py-3 text-base font-medium text-header-color hover:text-header-hover-color">
                                  {item.name}
                                </a>
                              </Popover.Button>
                            )
                        })
                      )
                    }
                  </div>
                  <div className="grid w-full">
                    {
                      _.size(actionButtons) > 0 && (
                        actionButtons.map(buttons => {
                          const btnName = _.get(buttons, 'fields.button.text') || buttons.name

                          return (
                            <Popover.Button onClick={() => { this.fetchItems(buttons) }} key={buttons.name}>
                              <a
                                className="block w-full px-5 py-3 text-center font-medium bg-button-primary-fill text-button-primary-text hover:bg-button-primary-hover"
                              >
                                {btnName}
                              </a>
                            </Popover.Button>
                          )
                        })
                      )
                    }
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    );
  }
}
 
export default Header;