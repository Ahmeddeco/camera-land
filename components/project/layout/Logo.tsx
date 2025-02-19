import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link href={'/'}>
			<h1 className='uppercase text-xl font-black text-foreground'>
				photo<span className='text-yellow-400'>land</span>
			</h1>
		</Link>
	)
}

export default Logo
