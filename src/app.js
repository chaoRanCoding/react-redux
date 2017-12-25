import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Navigator
} from 'react-native';

import Welcome from './pages/welcome';
import Main from './pages/main';
import Login from './pages/login';
import User from './pages/user';
import Message from  './pages/user/message'; /*我的消息*/
import Collection from './pages/user/collection'; /*收藏夹*/
import Team from './pages/user/team'; /*团队*/
import Setting from './pages/user/setting'; /*设置*/
import CashLog from './pages/user/cashLog'; /*提现状态*/
import Info from './pages/user/info'; /*提现状态*/
import EditInfo from './pages/user/editInfo'; /*修改个人资料*/
import Feedback from './pages/user/feedback'; /*意见反馈*/
import AddAddress from './pages/user/addAddress';/*增加地址*/
import Logistics from './pages/user/viewLogis';/*查看物流*/
import MyRelease from './pages/user/myRelease';/*我的发布*/
import Wallet from './pages/user/wallet';/*道柯斯钱包*/
import Withdraw from './pages/user/withdraw';/*金币提现*/
import BankList from './pages/user/bankList';
import OrderDetails from './pages/user/orderDetails';/*订单详情*/
import Shiping from './pages/user/shipingAddress';/*收货地址*/
import DoctorData from './pages/user/doctorData';/*医生资料*/
import DoctorName from './pages/user/doctorName';/*医生姓名*/
import Cart from './pages/user/cart'; /*购物车*/
import Register from './pages/register'; /*注册*/
import Satisfaction from './pages/user/satisfaction'; /*满意度*/
import ProductDetails from './pages/user/productDetails';/*项目订单详情*/
import ShowOrder from './pages/user/showOrder';/*评价晒单*/
import Comment from './pages/user/comment';/*评论内容*/
import Vouchers from './pages/user/vouchers';/*代金券*/
import Earnest from './pages/user/earnest';/*支付订单预约金*/
//import PreoDiary from './pages/user/preoDiary';/*术前日记*/
//import PostoDiary from './pages/user/postoDiary';/*术后日记*/
import DoctorsRank from './pages/doctorsRank';/*医生排行-（未完成）*/
import HospitalRank from './pages/hospitalRank';/*医院排行-（未完成）*/
import ProductRank from './pages/productRank';/*项目排行-（未完成）*/
import MyOrder from './pages/user/myOrder';/*我的订单*/
import Confirm from './pages/user/confirm';/*确认订单*/
import ForgetPassword from './pages/user/forgetPassword';/*修改密码*/
import EditPassword from './pages/user/editPassword';/*修改密码*/
import AddBank from './pages/user/addBank';/*添加银行卡*/
import EditBank from './pages/user/editBank';/*添加银行卡*/
import Protocol from './pages/user/protocol';/*道柯斯用户协议*/
import DiaryDetails from './pages/diaryDetails';/*日记详情*/
import EditAddress from './pages/user/editAddress';
import Goldlog from './pages/user/goldlog';/*金币记录*/
import Sclog from './pages/user/sclog';/*银币记录*/
import ProjectDetails from './pages/projectDetails';/* 项目产品详情 */
import ProjectOrderDetails from './pages/user/projectOrderDetails';
import ShopList from'./pages/shoplist';
import GoodsDetails from './pages/goodsDetails';
import HospitalDetails from './pages/hospitalDetails';/*医院详情*/
import DoctorsDetails from './pages/doctorsDetails'; /*医生详情*/
import DoctorInfo from './pages/doctorInfo';
import HospitalDoctorsList from './pages/hospitalDoctorsList';
import MyDiaryDetials  from './pages/user/diaryDetails';
import MyDiaryContentDetails from './pages/user/diaryContentDetails';
import NicknameInfo from './pages/user/nicknameInfo'
const _route = {
    Main,
    Welcome,
    User,
    Login,
    Message,
    Collection,
    Team,
    Setting,
    CashLog,
    Info,
    EditInfo,
    Feedback,
    AddAddress,
    Logistics,
    MyRelease,
     Wallet,
    Withdraw,
    OrderDetails,
    Shiping,
    DoctorData,
    DoctorName,
    Cart,
    Register,
    Satisfaction,
    ShowOrder,
    Comment,
    Vouchers,
    Earnest,
    ForgetPassword,
    //PreoDiary,
    //PostoDiary,
    DoctorsRank,
    HospitalRank,
    ProductRank,
    MyOrder,
    Confirm,
    BankList,
    AddBank,
    EditBank,
    EditPassword,
    Protocol,
    DiaryDetails,
    EditAddress,
    Goldlog,
    Sclog,
    ProjectDetails,
	ProjectOrderDetails,
	ShopList,
	GoodsDetails,
    HospitalDetails,
    DoctorsDetails,
    DoctorInfo,
    HospitalDoctorsList,
    MyDiaryContentDetails,
    MyDiaryDetials,
	NicknameInfo
};


class App extends Component {
    renderScene = ( route, navigator) =>{
        let name = route.name;
        let Scene = _route[name];
        return <Scene {...route} navigator= { navigator }></Scene>
    };
	configureScence = (route) =>{
		if(route.name == 'Login'){
			return Navigator.SceneConfigs.FloatFromBottom;
		}else {
			return Navigator.SceneConfigs.FloatFromRight;
		}
	};
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                initialRoute={{name:'Main'}}
                renderScene = { this.renderScene }
                configureScene ={this.configureScence}
                />
            </View>
        )
    }

}

const  styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            