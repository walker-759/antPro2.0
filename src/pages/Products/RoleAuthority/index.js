import React from 'react';
import router from 'umi/router';
import { Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class Test extends React.PureComponent {

  state = {

  }

  handleclick = () => {
    router.replace('/dashboard/analysis')
  }

  render() {

    return (
      <PageHeaderWrapper title="角色授权">
        <Button onClick={this.handleclick}>
          点击跳转
        </Button>
      </PageHeaderWrapper>
    );
  }
}
export default Test;