import { headers } from 'next/headers';
import AvatarButton from './AvatarButton'
import { auth } from '@/lib/auth/auth';

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  
  return (
    <div className="flex justify-between items-center bg-gray-200 py-3 px-5">
      <h1 className="font-bold text-2xl">Task Manager</h1>
      {session && <AvatarButton />}
    </div>
  );
}

export default Navbar