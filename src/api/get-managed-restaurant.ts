import { api } from '@/lib/axios'


interface GetManagedRestaurantResponse{
    id:string,
    name:string
    createdAt: Date | null
    updateddAt: Date | null
    description:string | null,
    managerId:string | null
}

export async function getManagedRestaurant():Promise<GetManagedRestaurantResponse>{
   const response = await api.get('/managed-restaurant');
    return response.data
}