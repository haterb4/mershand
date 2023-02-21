import styles from './page.module.css'; 
import { useWindowPosition } from '@/hooks/useScrool';
import PostCard from '@/components/post/PostCard';
import NewClientPostCard from '@/components/post/NewClientPostCard';
import ListGroups from '@/components/ListGroups';
import PreferencesList from '@/components/PreferencesList';
import RecentProductList from '@/components/product/RecentProductList';
import preferences from '@/datas/preferences'

export default function Home() {
  return (
    <main className='m-auto mt-0 w-full h-full flex justify-center items-start px-24'>
      <div className='w-[286px] flex flex-col justify-start items-center mr-12'>
        <ListGroups />
        <PreferencesList preferences={preferences}/>
        <div className='w-full h-[764px] bg-white  radius mt-8'></div>
      </div>
      <div className='w-[600px]'>
        <NewClientPostCard /> 
        <PostCard spiner={true}/>
        <PostCard />
        <PostCard spiner={true}/>
        <PostCard spiner={true}/>
        <PostCard spiner={true}/>
        <PostCard spiner={true}/>
      </div>
      <div className='w-[350px] ml-12 flex flex-col justify-start items-center'>
        <RecentProductList />
      </div>
    </main>
  )
}
