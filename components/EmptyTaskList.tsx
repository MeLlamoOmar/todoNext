import { BookCheck } from 'lucide-react';
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from './ui/empty';

const EmptyTaskList = () => {
  return (
    <Empty className="justify-start">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BookCheck />
        </EmptyMedia>
        <EmptyTitle>Empty Tasks list</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any Tasks yet.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

export default EmptyTaskList;
