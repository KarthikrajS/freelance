import React from 'react';
import PropTypes from 'prop-types';
import {Form,Button} from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError  from '../messages/InLineError';


class SignupForm extends React.Component{
    state={data:{
            email:"",
            password:""
        },
        loading:false,
        errors:{}
    }

    onSubmit = e =>
    {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.setState({loading: true});
            this.props.submit(this.state.data)
                .catch(err => { console.log(err); this.setState({errors: err.response.data.errors,loading:false})});
        }
    }
    onChange = e => this.setState({data:{...this.state.data, [e.target.name]:e.target.value}});
    validate =data =>{
        console.log(data);
        const errors={};
        if(!isEmail(data.email)) errors.email='Invalid';
        if(!data.password) errors.password = "cant't be blank";

        return errors;
    }

    render(){
        const {data,errors,loading}=this.state;

        return(
            <Form onSubmit={this.onSubmit} loading={loading}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="example@example.com" value={data.email} onChange={this.onChange}/>
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Make it secure" value={data.password} onChange={this.onChange}/>
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                <Button color='teal'>Sign Up</Button>
            </Form>
        );
    }
}

SignupForm.propTypes={
    submit:PropTypes.func.isRequired
};
export default SignupForm;