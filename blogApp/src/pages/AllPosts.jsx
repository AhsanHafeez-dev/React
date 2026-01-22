import { useEffect, useState } from 'react'
import appWriteService from '../appwrite/config'
import {PostCard,Container} from '../components/index'
export default function AllPosts() {
    const[posts,setPosts]=useState([])
  
    useEffect(() => {
        
        appWriteService.getPosts([]).then(psts => {
            console.log("post in all post page",psts);
            
            if (psts) { setPosts(psts.rows); }
        });

    }, [posts])
    
    return (
        <div className='py-8 2-full'>
            <Container>
                <div className='flex flex-wrap'>

                    
                {posts.map(
                    (post) =>
                        <div key={post.$id} className='p-2 w-1/4 '>
                            <PostCard  post={{...post}} />
                        </div>
                    )}
                    
                </div>
            </Container>
        </div>
    )
 }