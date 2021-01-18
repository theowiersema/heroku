import React from 'react';

// Log in screen
interface ILoginProps {
    logIn:(event: React.MouseEvent<HTMLElement,MouseEvent>, username: string, password: string) => void;
}
interface ILoginState {
    [key: string]: string;
}
class LogIn extends React.Component<ILoginProps,ILoginState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange({target}: {target:HTMLInputElement}) {
        this.setState({
            [target.name]: target.value
        });
    }
    render() {
        const logIn = (event: React.MouseEvent<HTMLElement>, username: string, password: string) => {
            this.setState({username:'',password:''});
            this.props.logIn(event,username,password)
        }
        return (
            <form>
                <h1>Log In</h1>
                <input 
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    type="text" 
                    placeholder="Username"
                />
                <input 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="Password" 
                    placeholder="Password"
                />
                <button onClick={(event) => logIn(event,this.state.username,this.state.password)}>Log In</button>
            </form>
        )
    }
}

export default LogIn;