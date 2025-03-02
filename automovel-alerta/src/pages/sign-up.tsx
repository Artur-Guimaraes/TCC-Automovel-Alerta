import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "lucide-react";

export function SignUp() {
  return (
    <>
       <div className='p-8'>
          <Button variant='outline' className='absolute right-8 top-8'>
             <Link to='/sign-in'>Fazer Login</Link>
          </Button>

          <div className='w-[350px] flex flex-col justify-center gap-6'>
             <div className='flex flex-col gap-2 text-center'>
                <h1 className='text-2xl font-semibold tracking-tight'>Criar conta grátis</h1>
                <p className='text-sm text-muted-foreground'>Seja um parceiro e comece suas vendas!</p>
             </div>

             <form className='space-y-4' >
                <div className='space-y-2'>
                   <Label htmlFor='email'>Nome do Estabelecimento</Label>
                   <Input
                      id='restaurantName'
                      type='text'
                   />
                </div>

                <div className='space-y-2'>
                   <Label htmlFor='email'>Seu nome</Label>
                   <Input
                      id='managerName'
                      type='text'
                   />
                </div>

                <div className='space-y-2'>
                   <Label htmlFor='email'>Seu e-mail</Label>
                   <Input
                      id='email'
                      type='email'
                   />
                </div>

                <div className='space-y-2'>
                   <Label htmlFor='email'>Seu telefone</Label>
                   <Input
                      id='phone'
                      type='tel'
                   />
                </div>

                <Button className='w-full' type='submit'>Finalizar cadastro</Button>

                <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
                   Ao continuar, você concorda com nossos
                   <a className='underline underline-offset-4 text-primary'> {' '} termos de serviço</a>
                   {' '} e {' '}
                   <a className='underline underline-offset-4 text-primary'>políticas de privacidade</a>.
                </p>
             </form>
          </div>
       </div>
    </>
 )
}