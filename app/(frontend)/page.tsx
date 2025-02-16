import { ModeToggle } from '@/components/themeToggle'
import { Button } from '@/components/ui/button'

export default function HomePage() {
	return (
		<div className='flex flex-col gap-4 items-center justify-center h-screen'>
			<ModeToggle/>
      <div className="bg-yellow-400 size-40 hover:animate-shake"></div>
      <div className="bg-foreground size-40"></div>
      <h1 className="text-4xl font-black ">Home Page</h1>
		</div>
	)
}
