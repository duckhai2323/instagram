import React from 'react';
import styles from './sidebar.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../../assets/images/logo.png';
import { FiHome } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { CgClapperBoard } from "react-icons/cg";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa6";
import { CgAddR } from "react-icons/cg";
const cx = classNames.bind(styles);

class SideBarOpen extends React.Component {
  render() {
    return (
      <div className={cx('sidebar-section')}>
        <div className={cx('sidebar-section__header')}>
          <img width='105px' src={logo}/>
        </div>

        <div className={cx('sidebar-section__menu')}>
          <div className={cx('sidebar-section__menu-item')}>
            <FiHome size={'26px'}/>
            <span>Trang chủ</span>
          </div>

          <div className={cx('sidebar-section__menu-item')}>
            <IoSearchOutline size={'26px'}/>
            <span>Tìm kiếm</span>
          </div>

          <div className={cx('sidebar-section__menu-item')}>
            <MdOutlineExplore size={'26px'}/>
            <span>Khám phá</span>
          </div>

          <div className={cx('sidebar-section__menu-item')}>
            <CgClapperBoard size={'26px'}/>
            <span>Reels</span>
          </div>

          <div className={cx('sidebar-section__menu-item')}>
            <LiaFacebookMessenger size={'26px'}/>
            <span>Tin nhắn</span>
          </div>

          <div className={cx('sidebar-section__menu-item')}>
            <FaRegHeart size={'25px'}/>
            <span>Thông báo</span>
          </div>

          <div className={cx('sidebar-section__menu-item')}>
            <CgAddR size={'26px'}/>
            <span>Tạo</span>
          </div>
          
          <div className={cx('sidebar-section__menu-item')}>
            <FiHome size={'26px'}/>
            <span>Trang cá nhân</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarOpen;
