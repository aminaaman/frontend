import React from "react";
import { List } from "antd";


const Hws = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.name}
        >
          <List.Item.Meta
            title={<a href={`/homeworks/${item.id}`}> {item.name} </a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Hws;