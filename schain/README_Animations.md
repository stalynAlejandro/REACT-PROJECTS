# Components
```
import React from "react";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

export default () => (
  <>
    {/* animate individual element. */}
    <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
      <h1>React simple animate</h1>
    </Animate>
    
    {/* animate keyframes with individual element. */}
    <AnimateKeyframes
      play
      iterationCount="infinite"
      keyframes={["opacity: 0", "opacity: 1"]}
    >
      <h1>React simple animate with keyframes</h1>
    </AnimateKeyframes>
    
    {/* animate group of animation in sequences */}
    <AnimateGroup play>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
        first
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
        second
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
        third
      </Animate>
    </AnimateGroup>
  </>
);
```

# Hooks
```
import react from 'react';
import { useAnimate, useAnimateKeyframes, useAnimateGroup } from 'react-simple-animate';

export const useAnimateExample = () => {
  const { style, play } = useAnimate({ start: { opacity: 0 }, end: { opacity: 1 } });
  useEffect(() => play(true), []);
  
  return <div style={style}>useAnimate</div>;
};

export const useAnimateKeyframesExample = () => {
  const { style, play } = useAnimateKeyframes({ 
    keyframes: ['opacity: 0', 'opacity: 1'], 
    iterationCount: 4 
  });
  useEffect(() => play(true), []);
  
  return <div style={style}>useAnimate</div>;
};

export const useAnimateGroup = () => {
  const { styles = [], play } = useAnimateGroup({
    sequences: [
      { start: { opacity: 1 }, end: { opacity: 0 } },
      { start: { background: "red" }, end: { background: "blue" } }
    ]
  });
  useEffect(() => play(true), []);

  return {styles.map(style => <div style={style}>useAnimateGroup</div>)};
};
```