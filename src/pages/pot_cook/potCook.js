import React, { useState } from 'react';
import { Tooltip, Progress } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { set, decrement, selectTotal, selectSecs } from './cookSlice';

const PotCook = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center' }}>
      <ProgressBar />
      <button style={{ marginTop: '100px' }} onClick={() => startTimer(dispatch)}>Hola</button>
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
    <div style={{ marginTop: '200px' }}>
      <Marker emoji="🍠" seconds="0" total={total} />
      <Marker emoji="🍖" seconds="20" total={total} />
      <Progress
        trailColor="#B7CACD"
        strokeColor="#9AE2EE"
        strokeWidth="25px"
        status={"normal"}
        showInfo={false}
        percent={(seconds / total) * 100}
        style={{ width: "60%" }} />
    </div>
  )
}

const Marker = (props) => {
  const percentage = 20 + (60 * (props.seconds / props.total)) + '%'
  return (
    <div style={{ position: 'absolute', left: percentage , top: 180, zIndex: 10 }}>
      <Tooltip title={props.seconds}>
        {props.emoji}
      </Tooltip>
    </div>
  )
}

export default PotCook;
