import React from 'react';
import { List, InputItem, WhiteSpace,Button } from 'antd-mobile';
import { createForm } from 'rc-form';

class Form extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount() {
    //     this.props.getMsg(this.props.form)
    //
    //
    // }
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.form.getFieldsValue())
        // this.val=nextProps.form.getFieldsValue();


    }
    render(){
        const { getFieldProps,getFieldsValue,setFieldsValue } = this.props.form;
        // console.log(this.props.form)
        // this.val=getFieldsValue();



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
                    <div>
                        <InputItem
                            {...getFieldProps('number')}
                            type="number"
                            placeholder="1234"
                        >验证码
                        </InputItem>
                        <Button type="warning" size="small" inline style={{position:"absolute",top:"95px",right:0}}>发送验证码</Button>
                    </div>
                </List>
                <WhiteSpace />
            </div>
        )
    }
}
const FormWrapper = createForm()(Form);
export default FormWrapper;