// import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/classComponents/Welcome';
import Message from './components/classComponents/Message';
import Count from './components/classComponents/Count';
import FunctionClick from './components/eventHandling/FunctionClick';
import ClassClick from './components/eventHandling/ClassClick';
import EventBind from './components/eventHandling/EventBind';
import ParentComponent from './components/methodAsProps/ParentComponent';
import UserGreeting from './components/conditionalRendering/UserGreeting';
import NameList from './components/listRendering/NameList';
import Form from './components/formHandling/Form';
import LifeCycleA from './components/lifecycleMethodClassComponent/LifeCycleA';
import ParentComp from './components/pureComponent/ParentComp';
import MemoParentComponent from './components/memo/ParentComponent';
import RefsDemo from './components/refs/RefsDemo';
import FocusInput from './components/refs/FocusInput';
import FRParentInput from './components/refs/FRParentInput';
import PortalDemo from './components/portals/PortalDemo';
import Hero from './components/errorBoundary/Hero';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import ClickCounter from './components/higherOrderCompoents/ClickCounter';
import HoverCounter from './components/higherOrderCompoents/HoverCounter';
import ClickCounterTwo from './components/renderProps/ClickCounterTwo';
import HoverCounterTwo from './components/renderProps/HoverCounterTwo';
import User from './components/renderProps/User';
import RenderCounter from './components/renderProps/renderCounter';
import ComponentC from './components/context/ComponentC';
import { UserProvider } from './components/context/UserContext';
import PostList from './components/http/PostList';
import PostForm from './components/http/PostForm';
import Hook from './components/hooks/Hook';
function App() {
  return (
    <div className="App">
      <section
      id='functional'
      >
        <h1>Functional Component</h1><hr/>
        <div className='center'>
        <Greet name="Bruce" heroName="Batman">
          <p>This is children Props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman"/>
        <Greet name="Diana" heroName="Wonder Woman"/>
        </div>
      </section>
      <section id='classComponent'>
        <h1>Class Component</h1><hr/>
        <div className='center'>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/>
        </div>
      </section>

      <section id='state'>
        <h1>State in class components</h1><hr/>
        <br/>
        <div className='center'>
          <Message/>
        </div>
        <h1>setStaet in Class Component</h1><hr/>
        <div className='center'>
          <Count addValue={2}/>
        </div>
      </section>
      <section id='eventHandling'>
        <h1>Event handling</h1><hr/>
        <div className='center'>
          <FunctionClick/>
          <ClassClick/>
        </div>
        <h2>Event Binding</h2><hr/>
        <div className='center'>
          <EventBind/>
        </div>
      </section>

      <section id='propsMethod'>
        <h1>Method as Props</h1><hr/>
        <div className='center'>
          <ParentComponent/>
        </div>
      </section>
      
      <section id='conditionalRendering'>
        <h1>Conditional Rendering</h1><hr/>
        <div className='center'>
          <UserGreeting/>
        </div>
      </section>

      <section id='listRendering'>
        <h1>List Rendering</h1><hr/>
        <div className='center'>
          <NameList/>
        </div>
      </section>

      <section id='formHandling'>
        <h1>Form handling</h1><br/>
        <div className='center'>
          <Form/>
        </div>
      </section>
      
      <section id='classLifeCycle'>
        <h1>Class Component LifeCycle Methods</h1>
        <ul>
          <li>Mounting</li>
          <p>When a instance of a component is being created and inserted in the DOM</p>
          <li>Updating</li>
          <p>When anc component is being re-rendered as a result  of changes to either its props or state.</p>
          <li>Unmounting</li>
          <p>When a component is being removed from the DOM.</p>
          <li>Error handling</li>
          <p>When there is an error during rendering, in a lifecycle method, or in the constructor of any child component.</p>
        </ul>

        <section id='mounting'>
        <h1>Mounting</h1><hr/>
        <div className='center'>
          <LifeCycleA/>
        </div>
        </section>
      </section>

      <section id='pureComponent'>
        <h1>Pure Component</h1><hr/>
        <div className='center'>
          <ParentComp/>
        </div>
      </section>

      <section id='memo'>
        <h1>Memo</h1><hr/>
        <div className='center'>
          <MemoParentComponent/>
        </div>
      </section>

      <section id='refs'>
        <h1>Refs</h1>
        <div className='center'>
          <RefsDemo/>
        </div>
        <h1>Custom Ref</h1>
        <FocusInput/>

        <h1>Forwarding Refs</h1>
        <FRParentInput/>
      </section>
      <section id='portals'>
        <h1>Portals</h1>
        <PortalDemo/>
      </section>

      <section id='errorHandling'>
        <h1>Error Boundary</h1>
        <ErrorBoundary>
        <Hero heroname={'batman'}/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname={'joker'}/>
        </ErrorBoundary>
      </section>
      <section id='HOC'>
        <h1>Higher Order Components</h1>
        <div className='center'>
          <ClickCounter/>
          <HoverCounter/>
        </div>
      </section>
      <section id='renderProps'>
        <h1>Render Props</h1><hr/>
        <div className='center'>
          {/* <ClickCounterTwo/>
          <HoverCounterTwo/>
          <User render={(isLoggedIn)=>isLoggedIn?'Deepak':'Guest'}/> */}
          <RenderCounter  render={(count,incrementCount)=><ClickCounterTwo count={count} incrementCount={incrementCount}/>}/>
          <RenderCounter  render={(count,incrementCount)=><HoverCounterTwo count={count} incrementCount={incrementCount}/>}/>
        </div>
      </section>

      <section id='context'>
        <h1>COntext</h1><hr/>
        <div className='center'>
          <UserProvider value={'Deepak'}>
          <ComponentC/>
          </UserProvider>
        </div>
      </section>

      <section id='http'>
        <h1>Http | Axios</h1><hr/>
        <div className='center'>
          <PostList/>
          <PostForm/>
        </div>
      </section>

      <section id='hooks'>
        <h1>React Hooks</h1><hr/>
        <Hook/>
      </section>
    </div>
  );
}

export default App;
