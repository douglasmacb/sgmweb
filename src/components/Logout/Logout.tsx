import * as React from 'react';
import { Dispatch } from 'redux';
import { UserActions } from '../../store/user/types';
import { IRootState } from '../../store';
import * as asyncactions from '../../store/user/async-actions';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';


const mapStateToProps = ({ user }: IRootState) => {
  return { user }
}

const mapDispatcherToProps = (dispatch: Dispatch<UserActions>) => {
    return {
        logout: (): Promise<void> => asyncactions.logoutAsync(dispatch)
    }
}
    
type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class Logout extends React.Component<ReduxType> {
    constructor(props: ReduxType) {
      super(props)
      this.props.logout()
    }

    render() {
        return <Redirect to="/" />
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Logout)
