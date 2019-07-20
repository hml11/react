import React from 'react';
import { List, InputItem, WhiteSpace} from 'antd-mobile';
import { createForm } from 'rc-form';

class Form extends React.Component{
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    render(){
        const { getFieldProps } = this.props.form;
        return (
            <div className="form">
                <List>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="phone"
                        placeholder="186 1234 1234"
                    >手机号码</InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="****"
                    >密码</InputItem>
                </List>
                <WhiteSpace />
            </div>
        )
    }
}
const FormWrapper = createForm()(Form);
export default FormWrapper;