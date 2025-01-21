import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { Dialog, DialogTrigger } from './ui/dialog'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/get-profile.ts'
import { getManagedRestaurant } from '@/api/get-managed-restaurant.ts'
import { StoreProfileDialog } from '@/components/store-profile-dialog.tsx'

export default function AccountMenu() {

    const { data:profile , isLoading:isLoadingProfile} = useQuery({
        queryKey:['profile'],
        queryFn:getProfile
    })

    const { data:managedRestaurant, isLoading:isLoadingManagedRestaruant } = useQuery({
        queryKey:['managed-restaurant'],
        queryFn:getManagedRestaurant,
        staleTime:Infinity,
    })

  return (
    <Dialog>
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className='flex items-center gap-2 select-none'>
                {isLoadingManagedRestaruant ? (
                    <Skeleton className="h-4 w-4"/>
                ) : managedRestaurant?.name }
                <ChevronDown className='w-4 h-4'/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-56'>
            <DropdownMenuLabel className='flex flex-col'>
                {isLoadingProfile ? (
                    <div className="space-y-1.5">
                        <Skeleton className="h-4 w-32"/>
                        <Skeleton className="h-3 w-24"/>
                    </div>
                ):(
                    <>
                <span>{profile?.name}</span>
                    <span className='text-xs font-normal text-muted-foreground'>
                    {profile?.email}
                </span>
                </>
                )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DialogTrigger asChild>
            <DropdownMenuItem>
                <Building className='w-4 h-4 mr-2'/>
                <span>Perfil da loja</span>
            </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem className='text-rose-500 dark:text-rose-400'>
                <LogOut className='w-4 h-4 mr-2'/>
                <span>Sair</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    <StoreProfileDialog/>
    </Dialog>
  )
}
