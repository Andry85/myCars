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

                <UseStateComponent />
            
          </div>
      </div>
    </div>
  );
};

export default Test;
