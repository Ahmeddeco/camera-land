import SearchBar from '@/components/project/SearchBar'
import { ModeToggle } from '@/components/theme/themeToggle'
import { Button } from '@/components/ui/button'

export default function HomePage() {
	return (
		<div className='flex flex-col gap-4 items-center justify-center h-screen'>
			<ModeToggle />
			<SearchBar />
		</div>
	)
}
