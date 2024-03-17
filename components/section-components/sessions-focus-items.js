import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

class SessionFocusItems extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 
    const { fields } = this.props.data

    return (
      <div className="flex flex-col text-center">
        {
          fields.image && (
            <figure className="relative justify-center">
              <div className="aspect-w-1  aspect-h-1 lg:aspect-h-[1/2] max-w-[208px] mx-auto overflow-hidden">
                <Image
                  src={fields.image.imageUrl}
                  alt={this.props.data.name}
                  layout="fill"
                  objectFit="fit"
                  priority
                />
              </div>
            </figure>
          )
        }
        
        <p className="mt-4 text-xl font-semibold text-section-title">
          {this.props.data.name}
        </p>
      </div>
    );
  }
}
 
export default SessionFocusItems;