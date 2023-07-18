import { Inter } from 'next/font/google'
import HomePage from '@/components/HomePage'
import PostDetailPage from '@/components/PostDetailPage'
import UserDetailPage from '@/components/UserDetailPage'
import UserListPage from "../components/UserListPage";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <HomePage/>
   <PostDetailPage/>
   <UserDetailPage/>
   <UserListPage/>
   </>
  )
}
