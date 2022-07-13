import React from 'react';
import { GetRequestHooks } from './GetRequestHooks';
import { PostRequestHooks } from './PostRequestHooks';
import { PutRequestHooks } from './PutRequestHooks';
import { DeleteRequestHooks } from './DeleteRequestHooks';

function App() {
  return (
    <div>
      <h3 className="p-3 text-center">React HTTP POST Requests with Axios</h3>
      <PostRequestHooks />
      <PutRequestHooks />
      <GetRequestHooks />
      <DeleteRequestHooks />
    </div>
  );
}

export default App;