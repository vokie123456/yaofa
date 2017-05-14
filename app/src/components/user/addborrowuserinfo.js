/*
    借款详情
*/
import React, { Component } from 'react';
import DocumentTitle from "react-document-title";
import WeUI from 'react-weui';
import _ from "lodash";
import 'weui';
import 'react-weui/lib/react-weui.min.css';
import '../../../public/css/borrowuserinfo.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Fields, Field, reduxForm, Form, formValueSelector } from 'redux-form';
import { Province } from "../province";
import {
    fillrealnameprofile_request,
} from '../../actions';
import {
    required,
    InputValidation,
    WeuiInputValidation,
    WeuiSelectValidation,
    WeuiSwitchValidation
    } from "../tools/formvalidation"
const {
    FormCell,
    Checkbox,
    Form:FormUI,
    Select,
    Panel,
    PanelBody,
    MediaBox,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Input,
    Label
    } = WeUI;

class PageForm extends Component {
    render() {
        const { handleSubmit,subBorrowuserinfo } = this.props;
        const fromprovince = _.map(Province,(p,index)=>{
            return {value: p.name,label: p.name}
        });
        return (
            <Form
                onSubmit={handleSubmit(subBorrowuserinfo)}
                >
                <div className="list formStyle1">
                    <FormUI>
                        <Field
                            name="hukou"
                            id="hukou"
                            Option={fromprovince}
                            component={ WeuiSelectValidation }
                            InputTit="户籍"
                        />
                        <Field
                            name="limithuabei"
                            id="limithuabei"
                            placeholder="请输入花呗额度"
                            type="number"
                            component={ WeuiInputValidation }
                            validate={[ required ]}
                            InputTit="花呗额度"
                            Company="元"
                        />
                        <Field
                            name="limitjiebei"
                            id="limitjiebei"
                            placeholder="请输入借呗额度"
                            type="number"
                            component={ WeuiInputValidation }
                            validate={[ required ]}
                            InputTit="借呗额度"
                            Company="元"
                        />
                        <Field
                            name="jiedaibaofuzai"
                            id="jiedaibaofuzai"
                            placeholder="请输入借贷宝负债"
                            type="number"
                            component={ WeuiInputValidation }
                            validate={[ required ]}
                            InputTit="借贷宝负债"
                            Company="元"
                        />
                        <Field
                            name="jiedaobaoyihuan"
                            id="jiedaobaoyihuan"
                            placeholder="请输入借贷宝已还"
                            type="number"
                            component={ WeuiInputValidation }
                            validate={[ required ]}
                            InputTit="借呗额度"
                            Company="元"
                        />
                        <Field
                            name="realtimeforphoneyear"
                            id="realtimeforphoneyear"
                            Option={[
                                {value: 0,label: "0年"},
                                {value: 1,label: "1年"},
                                {value: 2,label: "2年"},
                                {value: 3,label: "3年"},
                                {value: 4,label: "4年"},
                                {value: 5,label: "5年"},
                                {value: 6,label: "6年"},
                            ]}
                            component={ WeuiSelectValidation }
                            InputTit="手机号实名时间"
                        />
                    </FormUI>
                    <FormUI>
                        <Field
                            name="hasgudingzichan"
                            id="hasgudingzichan"
                            component={ WeuiSwitchValidation }
                            InputTit="是否有固定资产"
                        />
                        <Field
                            name="hasdanwei"
                            id="hasdanwei"
                            component={ WeuiSwitchValidation }
                            InputTit="是否有工作单位"
                        />
                        <Field
                            name="hasgongjijin"
                            id="hasgongjijin"
                            component={ WeuiSwitchValidation }
                            InputTit="是否有公积金"
                        />
                        <Field
                            name="hasshebao"
                            id="hasshebao"
                            component={ WeuiSwitchValidation }
                            InputTit="是否有社保"
                        />
                        <Field
                            name="hassanhaotongyi"
                            id="hassanhaotongyi"
                            component={ WeuiSwitchValidation }
                            InputTit="三号是否统一"
                        />
                        <Field
                            name="hasjinrihuankuan"
                            id="hasjinrihuankuan"
                            component={ WeuiSwitchValidation }
                            InputTit="有无今日还款"
                        />
                        <Field
                            name="hasyuqijilu"
                            id="hasyuqijilu"
                            component={ WeuiSwitchValidation }
                            InputTit="有无逾期记录"
                        />
                        <Field
                            name="hasshenfenzhengyuanjian"
                            id="hasshenfenzhengyuanjian"
                            component={ WeuiSwitchValidation }
                            InputTit="身份证原件"
                        />
                    </FormUI>
                </div>
                <div className="submitBtn">
                    <button className="btn Primary">确定</button>
                </div>
            </Form>
        )
    }
}

// hasgudingzichan:{ type: Boolean, default: false },//是否有固定资产
// hasdanwei:{ type: Boolean, default: false },//是否有工作单位
// hasgongjijin:{ type: Boolean, default: false },//是否有公积金
// hasshebao:{ type: Boolean, default: false },//是否有社保
// hassanhaotongyi:{ type: Boolean, default: false },//三号是否统一
// hasjinrihuankuan:{ type: Boolean, default: false },//有无今日还款
// hasyuqijilu:{ type: Boolean, default: false },//有无逾期记录
// hasshenfenzhengyuanjian:{ type: Boolean, default: false },//身份证原件

PageForm = reduxForm({
    form: 'selectingFormValues',
    initialValues:{
        hukou : "江苏",
        realtimeforphoneyear: 0.5,
        hasgudingzichan : false,
        hasdanwei : false,
        hasgongjijin : false,
        hasshebao : false,
        hassanhaotongyi : false,
        hasjinrihuankuan : false,
        hasyuqijilu : false,
        hasshenfenzhengyuanjian : false,
    }
})(PageForm);

const selector = formValueSelector('selectingFormValues');

PageForm = connect(state => {
    // can select values individually
    //const moneyusefor = selector(state, 'moneyusefor');
    return {
        //moneyusefor
    };
})(PageForm);

class Page extends Component {
    subBorrowuserinfo=(value)=>{
        this.props.dispatch(fillrealnameprofile_request(value));
    }
	render() {
        return (
    		<div className="borrowuserinfoPage addborrowuserinfoPage AppPage">
    			<DocumentTitle title="完善借款资料" />
                <div className="pageTitle"><span>完善借款资料</span></div>
                <div className="form">
                    <PageForm subBorrowuserinfo={this.subBorrowuserinfo} />
                </div>
    		</div>
    	)
    }
}

const data = ({userlogin}) => {
    return {userlogin};
};
Page = connect(data)(Page);
export default Page;






