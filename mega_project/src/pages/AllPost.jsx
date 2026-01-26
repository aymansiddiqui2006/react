import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../component'
import Service from '../appwrite/conf'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Service.getPosts().then((response) => {
            if (response) {
                setPosts(response.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
