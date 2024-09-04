import React, { ReactNode } from 'react';
import SideBarOpen from './sidebar/sidebar';
import classNames from 'classnames/bind';
import styles from './layout_open.module.scss';

const cx = classNames.bind(styles)

interface LayoutOpenProps {
  children: ReactNode;
}

class LayoutOpen extends React.Component<LayoutOpenProps> {
  constructor(props: LayoutOpenProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className={cx('layout-open')}>
          <SideBarOpen />
          <div>{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default LayoutOpen;
