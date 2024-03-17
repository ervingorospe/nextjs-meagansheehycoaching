import React from 'react'
import Link from 'next/link'
//components
import { Title } from 'components/section-components'
// api
import { getCollection } from 'api/collections'
// constants
import { collectionName } from 'constants'

class EmailSignup extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { 
    formUrl: '',
    idstamp: '',
    mounted: false
  }

  componentDidMount() {
    this.mounted = true;
    
    if (this.mounted) {
      
      getCollection(collectionName.wufooForm).then(
        data => {
          const {items} = _.first(data.collections)
          this.setState({
            formUrl: items[0].fields.wufooEmailSignupFormUrl,
            idstamp: items[0].fields.wufooEmailSignupFormPassword,
          })
        }
      )
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() { 
    const { fields } = this.props.data
    const titleStyle = fields.titlesInverted === 'inverted' ? 'mt-1 text-lg uppercase tracking-wide font-semibold text-section-email-signup-title' : 'text-3xl md:text-4xl font-heading font-medium mt-1 text-section-email-signup-title';

    return (
      <section className={`${this.props.marginTop} max-w-screen-xl text-left pb-8 pt-12 container relative z-1 dark-section-theme`}>
        <div className="px-6 border border-gray-700 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <Title 
              data={{
                title: fields.title,
                titleSize: fields.titleSize,
                titleTag: fields.titleTag,
                styles: titleStyle
              }}
            />
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form name="form1834" className="wufoo sm:flex" acceptCharset="UTF-8" autoComplete="off" encType="multipart/form-data" method="POST" action={`${this.state.formUrl}#public`}>
              <label htmlFor="emailAddress" className="sr-only">Email address</label>
              <input id="Field6" name="Field6" spellCheck="false" type="email" autoComplete="email" maxLength="255" required="" className="w-full px-5 py-3 placeholder-gray-500 rounded-md border-theme focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white" placeholder="Enter your email"></input>
              <button id="saveForm" name="saveForm" type="submit" className="button flex w-full mt-3 text-section-button-email-signup bg-section-button-email-signup hover:bg-section-button-email-signup-hover sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                Subscribe
              </button>
              <div className="hidden">
                <label htmlFor="comment">Do Not Fill This Out</label>
                <textarea name="comment" id="comment" rows="1" cols="1"></textarea>
                <input type="hidden" id="idstamp" name="idstamp" value={this.state.idstamp}/>
                <input type="hidden" id="encryptedPassword" name="encryptedPassword" value=""/>
              </div>
            </form>
            <p className="mt-3 text-sm text-center text-section-email-signup-body">
              We care about protecting your data. Read our &nbsp;
              <Link href="/privacy-policy">
                <a className="font-bold text-white hover:underline" target="_blank" rel="noreferrer">
                  Privacy Policy.
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
 
export default EmailSignup;