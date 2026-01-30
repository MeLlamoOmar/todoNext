'use client'

import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "./ui/empty";
import { authClient } from "@/lib/auth/authClient";

const NotLogIn = () => {
  const handleGithub = async () => {
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: '/dashboard'
    });
  }

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <User />
        </EmptyMedia>
        <EmptyTitle>Not Signed Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t signed in to create any Tasks yet. Get started by
          login in.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-col justify-center gap-2">
        <Button onClick={handleGithub}>
          <SiGithub /> Sign in with Github
        </Button>
        <Button className="bg-[#4285F4]">
          <SiGoogle /> Sign in with Google
        </Button>
      </EmptyContent>
    </Empty>
  );
}

export default NotLogIn