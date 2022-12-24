import type { FC } from 'react';

interface LocationlistProps { }


export const Locationlist: FC<LocationlistProps> = () => {

	const collections = [
		{
			name: 'Bni Mtir',
			href: '#',
			imageSrc: 'https://carthagemagazine.com/wp-content/uploads/2020/09/Bni-Mtir.jpg',
			imageAlt: '',
			description: 'A popular camping attraction, Bnir Mtir is a small town located in Ain Drahem, Jendouba. It is quite known for camping lovers.',
		},
		{
			name: 'Kef Abed',
			href: '#',
			imageSrc: 'https://images.unsplash.com/flagged/photo-1575537879718-5c43dd9206c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
			imageAlt: '',
			description: 'Everything’s just beautiful about Kef Abed – the night sky, and the relaxing ambience. Camping there is a once in a lifetime experience.',
		},
		{
			name: 'Cape Serrat',
			href: '#',
			imageSrc: 'https://carthagemagazine.com/wp-content/uploads/2020/09/Cape-Serrat.jpg',
			imageAlt: '',
			description: 'Cape Serrat is truly one of Tunisia’s hidden gems; not many know that you can easily pick up a tent and go camp there. It’s probably the most gorgeous part of the Bizerte coastline.',
		},
	]

	return (

		<section
			aria-labelledby="collection-heading"
			className="mx-auto max-w-xl px-4 pt-16 sm:px-6 lg:max-w-7xl lg:px-8 pb-20 mb-20 "
		>
			<h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
				Top 3 Best Places to Camp in Tunisia
			</h2>

			<div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
				{collections.map((collection) => (
					<a key={collection.name} href={collection.href} className="group block">
						<div
							aria-hidden="true"
							className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
						>
							<img
								src={collection.imageSrc}
								alt={collection.imageAlt}
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
						<p className="mt-2 text-sm text-gray-500">{collection.description}</p>
					</a>
				))}
			</div>
		</section>)
}