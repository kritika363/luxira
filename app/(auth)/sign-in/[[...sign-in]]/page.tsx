import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='h-screen flex justify-center align-middle'>
  <SignIn />
  </div>
  )
}