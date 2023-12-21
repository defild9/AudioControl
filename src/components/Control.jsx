import { Flex, Button } from 'antd'
import React, { useState } from 'react'
import { PlusOutlined, MinusOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import { Typography } from 'antd';
const { Paragraph, Title } = Typography;

function Control({ controlName, index, moveUp, moveDown, showMoveUp, showMoveDown }) {
  const [controlValue, setControlValue] = useState(0);

  const increaseValue = () => {
    setControlValue(controlValue + 1);
  };

  const decreaseValue = () => {
    setControlValue(controlValue - 1);
  };

  return (
    <Flex gap="small" justify="space-evenly" align="center">
      <Flex vertical>
        {showMoveUp && (
          <Button 
          type='text'
          icon={<CaretUpOutlined />} 
          onClick={moveUp} />
        )}

      {showMoveDown && (
          <Button 
          type='text'
          icon={<CaretDownOutlined />} 
          onClick={moveDown} 
        />
      )}
      </Flex>
      <Button
        icon={<MinusOutlined />}
        onClick={decreaseValue}
        disabled={controlValue === 0}
      />
      <Flex vertical>
        <div>
          <Title level={3}>{controlValue}</Title>
        </div>
        <div>
          {controlName ? (
            <Paragraph
              type={controlValue && controlValue > 90 ? 'danger' : 'default'}
            >
              {controlName.toUpperCase()}
            </Paragraph>
          ) : (
            'Default Value'
          )}
        </div>
      </Flex>
      <Button
        icon={<PlusOutlined />}
        onClick={increaseValue}
        disabled={controlValue === 100}
      />
    </Flex>
  );
}

export default Control;