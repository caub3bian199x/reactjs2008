import React, { Component } from "react";
import { Card, Form, Input, Button } from "antd";
import {Redirect, Route } from 'react-router-dom';

import { login } from "../../actions/auth";
import { connect } from "react-redux";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { span: 24 },
};

class LoginPage extends Component {
    onFinish = (values) => {
        // console.log("Success:", values);
        // call actions login
        this.props.login(values);
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    render() {
        const { isLoggedIn } =this.props;
        return isLoggedIn ? (<Redirect to ='/' />) : (
            <Card
                size="small"
                title="Login"
                style={{ width: 500, textAlign: "center", margin: "20px auto" }}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                            {
                                validator: (_, value) => {
                                    if (value && value.length < 3) {
                                        return Promise.reject(
                                            "Name length must bigger than 3!"
                                        );
                                    }
                                    if (value && value.length > 24) {
                                        return Promise.reject(
                                            "Name length must smaller than 24!"
                                        );
                                    }
                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}
                    <p>{this.props.message}</p>

                    <Form.Item {...tailLayout}>
                        <Button
                            loading={this.props.loading}
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            
        );
    }
}

function mapStateToProps({auth}) {
    console.log("state: ", auth);
    return {
        isLoggedIn: auth.isLoggedIn,
        message: auth.message,
        loading: auth.loading,
    };
}

export default connect(mapStateToProps, { login })(LoginPage);
