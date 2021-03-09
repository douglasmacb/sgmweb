import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Login } from '../../components'
import { UserActions } from '../../store/user/types';
import { IRootState } from '../../store'
import * as asyncactions from '../../store/user/async-actions';
import './LoginPage.css'

const mapStateToProps = ({ user }: IRootState) => {
    const { email, password, loading } = user;
    return { email, password, loading }
}

const mapDispatcherToProps = (dispatch: Dispatch<UserActions>) => {
    return {
        authenticate: (email: string, password: string) => asyncactions.loginAsync(dispatch, email, password)
    }
}
  
type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

interface IState {
    email: string
    password: string
    loading: boolean
}

class LoginPage extends React.Component<ReduxType, IState> {

    public state: IState = {
        email: '',
        password: '',
        loading: false
      }
    
    public authenticate = ({email, password}: IState) => {
        this.props.authenticate(email, password)
    }

    render() {
        return (
            <div className="login">
                <Login 
                    email={this.state.email} 
                    password={this.state.password} 
                    loading={this.state.loading}
                    authenticate={this.authenticate} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(LoginPage);

