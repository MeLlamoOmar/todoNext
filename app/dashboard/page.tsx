import EmptyTaskList from '@/components/EmptyTaskList';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { auth } from '@/lib/auth/auth';

import db from '@/lib/db';
import { Task } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

const Dashboard = async () => {
  const CreateTask = async (formData: FormData) => {
    'use server';

    const taskName = formData.get('task')?.toString();
    if (!taskName) return;

    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) return;

    await db.insert(Task).values({
      id: crypto.randomUUID(),
      title: taskName,
      userId: session.session.userId,
    });

    revalidatePath('/dashboard');
  };

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) return;

  const results = await db
    .select()
    .from(Task)
    .where(eq(Task.userId, session.session.userId));

  return (
    <div className="flex flex-col h-screen py-5 justify-start items-center">
      <form action={CreateTask}>
        <Field>
          <FieldLabel htmlFor="task">Task Name</FieldLabel>
          <Input
            id="task"
            name="task"
            type="text"
            placeholder="Ej: Make Dinner"
          />
          <Button size={'lg'}>Add</Button>
        </Field>
      </form>
      <Separator className="mt-5" />
      <ul>
        {results.length <= 0 && <EmptyTaskList />}
        {results && results.map((task) => <li key={task.id}>{task.title}</li>)}
      </ul>
    </div>
  );
};

export default Dashboard;
