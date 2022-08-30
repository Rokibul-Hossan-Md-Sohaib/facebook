import React from 'react';
import MyPost from './MyPost/MyPost';
import Post from './Post/Post';
import Stories from './Stories/Stories';

const Newsfeed = () => {
    return (
        <div className='flex-grow h-screen'>
          <Stories/>
          <MyPost/>
          <Post/>
        </div>
    );
};

export default Newsfeed;