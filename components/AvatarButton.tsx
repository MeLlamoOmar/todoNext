'use client';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { authClient } from '@/lib/auth/authClient';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { redirect } from 'next/navigation';

const AvatarButton = () => {
  const { data } = authClient.useSession();

  const handleSignout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect('/');
        },
      },
    });
  };

  if (!data) return;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex px-2 py-1 items-center gap-3 cursor-pointer hover:bg-gray-300 rounded-sm">
          <Avatar>
            {data.user.image && <AvatarImage src={data.user.image} />}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm">{data.user.name}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleSignout}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarButton;
