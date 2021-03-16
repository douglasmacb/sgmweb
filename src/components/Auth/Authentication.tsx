import { ComponentType } from 'react';
import { Redirect } from 'react-router';
import { ApiService } from '../../services/api-service';

const Authentication = (WrappedComponent: ComponentType) => {
  return function(props: any) {

    const apiService = new ApiService()
    return apiService.getToken() ? <WrappedComponent {...props} /> : <Redirect to="/login" />;
  };
}

export default Authentication;


