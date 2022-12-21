import type { FC } from 'react';

import Navbar from '@/components/navbar';
import { Outlet } from 'react-router-dom';
interface HomeProps { }

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const Home: FC<HomeProps> = () => {
	return (
	<>
	<Navbar />
	<main className="flex-1">
		<div className="py-4 bg-[rgb(235,233,223)] min-h-screen">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<Outlet />
			</div>
		</div>
	</main>
	</>
	)
}

export default Home;
