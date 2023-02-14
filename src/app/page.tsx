import styles from './page.module.css'; 
import { useWindowPosition } from '@/hooks/useScrool';
import PostCard from '@/components/post/PostCard';
import NewClientPostCard from '@/components/post/NewClientPostCard';

export default function Home() {
  return (
    <main className='m-auto mt-0 w-full h-full flex justify-center items-start px-24'>
      <div className='w-[286px] flex flex-col justify-start items-center mr-12'>
        <div className='w-full h-[464px] bg-white radius mt-8'></div>
        <div className='w-full h-[464px] bg-white radius mt-8'></div>
        <div className='w-full h-[764px] bg-white  radius mt-8'></div>
      </div>
      <div className='w-[550px]'>
        <NewClientPostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className='w-[286px] ml-12'>
        <div className='w-full h-[764px] bg-white  radius mt-8'></div>
      </div>
    </main>
  )
}
