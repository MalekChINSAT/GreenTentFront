import type { FC } from 'react';

interface HomeProps { }

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export const SearchCamp: FC<HomeProps> = () => {


	return (
		<section id="section2" className="relative px-2 py-2 md:px-0">
			<div className="absolute -top-10 left-6 z-[9999] rounded-full text-sm border border-[#A2B699] bg-gray-50 container flex max-w-6xl mx-auto xl:px-5 space-x-4 p-8">

				<form>
					{/*<h5 className='text-xs uppercase mb-2'>Where to?</h5>*/}
					<label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-5 mr-2.5 pointer-events-none">
							<svg aria-hidden="true" className="w-5 h-5 dark:text-[#A2B699]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
						</div>


						<input type="search" id="default-search" className="rounded-full block w-full p-4 pl-12 text-sm border  bg-gray-50  border-[#A2B699]" placeholder="Where to?" required />
					</div>
				</form>

				<div date-rangepicker='true' className="flex items-center">
					<div className="relative">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
						</div>
						<input name="start" type="text" className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
					</div>
					<span className="mx-4 text-gray-500">to</span>
					<div className="relative">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg aria-hidden="true" className="w-5 h-5 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
						</div>
						<input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
					</div>
				</div>


				<form>
					{/*<h5 className='text-xs uppercase mb-2'>Where to?</h5>*/}
					<label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-5 mr-2.5 pointer-events-none">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 dark:text-[#A2B699]">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
							</svg>
						</div>
						<input className="rounded-full block w-full p-4 pl-12 text-sm border  bg-gray-50  border-[#A2B699]" placeholder="Add guests" required />
					</div>
				</form>
				<button type="submit" className="ml-6 inline-flex items-center rounded-full border border-transparent bg-[#A2B699] px-4 py-2 text-sm font-medium text-white
                      hover:text-[#1E293B] hover: border-[#A2B699] shadow-sm hover:bg-white hover:ring-[#A2B699] hover:ring-2 focus:outline-none focus:ring-2 focus:ring-[#A2B699] focus:ring-offset-2">
					<svg aria-hidden="true" className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

				</button>
			</div>

			<div className="bg-indigo-300 h-screen w-full rounded-full">
				<img className="object-cover h-screen w-full rounded-lg" src="https://images.unsplash.com/photo-1608942103455-14a983cff341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHVuaXNpYSUyMGNhbXB8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" />
			</div>




		</section>
	)
}