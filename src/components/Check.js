import React from "react";
import { List } from "antd";


const Check = props => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item
                    key={item.name}
                >
                    <List.Item.Meta
                        title={<a href={item.url}> Matched Lines {item.matched_lines} </a>}
                        description={item.user_1.first_name + " " + item.user_1.last_name + " : " + item.user_2.first_name + " " + item.user_2.last_name }
                    />
                    <a href={item.file_1}> Source of {item.user_1.first_name + " " + item.user_1.last_name} </a>
                    <br></br>
                    <a href={item.file_2}> Source of {item.user_2.first_name + " " + item.user_2.last_name} </a>


                </List.Item>
            )}
        />
    );
};

export default Check;
