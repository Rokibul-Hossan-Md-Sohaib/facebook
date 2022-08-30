import React from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import Newsfeed from './Newsfeed/Newsfeed';
import RightSidebar from './RightSidebar/RightSidebar';
import RightSideBox from './RightSidebar/RightSideBox';

const Dashboard = () => {

    return (
        <>
        <div class="flex mb-4">
  <div class="w-1/4 ">
<LeftSidebar/>

  </div>
  <div class="w-1/2">
  <Newsfeed/>
  </div>
  <div class="w-1/4 ">
  <RightSidebar  />
       

  </div>
</div>
        </>
    );
};

export default Dashboard;