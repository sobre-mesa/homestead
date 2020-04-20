import React, { useState } from 'react';
import { Tooltip, Progress } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { set, decrement, selectTotal, selectSecs} from './cookSlice';

const PotCook = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ProgressBar/>
      <button onClick={() => startTimer(dispatch)}>Hola</button>
    </div>
  )
}

function startTimer(dispatch) {
  setInterval(() => {
    dispatch(decrement())
  }, 1000);
}

const ProgressBar = (props) => {
  const seconds = useSelector(selectSecs);
  const total = useSelector(selectTotal);
  return (
    <div>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={(seconds/total) * 100} style={{ width: '60%' }} />
      </Tooltip>
    </div>
  )
}

export default PotCook;
