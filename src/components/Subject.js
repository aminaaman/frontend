import React from 'react';
import { List } from 'antd';

const Subjects = (props) => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href={`/${item.id}`}>{item.name}</a>}
            description={item.description}
          />
        </List.Item>
        )}
      />
    )
}

export default Subjects;