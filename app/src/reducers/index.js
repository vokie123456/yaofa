import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './app';
import about from './about';
import userlogin from './userlogin';
import weui from './weui';
import useragency from './useragency';
import userborrow from './userborrow';
import order from './order';
import userlender from './userlender';
import validationhtml from './validationhtml';
import profit from './profit';
import weixin from './weixin';

export default combineReducers(
  {
    app,
    about,
    userlogin,
    weui,
    validationhtml,
    useragency,
    userborrow,
    userlender,
    order,
    profit,
    weixin,
    form: formReducer
  }
);
