import React from 'react'
import Link from 'next/link'
// lib
import { actionButtonLink, itemLink } from 'lib/link-functions'
// api
import { getNavItem } from 'api/collections'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    mounted: false,
    item: {
      ...actionButtonLink(this.props.data),
      ...this.props.data
    }
  }

  async componentDidMount() {
    this.mounted = true;  

    if (this.mounted && this.state.item.pageLink) {
      const { items } = await getNavItem(this.state.item.href)
      const tempItem = itemLink(_.first(items))
          
      this.setState({
        item: {
          ...this.state.item,
          href: tempItem.href
        }
      })
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() { 

    return (
      <Link href={this.state.item.href.toString()}>
        <a className={this.state.item.styles} target={this.state.item.target}>{this.state.item.name}</a>
      </Link>
    );
  }
}
 
export default Button;