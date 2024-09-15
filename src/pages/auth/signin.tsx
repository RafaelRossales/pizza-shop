import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import {useForm } from 'react-hook-form'
import { toast } from 'sonner'

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {

  const { register, handleSubmit, formState:{isSubmitting}} =useForm<SignInForm>()

async  function handleSignIn(data:SignInForm){
  // implement your sign in logic here
  console.log(data) // log the form data to the console for demonstration purposes. Replace with your own sign in logic.

  toast.success('Enviamos um link de autenticação para o seu email',{
    action:{
      label:'Reenviar',
      onClick:()=> handleSignIn(data)
    }
  })
}
  return (
    <>
      <Helmet title="Login"/>
      <div className='p-8'>
          <Button variant="link" className="absolute right-8 top-8">
            <Link to='/sign-up' >
              Novo estabelecimento
            </Link>
          </Button>
        <div className='w-[320px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Acessar Painel</h1>
            <p className='text-sm text-muted-foreground'>Acompanhe suas vendas pelo painel do parceiro</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-email</Label>
              <Input id="email"  {...register('email')}/>
            </div>
            <Button disabled={isSubmitting} className='w-full' type='submit'>Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
 