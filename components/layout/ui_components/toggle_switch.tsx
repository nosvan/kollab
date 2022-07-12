import { animated, useSpring } from '@react-spring/web';
import { Dispatch, SetStateAction, useState } from 'react';

interface ToggleSwitchProps {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function ToggleSwitch(props: ToggleSwitchProps) {
  const toggleSpring = useSpring({
    left: !props.isChecked ? '0' : '50%',
    config: { duration: 250 },
  });
  return (
    <label
      className={`${props.className} relative w-12 h-6 bg-stone-800 rounded-xl cursor-pointer`}
    >
      <input
        className="hidden"
        type="checkbox"
        defaultChecked={props.isChecked}
        onChange={() => props.setIsChecked(!props.isChecked)}
      />
      <animated.span
        style={toggleSpring}
        className={`w-1/2 h-full ${
          !props.isChecked
            ? 'bg-stone-700 border-stone-500'
            : 'bg-blue-700 border-blue-500'
        } border-2 absolute cursor-pointer rounded-xl`}
      />
    </label>
  );
}
