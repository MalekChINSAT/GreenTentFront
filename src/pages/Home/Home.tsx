import type { FC } from 'react';
import { HomeImage } from '@/assets/images';

interface HomeProps { }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: FC<HomeProps> = () => {
  return (
    <>
    {/*SECTION 1*/}
    <section className="px-2 py-20 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline text-[#043e53]">Camping Starts </span>
                <span className="block text-[#D56D2E] xl:inline">Here.</span>
              </h1>
              <p className="mx-auto text-base font-medium text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Discover and book the best campgrounds, tent camping, cabins and more.</p>
              <button className="relative flex flex-col sm:flex-row sm:space-x-4">
                <a href="#section2" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#043E53] rounded-md sm:mb-0 hover:bg-[#A2B699] sm:w-auto">
                  Plan your next adventure
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="animate-bounce w-5 h-5 ml-2">
                    <path d="M2.879 7.121A3 3 0 007.5 6.66a2.997 2.997 0 002.5 1.34 2.997 2.997 0 002.5-1.34 3 3 0 104.622-3.78l-.293-.293A2 2 0 0015.415 2H4.585a2 2 0 00-1.414.586l-.292.292a3 3 0 000 4.243zM3 9.032a4.507 4.507 0 004.5-.29A4.48 4.48 0 0010 9.5a4.48 4.48 0 002.5-.758 4.507 4.507 0 004.5.29V16.5h.25a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5H3V9.032z" />
                  </svg>
                </a>
              </button>

            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src={HomeImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Section 2*/}
    <section id="section2" className="px-2 py-24 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      </div>
    </section>
    </>
  )
}

export default Home;
