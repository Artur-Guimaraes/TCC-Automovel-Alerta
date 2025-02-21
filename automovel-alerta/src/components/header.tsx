import { Car, CarFront, HomeIcon, Wrench } from 'lucide-react'
import { Separator } from './ui/separator'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div className='border-b'>
      <div className='flex h-20 items-center gap-10 px-6'>
        <CarFront className='w-6 h-6'/>

        <Separator orientation='vertical' className='h-6'/>

        <nav className="flex items-center space-x-8 lg:space-x-10">
          <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <HomeIcon className="h-4 w-4" />
            Início
          </div>

          <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Car className="h-4 w-4" />
            Meus Veículos
          </div>

          <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Wrench className="h-4 w-4" />
            Manutenções
          </div>


          <div className="ml-auto flex items-center gap-2">
               <ThemeToggle />
               {/* <AccountMenu /> */}
            </div>
        </nav>
      </div>
    </div>
  )
}