import React from 'react'
import * as TitleComponent from 'components/title-tags'
import { formatComponentName } from 'lib/component-name'

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 

    if (this.props.data.title) {
      const TitleType = TitleComponent[formatComponentName(this.props.data.titleTag)]; 

      return <TitleType title={this.props.data.title} styles={this.props.data.styles} titleSize={this.props.data.titleSize}/>;
    }
  }
}
 
export default Title;