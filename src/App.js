
import { Table } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'address.city',
    dataIndex: ["address","city"],
    key: 'address.city',
  },
];

function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then(res=>setdata(res.data))
  }, [])
  
  return (
    <div className="App">
      
   
<Table dataSource={data} columns={columns} />;
    </div>
  );
}

export default App;
