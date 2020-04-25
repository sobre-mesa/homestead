import React, { useState } from 'react';
import { PageHeader, Row, Col, InputNumber, Card, Typography, Statistic } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount, decrementByAmount, nvSavings, ebSavings } from './financialSlice';

const Financial = () => {

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Second Impact"
        subTitle="Crisis managment tool" />
      <Content />
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <InputPanel />
      <DisplayPanel />
    </div>
  )
}

const InputPanel = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const { Text } = Typography;

  return (
    <Card style={{ width: 500, marginLeft: 44, marginTop: 8 }}>
      <Row style={{ padding: 12 }}>
        <Text style={{ paddingRight: 12 }}>Amount</Text>
        <InputNumber
          size="small"
          defaultValue={0}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={x => setAmount(x)} />
      </Row>
      <Row style={{ padding: 12 }}>
        <button onClick={() => dispatch(incrementByAmount({ account: "nv", amount }))}>
          + nv
      </button>
        <button onClick={() => dispatch(decrementByAmount({ account: "nv", amount }))}>
          - nv
      </button>
        <button onClick={() => dispatch(incrementByAmount({ account: "eb", amount }))}>
          + eb
      </button>
        <button onClick={() => dispatch(decrementByAmount({ account: "eb", amount }))}>
          - eb
      </button>
      </Row>

    </Card>
  )
}

const DisplayPanel = () => {
  const nv = useSelector(nvSavings);
  const eb = useSelector(ebSavings);
  return (
    <Card style={{ width: 500, marginLeft: 44, marginTop: 8 }}>
      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Col>
        <Statistic title="Nicolás" value={nv} />
        </Col>
        <Col>
        <Statistic title="Edith" value={eb} />
        </Col>
      </Row>
    </Card>
  )
}

export default Financial;