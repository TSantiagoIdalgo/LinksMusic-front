import z from 'zod';

export const urlSchema = z.object({
  url: z.string()
}).refine(data => data.url.split('v=')[0] === 'https://www.youtube.com/watch?' || data.url.split('v=')[0] === 'music.youtube.com/watch?' || data.url.split('/')[2] === 'youtu.be', {
  message: 'Invalid youtube url',
  path: ['url']
});

export type Url = z.infer<typeof urlSchema>;