import React from 'react';


import ClickCounter from '../../common/hoc/ClickCounter';
import HoverCounter from '../../common/hoc/HoverCounter';
import Conditional from '../../common/education/conditionalRendering/Conditional';
import Lifecycle from '../../common/education/Lifecycle/Lifecycle';
import ErrorBoundary from '../../common/education/Lifecycle/ErrorBoundary';
import Portal from '../../common/education/Portal/Portal';
import RenderProps from '../../common/education/renderProps/RenderProps';
import Counter from '../../common/education/renderProps/Counter';
import ClickCounterTwo from '../../common/education/renderProps/ClickCounterTwo';
import HoverCounterTwo from '../../common/education/renderProps/HoverCounterTwo';
import GetData from '../../common/education/HTTP/GetData';
import Post from '../../common/education/HTTP/Post';
import Delete from '../../common/education/HTTP/Delete';
import UseStateComponent from '../../common/education/Hooks/useStateComponent/useStateComponent';
import UseEffectComponent from '../../common/education/Hooks/useEffectComponent/UseEffectComponent';
import UseReducerComponent from '../../common/education/Hooks/useReducerComponent/UseReducerComponent';
import UseReducerFetchingData from '../../common/education/Hooks/useReducerComponent/UseReducerFetchingData';
import UseCallbackComponent from '../../common/education/Hooks/useCallbackComponent/UseCallbackComponent';
import UseMemoComponent from '../../common/education/Hooks/useMemoComponent/UseMemoComponent';
import UseRefComponent from '../../common/education/Hooks/useRefComponent/UseRefComponent';
import UseCustomeComponent from '../../common/education/Hooks/useCustomeComponent/UseCustomeComponent';
import UseCustomeComponentTwo from '../../common/education/Hooks/useCustomeComponent/UseCustomeComponentTwo';
import CakeStore from '../../common/education/Redux/CakeStore';
import CakeStoreHooks from '../../common/education/Redux/CakeStoreHooks';
import UserContainerAsync from '../../common/education/Redux/UserContainerAsync';
import PostsContainer from '../../common/education/Redux/PostsContainer';
import AddingPost from '../../common/education/Redux/AddingPost';






const Test = () => {
  return (
    <div className="container">
        <div className="row p-5">
          <div className="col-12">

                {/* <ClickCounter/>
                <HoverCounter/>
                
                <Lifecycle count = {5} />
                <ErrorBoundary>
                  <Conditional/>
                </ErrorBoundary>
                <Portal><h2>My children</h2></Portal>
                <RenderProps render={(isLoggedIn) => isLoggedIn ? 'Andrii' : 'Gest'} />

                <Counter>
                  {(count, incrementCount) =>(
                    <ClickCounterTwo count ={count} incrementCount={incrementCount} />
                  )}
                </Counter>
                <Counter>
                  {(count, incrementCount) =>(
                    <HoverCounterTwo count ={count} incrementCount={incrementCount} />
                  )}
                </Counter>
                <GetData/>
                <Post/>
                <Delete/> */}

                {/* <UseStateComponent /> */}

                {/* <UseEffectComponent/> */}

                {/* <UseReducerComponent /> */}

                {/* <UseReducerFetchingData /> */}

                {/* <UseCallbackComponent /> */}

                {/* <UseMemoComponent /> */}

                {/* <UseRefComponent/> */}

                {/* <UseCustomeComponent/>
                <UseCustomeComponentTwo/> */}

                {/* <CakeStore/> */}

                {/* <CakeStoreHooks/> */}

                {/* <UserContainerAsync/> */}

                {/* <PostsContainer/>

                <AddingPost /> */}

                {/* <GetData/> */}
                {/* <Post/> */}

                <Delete />
            
          </div>
      </div>
    </div>
  );
};

export default Test;
