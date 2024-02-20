import z from 'zod';

export const playlistSchema = z.object({
  tittle: z.string().min(1, { message: 'Tittle is required' }).max(50, { message: 'Tittle is too long' }),
  description: z.string().min(1, { message: 'Description is required' }).max(255, { message: 'Description is too long' })
});

export type Playlist = z.infer<typeof playlistSchema>;