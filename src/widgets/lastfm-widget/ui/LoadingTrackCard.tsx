import React from 'react'
import Image from 'next/image'
import Oval from 'react-loading-icons/dist/esm/components/oval'
import { useTheme } from 'next-themes'

const LoadingTrackCard = () => {
  const {theme} = useTheme();

  return (
    <div className="keen-slider__slide">
    <Image
      alt="Music loading"
      src={'/music-loading.gif'}
      width={60}
      height={60}
    ></Image>
    <Oval
      stroke={theme === 'dark' ? '#ffffff' : '#000000'}
      className="w-6 h-6"
    />
    <p className="text-lg">Loading...</p>
  </div>
  )
}

export default LoadingTrackCard