import React from 'react'
import Layout from '../_layout'


export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	return (
		<Layout>
			<section>
				<article className='flex flex-col gap-14'>
					<h1 className='pt-10 text-center text-lg font-medium'>Recent Memorie</h1>
					<div className='w-full h-96 rounded-md border-2 border-shadow overflow-hidden'>
						<img className='w-full h-full object-cover' src="https://source.unsplash.com/random/" alt="" />
					</div>
				</article>
			</section>
		</Layout>
	)
}

export default Home

