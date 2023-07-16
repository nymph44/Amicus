'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from './animation.json'
function page() {
  return (
    <section class="text-white py-32 flex flex-col space-y-12">
      <div className="w-full flex justify-center">
        <Lottie play loop animationData={lottieJson} className="w-48" />
      </div>
      <div class="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Sharing platform for friends
            <span class="sm:block"> to discover new music. </span>
          </h1>

          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-base-content">
            A friendly tool to share music with friends and to discover new
            music Using Spotify, Youtube, and Soundcloud
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded border border-primary bg-primary text-primary-content px-12 py-3 text-sm font-medium  hover:bg-primary-focus  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block w-full rounded border border-secondary px-12 py-3 text-sm font-medium text-base-content hover:border-secondary-focus focus:outline-none focus:ring  sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
