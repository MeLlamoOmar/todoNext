CREATE TABLE `task` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`isCompleted` integer DEFAULT false,
	`createdAt` integer DEFAULT 1768789809064,
	`updatedAt` integer DEFAULT 1768789809064
);
