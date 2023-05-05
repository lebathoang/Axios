import './index.scss';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';

function HomePage() {
  return (
    <div className="wrap">
      <Link to="/list">
        <Space wrap>
          <Button type="primary">Click me</Button>
        </Space>
      </Link>
    </div>
  );
}

export default HomePage;
