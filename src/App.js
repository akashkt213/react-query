import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './api/api';
import PostLists from './components/PostLists';

function App() {
  const {data,isLoading}=useQuery({
    queryKey:["posts"],
    queryFn:fetchPosts
  })
  
  console.log(data,isLoading);

  return (
    <>
    <PostLists/>
    </>
  )
}

export default App