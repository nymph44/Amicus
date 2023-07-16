import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <section class=" w-full">
      {/* <div className=" h-[calc(100vh-150px)] flex justify-center items-center m-auto ">
        <div className="bg-base-200 flex justify-center items-center">
          <div className="m-auto w-1/2">
            <h2 className="text-4xl font-bold text-base-content">Amicus</h2>
            <span className="text-sm leading-relaxed">
              A friendly tool to share music with friends And to discover new
              music Using Spotify, Youtube, and Soundcloud
            </span>
          </div>
          <div className="m-auto w-1/2">Test</div>
        </div>
      </div> */}

      <div class="relative ">
        <div class="relative container m-auto px-6 text-base-content md:px-12 xl:px-40">
          <div class="m-auto w-full">
            <div class="rounded-xl bg-base-200 shadow-xl">
              <div class="p-6 sm:p-16 w-full">
                <div class="space-y-4">
                  <Image
                    src="/png/logo-no-background.png"
                    width={200}
                    height={200}
                    alt="Amicus logo"
                  />
                  <h2 class="mb-8 text-2xl text-primary font-bold">
                    Sign in to unlock the <br /> best of Amicus.
                  </h2>
                  <span className="text-sm leading-relaxed text-base-content">
                    A friendly tool to share music with friends And to discover
                    new music Using Spotify, Youtube, and Soundcloud
                  </span>
                </div>
                <div class="mt-16 grid space-y-4">
                  <button
                    class="group h-12 px-6 border-2 border-neutral rounded-full transition duration-300
 hover:border-primary focus:bg-primary-focus"
                  >
                    <div class="relative flex items-center space-x-4 justify-center">
                      <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        class="absolute left-0 w-5"
                        alt="google logo"
                      />
                      <span class="block w-max font-semibold tracking-wide text-base-content text-sm transition duration-300 group-hover:text-primary sm:text-base">
                        Continue with Google
                      </span>
                    </div>
                  </button>
                  <button
                    class="group h-12 px-6 border-2 border-neutral rounded-full transition duration-300
                    hover:border-primary focus:bg-primary-focus"
                  >
                    <div class="relative flex items-center space-x-4 justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="absolute left-0 w-5 text-gray-700"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <span class="block w-max font-semibold tracking-wide text-base-content text-sm transition duration-300 group-hover:text-primary sm:text-base">
                        Continue with Github
                      </span>
                    </div>
                  </button>
                  <button
                    class="group h-12 px-6 border-2 border-neutral rounded-full transition duration-300
                    hover:border-primary focus:bg-primary-focus"
                  >
                    <div class="relative flex items-center space-x-4 justify-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                        class="absolute left-0 w-5"
                        alt="Facebook logo"
                      />
                      <span class="block w-max font-semibold tracking-wide text-base-content text-sm transition duration-300 group-hover:text-primary sm:text-base">
                        Continue with Facebook
                      </span>
                    </div>
                  </button>
                </div>

                <div class="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p class="text-xs">
                    By proceeding, you agree to our{' '}
                    <a href="#" class="underline">
                      Terms of Use
                    </a>{' '}
                    and confirm you have read our{' '}
                    <a href="#" class="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                  <p class="text-xs">
                    This site is protected by reCAPTCHA and the{' '}
                    <a href="#" class="underline">
                      Google Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" class="underline">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
