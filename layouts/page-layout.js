import React from 'react'
import _ from 'lodash'
import Cookies from 'js-cookie'
import { Header, Footer } from 'components/navigations'
// api
import { getCollection } from 'api/collections'
// constants
import { collectionName } from 'constants'
// lib
import { headerThemes } from 'lib/theme-functions'
// components
import { MobileActionButton, ShowCookie } from 'components/section-components'

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    mounted: false,
    navigation: {},
    actionButtons: {},
    headerColor: this.props.headerColor,
    actionSections: [],
    locationInfo: [],
    location: [],
    showActionBtn: false,
    showCookie:true
  }

  componentDidMount() {
    this.mounted = true;  
    this.setState({
      showCookie: Cookies.get('wpcc') !== 'dismissed'
    })

    window.onscroll = () => {
      if(window.pageYOffset === 0) {
        this.setState({
          headerColor: this.props.headerColor,
          showActionBtn: false
        })
      }

      if(window.pageYOffset > 0) {
        this.setState({
          headerColor: headerThemes.scroll,
          showActionBtn: true
        })
      }
    };

    if (this.mounted) {
      getCollection(`${collectionName.navigation},${collectionName.actionButtons},${collectionName.callToAction},${collectionName.footerLocationInfo},${collectionName.location}`).then(
        data => {
          this.setState({
            navigation: _.first(data.collections),
            actionButtons: data.collections[1],
            actionSections: data.collections[2].items,
            locationInfo: data.collections[3].items,
            location: data.collections[4].items
          })
        }
      )
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  hideCookie() {
    Cookies.set('wpcc', 'dismissed', { expires: 0.3 })
    this.setState({ showCookie: false })
  }

  render() { 
    const actionBtn = _.find(this.state.actionButtons.items, data => data.fields.active && data.fields.isMobileFooterButton)

    return (
      <div className="min-h-screen antialiased mx-auto">
        <Header navigation={this.state.navigation} actionButtons={this.state.actionButtons} headerColor={this.state.headerColor}/>

        <main>
          { this.props.children }
        </main>

        {
          !_.get(this.props.pageContent, 'fields.hideFooter') && (
            <Footer
              navigation={this.state.navigation}
              actionSections={this.state.actionSections}
              locationInfo={this.state.locationInfo}
              location={this.state.location}
              pageContent={_.get(this.props.pageContent, 'fields')}
              removeContactUs={this.props.removeContactUs}
            />
          )
        }

        {/* mobile action button */}
        {
          (this.state.actionButtons.items && !_.get(this.props.pageContent, 'fields.hideCallToActionSections') && actionBtn) && (
            <MobileActionButton actionButton={actionBtn} show={this.state.showActionBtn}/>
          )
        }

        {/* cookie action button */}
        {
          this.state.showCookie && (
            <ShowCookie showCookie={this.state.showCookie} hideCookie={() => this.hideCookie()}/>
          )
        }
      </div>
    );
  }
}
 
export default PageLayout;