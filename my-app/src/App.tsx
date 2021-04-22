import './App.css';
import { Dispatch, SetStateAction, useState } from 'react'
import { Animate } from 'react-simple-animate'
import { UseEffectComponent } from './components/UseEffectComponent'
import UseCallBackComponent from './components/UseCallBackComponent';
import UseContextComponent from './components/UseContextComponent';
import UseImperativeHandlerComponent from './components/UseImperativeHandlerComponent';
import UseMemoComponent from './components/UseMemoComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import UseStateComponent from './components/UseStateComponent'

const HOOKS = {
  useState: 'useState',
  useEffect: 'useEffect',
  useContext: 'useContext',
  useReducer: 'useReducer',
  useCallBack: 'useCallBack',
  useMemo: 'useMemo',
  useRef: 'useRef',
  useImperativeHandler: 'useImperativeHandler',
  useLayoutEffect: 'useLayoutEffect',
  useDebugValue: 'useDebugValue'
}

interface IHookExplained {
  selected: string
}

const HookExplained = (args: IHookExplained) => {
  return (
    <div className="hooksContainer">
      <h2 className="hooks-title">
        {args.selected}
      </h2>
      {args.selected === HOOKS.useState && <UseStateComponent />}
      {args.selected === HOOKS.useEffect && <UseEffectComponent />}
      {args.selected === HOOKS.useCallBack && <UseCallBackComponent />}
      {args.selected === HOOKS.useContext && <UseContextComponent />}
      {args.selected === HOOKS.useImperativeHandler && <UseImperativeHandlerComponent />}
      {args.selected === HOOKS.useMemo && <UseMemoComponent />}
      {args.selected === HOOKS.useReducer && <UseReducerComponent />}
      {args.selected === HOOKS.useRef && <UseRefComponent />}
    </div>
  )
}


interface IHookOptions {
  title: string,
  selected: string,
  setSelected: Dispatch<SetStateAction<string>>
}

const HookOptions = (args: IHookOptions) => {
  return (
    <div className="hooksContainer">
      <h2 className="hooks-title">{args.title}</h2>
      <ul className="hooks-list">
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useState)}>{HOOKS.useState}</a></li>
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useEffect)}>{HOOKS.useEffect}</a></li>
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useContext)}>{HOOKS.useContext}</a></li>
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useReducer)}>{HOOKS.useReducer}</a></li>
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useCallBack)}>{HOOKS.useCallBack}</a></li>
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useMemo)}>{HOOKS.useMemo}</a></li>
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useRef)}>{HOOKS.useRef}</a></li>
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useImperativeHandler)}>{HOOKS.useImperativeHandler}</a></li>
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useLayoutEffect)}>{HOOKS.useLayoutEffect}</a></li>
        <li className="hook-item"><a onClick={() => args.setSelected(HOOKS.useDebugValue)}>{HOOKS.useDebugValue}</a></li>
      </ul>
    </div>
  )
}

const HeadBar = ({ text }: { text: string }) => {
  return (
    <div className="head-bar">
      <Animate play duration={2} start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <h1 className="title">
          {text}
        </h1>
      </Animate>
    </div>
  )
}

function App() {

  const [selectedHook, setselectedHook] = useState<string>(HOOKS.useState)
  console.log(selectedHook)
  return (
    <div className="App">
      <HeadBar text="React Hooks Explained" />
      <div className="contentContainer">
        <HookOptions title={"Hooks"} selected={selectedHook} setSelected={setselectedHook} />
        <HookExplained selected={selectedHook} />
      </div>
    </div>
  );
}

export default App;
