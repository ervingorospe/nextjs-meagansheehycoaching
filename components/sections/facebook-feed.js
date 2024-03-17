/* eslint-disable @next/next/no-img-element */
import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import Image from 'next/image'
// api
import { getCollection, getFacebookFeed } from 'api/collections'
//lib
import { setSectionColor } from 'lib/theme-functions'
//components
import { Title, Body, Button, VideoHolder, ImageHolder } from 'components/section-components'

class FacebookFeed extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { 
    mounted: false,
    facebookFeed: {}
  }

  async componentDidMount() {
    this.mounted = true;

    if (this.mounted) {
      const { collections } = await getCollection(27460)
      const settings = collections[0].items[0]
      const id = _.get(settings, 'fields.facebookFeedId') ? _.get(settings, 'fields.facebookFeedId') : process.env.REACT_APP_FACEBOOK_ID
      const limit = 6
      const token = _.get(settings, 'fields.facebookFeedToken') ? _.get(settings, 'fields.facebookFeedToken') : process.env.REACT_APP_FACEBOOK_TOKEN
      
      const feed = await getFacebookFeed(id, limit, token)
      this.setState({
        facebookFeed: feed
      })
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() { 
    const { fields } = this.props.data
    const sectionTheme = setSectionColor(fields.backgroundColorClass)
    const titleStyle = 'text-3xl md:text-4xl font-heading font-bold mt-1 text-section-title'
    const subTitleStyle = 'mt-1 text-lg uppercase tracking-wide font-semibold text-section-subtitle'

    return (
      <section className={`relative overflow-hidden bg-${fields.backgroundColorClass} light-section-theme ${sectionTheme}`}>
        {
          (this.state.facebookFeed && _.size(this.state.facebookFeed) > 0) && (
            <div className={`max-w-screen-2xl py-8 mb-10 lg:py-16 container relative z-1  ${fields.containerWidth} ${this.props.marginTop}`}>
              <div className="grid w-full">
                <div className="relative text-center">
                  <Title 
                    data={{
                      title: fields.title,
                      titleSize: fields.titleSize,
                      titleTag: fields.titleTag,
                      styles: fields.titlesInverted !== 'inverted' ? titleStyle : subTitleStyle
                    }}
                  />

                  {/* subtitle */}
                  <Title 
                    data={{
                      title: fields.subtitle,
                      titleSize: fields.subtitleSize,
                      titleTag: fields.subtitleTag,
                      styles: fields.titlesInverted !== 'inverted' ? subTitleStyle : titleStyle
                    }}
                  />

                  {/* body */}
                  <Body
                    data={{
                      body: fields.body,
                      bodySize: fields.bodySize,
                      styles: `mt-6 prose xl:prose-lg bg-transparent sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent`
                    }}
                  />

                  {/* extra body */}
                  <Body
                    data={{
                      body: fields.extraBody,
                      bodySize: fields.extraBodySize,
                      styles: `mt-2 prose xl:prose-lg bg-transparent sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent`
                    }}
                  />
                </div>
              </div>

              {
                (_.get(this.state.facebookFeed, 'data') && _.get(this.state.facebookFeed, 'data').length > 0) && (
                  <div className="mt-8 grid gap-2 lg:grid-cols-3 text-left">
                    {
                      _.get(this.state.facebookFeed, 'data').map((feed, index) => {
                        const data = _.get(feed, 'attachments.data[0]')

                        return (
                          <div className="flex w-full mx-auto max-w-md" key={index}>
                            <a className="flex flex-col w-full p-4 transition-all duration-200 group hover:bg-white hover:shadow-lg rounded-2xl" href={feed.permalink_url} target="_blank" rel="noreferrer">
                              <div className="flex-grow-0 flex-shrink overflow-hidden bg-gray-200 rounded-xl">
                                <div className="aspect-w-3 aspect-h-2">
                                  <Image 
                                    alt="Meagan Sheehy Coaching News Feed" 
                                    src={_.get(data, 'media.image.src')}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    priority
                                  />
                                </div>
                              </div>
                              <div className="flex-grow py-8">
                                <div className="text-base tracking-wide text-theme-body">{moment(feed.created_time, "YYYYMMDD").fromNow()}</div>
                                <div className="mt-3 text-sm text-theme-subtitle">
                                  {data.description}
                                </div>
                              </div>
                              <div className="flex-grow-0 flex-shrink pt-3 text-center border-t opacity-0 group-hover:opacity-100">
                                <p className="w-full text-sm font-bold tracking-wide text-center text-gray-400 uppercase group-hover:text-primary-700">
                                  View Facebook Post
                                </p>
                              </div>
                            </a>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              }
            </div>
          )
        }
      </section>
    );
  }
}
 
export default FacebookFeed;