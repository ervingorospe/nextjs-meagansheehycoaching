import React from 'react'
import Link from 'next/link'
// api
import { getNavItem } from 'api/collections'
// lib
import { itemLink } from 'lib/link-functions'

class ActionButton extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { 
    mounted: false,
    item: {
      ...this.props.item
    }
  }

  async componentDidMount() {
    this.mounted = true;  

    if (this.mounted && this.props.item.pageLink) {
      const { items } = await getNavItem(this.props.item.href)
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
        <a className={`button ${this.props.styles}`} target={this.state.item.target}>
          {this.state.item.name}
        </a>
      </Link>
    );
  }
}
 
export default ActionButton;