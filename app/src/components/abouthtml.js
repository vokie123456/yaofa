/*
    设置
*/
import React, { Component } from 'react';
import DocumentTitle from "react-document-title";
import WeUI from 'react-weui';
import { connect } from 'react-redux';
import 'weui';
import 'react-weui/lib/react-weui.min.css';
import '../../public/css/abouthtml.css';
import renderHTML from 'react-render-html';
const { 
    Cells,
    Cell,
    CellBody,
    CellFooter,
    CellHeader
    } = WeUI;
import {
    getabouthtml_request
    } from '../actions';

class Page extends Component {

    componentWillMount() {
        this.props.dispatch(getabouthtml_request({keyname: this.props.keynames}));
    }

    render() {
        const { about,match } = this.props;
        const data = about[match.params.type];
        return (
            <div className="aboutPage AppPage">
                <DocumentTitle title={data.title} />
                <div className="list">
                    {renderHTML(data.desc)}
                </div>
            </div>
        )
    }
}
const data =  ({about},props) =>{
    return {about,keynames : props.match.params.type};
};
export default connect(data)(Page);



