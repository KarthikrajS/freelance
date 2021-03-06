import React from 'react';
import InlineError from '../messages/InLineError';
import PropTypes from 'prop-types';
import {Form,Button} from 'semantic-ui-react';
class ResetPasswordForm extends React.Component{

    state={
        data:{
            token: this.props.token,
            password:'',
            passwordConfirmation:''
        },
        loading: false,
        errors:{}
    };
    onChange = e => this.setState({data:{...this.state.data, [e.target.name]:e.target.value}});
    onSubmit = () =>
    {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.setState({loading: true});
            this.props.submit(this.state.data)
                .catch(err => this.setState({errors: err.response.data.errors,loading:false}))
        }
    };
    validate = (data) =>
    {
        const errors = {};
        if(!data.password) errors.password= "Can't be blank";
        if(data.password !== data.passwordConfirmation) errors.password = "Passwords must match";
        return errors;
    };
    render(){
        const { data, loading,errors } = this.state;

        return(
            <Form onSubmit={this.onSubmit} loading={loading}>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">New Password</label>
                    <input type="password" id="password" name="password" placeholder="Your new password" value={data.password} onChange={this.onChange}/>
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>

                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" id="passwordConfirmation" name="passwordConfirmation" placeholder="Type it again,please!" value={data.passwordConfirmation} onChange={this.onChange}/>
                    {errors.passwordConfirmation && <InlineError text={errors.passwordConfirmation}/>}
                </Form.Field>
                <Button color='teal'>Reset</Button>
            </Form>
        );
    }
};

ResetPasswordForm.propTypes={
    submit: PropTypes.func.isRequired,
    token:PropTypes.string.isRequired
}

export default ResetPasswordForm;