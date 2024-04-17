import Link from 'next/link';
import { db } from '~/server/db';

const avatarUrl = 'https://utfs.io/f/16ce36c1-c3e5-438e-a2e2-e6925074d428-f3g93q.jpg'


export const dynamic = "force-dynamic"

export default async function HomePage() {
  const images = await db.query.images.findMany()
  return (
    <main className=''>
      <img src={images[0].url} alt='avatar' className='rounded-full h-32 w-32' />
    </main>
  );
}
