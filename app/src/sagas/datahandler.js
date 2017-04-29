import {
    login_request,
    login_result,

    register_request,
    register_result,

    findpwd_request,
    findpwd_result,

    sendauth_request,
    sendauth_result,

    fillprofile_request,
    fillprofile_result,

    getabouthtml_request,
    getabouthtml_result,

    loginwithweixinopenid_request,
    insertorder_request,
    insertorder_result,
    getmyorders_request,
    getmyorders_result,
    acceptorder_request,
    acceptorder_result,
    confirmorder_request,
    confirmorder_result,
    common_err,
} from '../actions';

//接收的对应关系
exports.recvmessagetoresultpair = {
  'register_result':register_result,
  'login_result':login_result,
  'loginsendauth_result':sendauth_result,
  'fillprofile_result':fillprofile_result,
  'getabouthtml_result':getabouthtml_result,
  'common_err':common_err,
  'findpwd_result':findpwd_result,
  'insertorder_result':insertorder_result,
  'getmyorders_result':getmyorders_result,
  'acceptorder_result':acceptorder_result,
  'confirmorder_result':confirmorder_result,
};

//非验证发送接口
exports.sendmessagefnsz = {
    'login':login_request,
    'loginsendauth':sendauth_request,
    'loginwithweixinopenid':loginwithweixinopenid_request,
    'register':register_request,
    'getabouthtml':getabouthtml_request,
    'findpwd':findpwd_request,
};

//验证发送接口
exports.sendmessageauthfnsz = {
    'fillprofile':fillprofile_request,
    'insertorder':insertorder_request,
    'acceptorder':acceptorder_request,
    'getmyorders':getmyorders_request,
    'confirmorder':confirmorder_request,
};


