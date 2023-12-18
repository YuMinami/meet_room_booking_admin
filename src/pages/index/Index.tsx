import {Link, Outlet} from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import './index.css'

export function Index() {
    return <div id="index-container">
        <div className="header">
            <Link to="/" className="sys_name">
                <h1>会议室预定系统-后台管理</h1>
            </Link>
            <UserOutlined className="icon"/>
        </div>
        <div className="body">
            <Outlet></Outlet>
        </div>
    </div>
}