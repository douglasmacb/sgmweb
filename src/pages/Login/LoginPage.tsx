import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Login } from '../../components'
import { UserActions } from '../../store/user/types';
import { IRootState } from '../../store'
import * as asyncactions from '../../store/user/async-actions';
import './LoginPage.css'
import history from '../../history';

const mapStateToProps = ({ user }: IRootState) => {
    const { token, error, loading } = user;
    return { token, error, loading }
}

const mapDispatcherToProps = (dispatch: Dispatch<UserActions>) => {
    return {
        authenticate: (email: string, password: string): Promise<boolean> => asyncactions.loginAsync(dispatch, email, password)
    }
}
  
type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

interface IUserState {
    email: string
    password: string
}

class LoginPage extends React.Component<ReduxType, IUserState> {

    public state: IUserState = {
        email: '',
        password: ''
    }
    
    public authenticate = async ({email, password}: IUserState) => {
       await this.props.authenticate(email, password)
       history.push('/dashboard')
    }

    render() {
        return (
            <div className="login">
                <Login 
                    email={this.state.email} 
                    password={this.state.password} 
                    loading={this.props.loading}
                    error={this.props.error}
                    authenticate={this.authenticate} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(LoginPage)

