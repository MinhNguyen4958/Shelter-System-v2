import { useState } from 'react';
import { useRouter } from 'next/router';

// A form for displaying a post from the data base
// Includes a delete and publish button
export default function PostCard({ post}) {
    return (
        <div>
            <h1>Welcome to the shelter</h1>
        </div>
        // <>
        //     <li>
        //         <h3>{post.title}</h3>
        //         <p>{post.content}</p>
        //         <small>{new Date(post.createdAt).toLocaleDateString()}</small>
        //         <br />
        //             <button type="button">
        //                 {'Publish'}
        //             </button>
        //         <button type="button">
        //             {'Delete'}
        //         </button>
        //     </li>
        // </>
    )
}