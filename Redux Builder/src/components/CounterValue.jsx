// src/components/CounterValue.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const counter = useSelector((state) => state.counter.counter);
  const theme = useSelector((state) => state.theme.theme);
  
  const themeClass = theme === 'light' ? 'light_theme' : 'dark_theme';

  return <div className={themeClass}>Counter Value: {counter}</div>;
};

export default CounterValue;

