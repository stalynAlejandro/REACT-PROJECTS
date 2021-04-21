import './App.css';
import { Dispatch, SetStateAction, useState } from 'react'
import { Animate } from 'react-simple-animate'

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

        {/* <HookOptions /> */}
      </div>
    </div>
  );
}

export default App;
