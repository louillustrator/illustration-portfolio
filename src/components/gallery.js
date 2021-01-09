import Img from "gatsby-image"
import React from "react"
import useGallery from "../hooks/useGallery"

const Gallery = () => {
  const images = useGallery();
  console.log(images, 'images')
  return (
    <div>
      {images.map(({ id, fluid }) => {
        console.log(id, 'id', fluid, 'fluid')
        return <Img key={id} fluid={fluid} />
      })}
    </div>
  )
}

export default Gallery;