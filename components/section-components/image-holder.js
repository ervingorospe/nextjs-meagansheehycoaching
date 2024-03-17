import React from 'react'
import Image from 'next/image'

class ImageHolder extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() {
    return (
      <figure className="relative">
        <div className={this.props.styles}>
          <Image
            src={this.props.image.imageUrl}
            alt={this.props.image.altText}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
          />
        </div>
        <svg className="absolute h-24 -left-12 bottom-16 z-100 text-primary-700" fill='currentColor' xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 227.41 227.41">
          <g id="Logos">
            <path className="cls-1" d="M114.31,0C98.67,37.3,37.47,97.86,0,113.11c37.3,15.64,97.86,76.84,113.11,114.31,15.64-37.3,76.84-97.86,114.31-113.11C190.11,98.67,129.55,37.47,114.31,0Z"/>
          </g>
        </svg>
        <svg className="absolute h-14 left-10 bottom-36 z-100 text-primary-500" fill='currentColor' xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 227.41 227.41">
          <g id="Logos">
            <path className="cls-1" d="M114.31,0C98.67,37.3,37.47,97.86,0,113.11c37.3,15.64,97.86,76.84,113.11,114.31,15.64-37.3,76.84-97.86,114.31-113.11C190.11,98.67,129.55,37.47,114.31,0Z"/>
          </g>
        </svg>
        <svg className="absolute h-24 -right-12 top-24 text-primary-700" fill='currentColor' xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 227.41 227.41">
          <g id="Logos">
            <path className="cls-1" d="M114.31,0C98.67,37.3,37.47,97.86,0,113.11c37.3,15.64,97.86,76.84,113.11,114.31,15.64-37.3,76.84-97.86,114.31-113.11C190.11,98.67,129.55,37.47,114.31,0Z"/>
          </g>
        </svg>
      </figure>
    );
  }
}
 
export default ImageHolder;