import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Table, Button, Space } from 'antd';

function ListPage() {
  const [lists, setLists] = useState([]);

  const onShowList = () => {
    // useEffect(() => {
      axios
        .create({ baseURL: 'https://dummyjson.com/products' })
        .get('?_limit=10')
        .then((res) => {
          console.log(res);
          var a = res.data.products.map((e) => ({
           
            title: e.title,
            id: e.id,
            body: e.description,
          }));
          setLists(a);
        });
    // }, []);
  };
  const column = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'Title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
  ];

  return (
    <div>
      <Space className="site-button-ghost-wrapper" wrap>
        <Button className='showlist' type="primary" ghost onClick={onShowList}>
          Click me
        </Button>
      </Space>
      <Table columns={column} dataSource={lists} />
    </div>
  );
}

export default ListPage;
