import React from 'react'
import './ContactPage.css'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState } from '../../store'
import * as asyncactions from '../../store/service/async-actions';
import { ServiceActions } from '../../store/service/types';
import { Contact } from '../../components/Contact/Contact'
import { Spinner } from '../../components';

const mapStateToProps = ({ service }: IRootState) => {
    const { serviceData, error, loading } = service;
    return { serviceData, error, loading }
}

const mapDispatcherToProps = (dispatch: Dispatch<ServiceActions>) => {
    return {
        fetchAllServiceContacts: (): Promise<void> => asyncactions.fetchAllServiceContacts(dispatch),
    }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class ContactPage extends React.Component<ReduxType> {

    constructor(props: ReduxType) {
        super(props)
        props.fetchAllServiceContacts()
    }

    render() {
        return (
            this.props.loading
                ? <div className="loading"><Spinner /></div>
                : <Contact />
        )
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(ContactPage)