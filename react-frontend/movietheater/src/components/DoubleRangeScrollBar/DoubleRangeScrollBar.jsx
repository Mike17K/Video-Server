import React, { useEffect, useState } from "react";
import "./doubleRangeBar.css";

const DoubleRangeScrollBar = (props) => {
  /*
  This component is a double scrollbar.
  props: 
    min: minimum value number
    max maximum value number
    step: step between values number
    forid: string of id of an element we want to display the range of values selected
    className: add string of external classes
  */
  const [inputFrom, setInputFrom] = useState(props.min);
  const [inputTo, setInputTo] = useState(props.max);

  useEffect(() => {
    const targetDisplay = document.querySelector(`#${props.forid}`);
    targetDisplay.innerHTML = `${inputTo > inputFrom ? inputFrom : inputTo}-${
      inputTo > inputFrom ? inputTo : inputFrom
    }`;
    const slider = document.querySelector(
      `#double-range-scroll-bar-${props.forid} .range-selected`
    );
    slider.style.left = `${
      inputTo > inputFrom
        ? ((inputFrom - props.min) / (props.max - props.min)) * 100
        : ((inputTo - props.min) / (props.max - props.min)) * 100
    }%`;
    slider.style.right = `${
      100 -
      (inputTo > inputFrom
        ? ((inputTo - props.min) / (props.max - props.min)) * 100
        : ((inputFrom - props.min) / (props.max - props.min)) * 100)
    }%`;
  }, [inputFrom, inputTo, props]);

  return (
    <div class={`${props.className} my-auto`}>
      <div class="w-full h-full" id={`double-range-scroll-bar-${props.forid}`}>
        <div class="range-slider">
          <span class="range-selected"></span>
        </div>
        <div class="range-input">
          <input
            type="range"
            onChange={(e) => setInputFrom(Number(e.target.value))}
            class="min"
            min={props.min}
            max={props.max}
            step={props.step || 1}
            defaultValue={`${props.min}`}
          />
          <input
            type="range"
            onChange={(e) => setInputTo(Number(e.target.value))}
            class="max"
            min={props.min}
            max={props.max}
            step={props.step || 1}
            defaultValue={`${props.max}`}
          />
        </div>
      </div>
    </div>
  );
};

export { DoubleRangeScrollBar };
