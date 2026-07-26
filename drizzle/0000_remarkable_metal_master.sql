CREATE TABLE `leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`jail_location` text,
	`inquiry_type` text DEFAULT 'general_bail',
	`status` text DEFAULT 'new',
	`notes` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
