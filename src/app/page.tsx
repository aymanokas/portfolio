import { getMyAvatar } from '~/server/db/queries';

const avatarUrl = 'https://utfs.io/f/16ce36c1-c3e5-438e-a2e2-e6925074d428-f3g93q.jpg'


export const dynamic = "force-dynamic"

export default async function HomePage() {
  const avatar = await getMyAvatar()
  console.log('00000 : ', avatar)
  return (
    <main className=''>
      <img src={avatar?.url ?? avatarUrl} alt='avatar' className='rounded-full h-32 w-32' />
    </main>
  );
}
