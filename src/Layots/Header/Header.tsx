import React, { useEffect } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {  Button, Menu, Dropdown } from 'antd';
import Logo from '../../assets/img/logo-rsschool3.png';
import axios from 'axios';

const HeaderSC = styled.div`
	display: flex;
  justify-content: space-between;
`;
const ImgLogo = styled.img`height: 30px; margin-left: 15px;`;

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        <EyeOutlined />
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );


export const Header = () => {
	return (<>
		<HeaderSC>
				<ImgLogo src={Logo} alt="" />
                <h1>Schedule</h1>
                <Dropdown overlay={menu} placement="bottomCenter">
      <Button type="dashed">My Profile</Button>
    </Dropdown>
		</HeaderSC>
	</>);
    
};
