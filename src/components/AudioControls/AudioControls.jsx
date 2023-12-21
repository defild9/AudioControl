import React, { useState } from 'react';
import { Flex, Form, Button, Input, Space } from 'antd';
import Control from '../Control';
import '../AudioControls/style.css';
import Paragraph from 'antd/es/typography/Paragraph';

function AudioControls() {
  const [controls, setControls] = useState([]);
  const [newControlName, setNewControlName] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
  
    const englishTextRegex = /^[a-zA-Z\s]*$/;
  
    if (englishTextRegex.test(inputValue) || inputValue === '') {
      setNewControlName(inputValue);
    }
  };

  const handleAddControl = () => {
    if (newControlName.trim() !== '') {
      setControls([...controls, { name: newControlName.trim(), id: controls.length }]);
      setNewControlName('');
    }
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const updatedControls = [...controls];
      [updatedControls[index], updatedControls[index - 1]] = [updatedControls[index - 1], updatedControls[index]];
      setControls(updatedControls);
    }
  };

  const handleMoveDown = (index) => {
    if (index < controls.length - 1) {
      const updatedControls = [...controls];
      [updatedControls[index], updatedControls[index + 1]] = [updatedControls[index + 1], updatedControls[index]];
      setControls(updatedControls);
    }
  };

  return (
    <div className="container">
      <Space size="small">
        <Flex vertical>
          <Flex vertical>
          {controls.length > 0 ? (
            controls.map((control, index) => (
              <Control
                key={control.id}
                controlName={control.name}
                controlValue={control.value}
                index={index}
                moveUp={() => handleMoveUp(index)}
                moveDown={() => handleMoveDown(index)}
                showMoveUp={index > 0}
                showMoveDown={index < controls.length - 1}
              />
            ))
          ) : (
            <Paragraph>
              Enter Controls
            </Paragraph>
          )}
          </Flex>
          <Form layout="vertical">
            <Form.Item>
              <Input
                placeholder="Enter Control Name ..."
                value={newControlName}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Button className="btn" onClick={handleAddControl}>
              Add
            </Button>
          </Form>
        </Flex>
      </Space>
    </div>
  );
}

export default AudioControls;