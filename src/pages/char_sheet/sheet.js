import React, { useState } from 'react';
import { PageHeader, Row, Col, InputNumber, Card, Typography } from 'antd';
const { Title, Text } = Typography;

const Sheet = () => {
  return (
    <div className="character-sheet">
      <Row className="title-row">
        <Title className="title"> Nico </Title>
      </Row>
      <hr />
      <Stats />
    </div>
  )
}
const Stats = () => {
  let stats = {
    str: 5,
    int: 5,
    agl: 5,
    char: 5,
    const: 5
  }
  console.log(Object.entries(stats))
  return (
    <div className="stats">
    { Object.entries(stats).map(StatPair) }
    </div>
  )
}

const StatPair = ([name, value]) => {
  return (
    <Row className="stat-pair" key={name}>
      <Col className="stat-name">
        {name} :
      </Col>
      <Col className="stat-value">
        {value}
      </Col>
    </Row>
  )
}


export default Sheet;