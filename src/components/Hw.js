import React from "react";
import { List } from "antd";
import { render } from "@testing-library/react";


class  Hws extends React.Component {
  render() {
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
        dataSource={this.props.data}
        renderItem={item => (
          <List.Item
            key={item.name}
          >
            <List.Item.Meta {...this.props.subjectID}
              title={<a href={`/subjects/${this.props.subjectID}/homeworks/${item.id}`}> {item.name} </a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    );
  }
  
}

export default Hws;