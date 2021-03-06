    /**
 * Created by wangxiaoqing on 2017/3/27.
 */
import React from 'react';

import WeuiTool from './components/tools/weuitool';

//测试
import Test from "./components/test";
//跳转首页
import Index from "./components/index";
//登录
import Login from "./components/login";
//注册
import Register from "./components/register";
//邀请码注册借款人
import Registerborrow from "./components/registerborrow";
//忘记密码
import ResetPassword from "./components/resetpassword";
//选择用户类型
import UserType from "./components/usertype";
//设置
import Settings from "./components/settings";
//关于我们
import Abouthtml from "./components/abouthtml";


//关于我们
import Usercenters from "./components/usercenters";


/*
    借款人端
*/
//发布借款
import AddBorrow from "./components/user/addborrow";
//用户中心
import UserCenter from "./components/user/usercenter";
//借款列表
import BorrowList from "./components/user/borrowlist";
//借款详情
//import BorrowInfo from "./components/user/borrowinfo";
import Orderdetail from "./components/user/orderdetail";
//忘记密码
import UserIndex from "./components/user/index";
//认证中心
import Validation from "./components/user/validation";
//认证-身份认证
import ValidationShenfen from "./components/user/validation-shenfen";
//认证-手机运营商认证
//import ValidationPhone from "./components/user/validation-phone";
//认证-芝麻认证
import ValidationZhima from "./components/user/validation-zhima";
//认证-照片认证
import ValidationPhoto from "./components/user/validation-photo";
//认证-照片认证
//import ValidationTaobao from "./components/user/validation-taobao";
//用户借款资料详情
import BorrowUserInfo from "./components/user/borrowuserinfo";
//完善借款资料
import AddBorrowUserInfo from "./components/user/addborrowuserinfo";
//完善借款资料
import Tousu from "./components/user/tousu";
//用户认证信息
import Uservalidationinfo from "./components/user/uservalidationinfo";
//
import Loanshowborrowinfo from "./components/user/loanshowborrowinfo";
import Loanshowborrowbaseinfo from "./components/user/loanshowborrowbaseinfo";

//芝麻获取芝麻openid
import Zhima from "./components/zhima";

/*放款端*/
//首页
import BossIndex from "./components/boss/index";
//首页
import BossFiller from "./components/boss/filler";
//个人中心
import BossUserCenter from "./components/boss/usercenter";
//借款人详情
import BossAddLoan from "./components/boss/addloan";
//我的放款列表  //未完成
import BossLoanList from "./components/boss/loanlist";
//放款详情
import Loaninfo from "./components/boss/loaninfo";
import ShowLoaninfo from "./components/boss/showloaninfo";
import BorrowShowLoaninfo from "./components/boss/borrowshowloaninfo";
//放款详情  //未完成
//import BossLoanList from "./components/boss/loanlist";


/*中介端*/
import AgencyIndex from "./components/agency/index";
//中介个人中心
import AgencyUserCenter from "./components/agency/usercenter";
//借款列表
import AgencyBorrowList from "./components/agency/borrowlist";
//我的邀请码
import AgencyQRcode from "./components/agency/agencyqrcode";
//我的钱包
import Agencyprofit from "./components/agency/profit";
//提现第一步
import Tixian from "./components/agency/tixian";
//提现第二步
import Tixian2 from "./components/agency/tixian2";
//提现第二步
import Tixian3 from "./components/agency/tixian3";



//初始化的时候获取openid
import Wxgetopenid from "./components/wxgetopenid";

import {requireAuthentication} from './components/requireauthentication';



//import Loaninfo from './components/requireauthentication';

//认证，集成第三方页面，运营商认证和淘宝认证
//import Validationhtml from './components/user/validationhtml';
import NotifySuc from './components/user/notifysuc';
import NotifyFailed from './components/user/notifyfailed';

import Tests from "./components/tests";

import {
    HashRouter as Router,
    Route,Redirect,
    Switch
} from 'react-router-dom';

const CoApp = (props) => {
    let CustomRoute = Route;
    return (
        <Switch>
            <CustomRoute exact path="/" component={requireAuthentication(Index)}/>
            <CustomRoute exact path="/test" component={Test}/>
            <CustomRoute exact path="/usertype" component={UserType}/>
            <CustomRoute exact path="/login" component={Login}/>
            <CustomRoute exact path="/register" component={Register}/>
            <CustomRoute exact path="/registerborrow/:code" component={Registerborrow}/>
            <CustomRoute exact path="/userindex" component={requireAuthentication(UserIndex)}/>
            <CustomRoute exact path="/bossindex" component={requireAuthentication(BossIndex)}/>
            <CustomRoute exact path="/settings" component={requireAuthentication(Settings)}/>
            <CustomRoute exact path="/resetpassword" component={ResetPassword}/>
            <CustomRoute exact path="/abouthtml/:type" component={Abouthtml}/>
            <CustomRoute exact path="/agencyindex" component={requireAuthentication(AgencyIndex)}/>
            <CustomRoute exact path="/agencyusercenter" component={requireAuthentication(AgencyUserCenter)}/>
            <CustomRoute exact path="/agencyborrowlist" component={requireAuthentication(AgencyBorrowList)}/>
            <CustomRoute exact path="/bossaddloan" component={requireAuthentication(BossAddLoan)}/>
            <CustomRoute exact path="/bossfiller" component={requireAuthentication(BossFiller)}/>
            <CustomRoute exact path="/bossusercenter" component={requireAuthentication(BossUserCenter)}/>
            <CustomRoute exact path="/bossloanlist" component={requireAuthentication(BossLoanList)}/>
            <CustomRoute exact path="/loaninfo" component={requireAuthentication(Loaninfo)}/>
            <CustomRoute exact path="/addborrow" component={requireAuthentication(AddBorrow)}/>
            <CustomRoute exact path="/addBorrowUserInfo" component={requireAuthentication(AddBorrowUserInfo)}/>
            <CustomRoute exact path="/usercenter" component={requireAuthentication(UserCenter)}/>
            <CustomRoute exact path="/borrowlist" component={requireAuthentication(BorrowList)}/>

            <CustomRoute exact path="/validation" component={requireAuthentication(Validation)}/>
            <CustomRoute exact path="/agencyqrcode" component={requireAuthentication(AgencyQRcode)}/>
            <CustomRoute exact path="/borrowuserinfo" component={requireAuthentication(BorrowUserInfo)}/>
            <CustomRoute exact path="/addborrowuserinfo" component={requireAuthentication(AddBorrowUserInfo)}/>
            <CustomRoute exact path="/validationshenfen" component={requireAuthentication(ValidationShenfen)}/>


            <CustomRoute exact path="/validationzhima" component={requireAuthentication(ValidationZhima)}/>
            <CustomRoute exact path="/validationphoto" component={requireAuthentication(ValidationPhoto)}/>
            <CustomRoute exact path="/agencyprofit" component={requireAuthentication(Agencyprofit)}/>
            <CustomRoute exact path="/tixian" component={requireAuthentication(Tixian)}/>
            <CustomRoute exact path="/tixian2" component={requireAuthentication(Tixian2)}/>
            <CustomRoute exact path="/tixian3" component={requireAuthentication(Tixian3)}/>
            <CustomRoute exact path="/tousu" component={requireAuthentication(Tousu)}/>

            <CustomRoute exact path="/notifysuc/:type/:userid" component={NotifySuc}/>
            <CustomRoute exact path="/notifyfailed/:type/:userid" component={NotifyFailed}/>
            <CustomRoute exact path="/uservalidationinfo" component={requireAuthentication(Uservalidationinfo)}/>
            <CustomRoute exact path="/tests" component={Tests}/>
            <CustomRoute exact path="/wxgetopenid/:openid/:access_token" component={Wxgetopenid}/>
            <CustomRoute exact path="/showloaninfo" component={requireAuthentication(ShowLoaninfo)}/>
            <CustomRoute exact path="/borrowshowloaninfo" component={requireAuthentication(BorrowShowLoaninfo)}/>
            <CustomRoute exact path="/loanshowborrowinfo" component={requireAuthentication(Loanshowborrowinfo)}/>
            <CustomRoute exact path="/loanshowborrowbaseinfo" component={requireAuthentication(Loanshowborrowbaseinfo)}/>
            <CustomRoute exact path="/orderdetail/:id" component={requireAuthentication(Orderdetail)}/>

            <CustomRoute exact path="/zhima/:openid" component={requireAuthentication(Zhima)}/>
            <CustomRoute exact path="/usercenters" component={requireAuthentication(Usercenters)}/>


        </Switch>
    );
}


//app
class AppRoot extends React.Component {
    render() {
        return (
            <div className="AppContainer">
                <WeuiTool />
                <CoApp />
            </div>
        );
    }
}

export default AppRoot;
