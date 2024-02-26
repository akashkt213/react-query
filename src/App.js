import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './component/api';

function App() {
  const {data,isLoading}=useQuery({
    queryKey:["posts"],
    queryFn:fetchPosts
  })
  
  console.log(data,isLoading);

  return (
    <div>App</div>
  )
}

export default App