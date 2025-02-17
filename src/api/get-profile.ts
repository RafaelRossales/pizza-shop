import { api } from '@/lib/axios'


interface GetProfileResponse{
    id:string,
    name:string
    email:string
    phone:string
    role:"manager" | "customer",
    createdAt: Date | null
    updateddAt: Date | null
}

export async function getProfile():Promise<GetProfileResponse>{
   const response = await api.get('/me');
    return response.data
}