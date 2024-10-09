import React from 'react'
import Image from 'next/image'
import Oval from 'react-loading-icons/dist/esm/components/oval'
import { useTheme } from 'next-themes'

const LoadingTrackCard = () => {
  const {theme} = useTheme();

  return (
    <div className="flex flex-row items-center gap-4 min-w-fit min-h-32 text-sm border-2 border-black p-4 dark:border-white text-black dark:text-white">
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