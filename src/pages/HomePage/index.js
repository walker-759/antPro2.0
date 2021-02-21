import React from 'react';
// import router from 'umi/router';
import { Button } from 'antd';
// import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class Test extends React.PureComponent {

  state = {

  }

  handleclick = () => {
    // router.replace('/dashboard/analysis')
  }

  render() {

    return (
      <Button onClick={this.handleclick}>
        首页
      </Button>
    );
  }
}
export default Test;
