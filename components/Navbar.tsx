import { cookies } from 'next/headers';
import AvatarButton from './AvatarButton'

const Navbar = async () => {
  const cookieStore = await cookies()
  const session = await cookieStore.get('better-auth.session_token');
  return (
    <div className="flex justify-between items-center bg-gray-200 py-3 px-5">
      <h1 className="font-bold text-2xl">Task Manager</h1>
      {session && <AvatarButton />}
    </div>
  );
}

export default Navbar