import { ComponentType } from 'react';
import { ApiService } from '../../services/api-service';

export default function Authorization(allowedRoles: string[]) {
  return function(WrappedComponent: ComponentType) {
    return function(props: any) {

      const apiService = new ApiService()
      const token = apiService.getToken()
      if(token) {
        const payload = apiService.decode(token)
        if (validateRoles(payload?.roles, allowedRoles)) {
            return <WrappedComponent {...props} />
        }
      }
      return <div>Unauthorized</div>
    };
  };
}

function validateRoles(roles: string[], allowedRoles: string[]): boolean  {
  for(let i = 0; i < roles.length; i++) {
    console.log(roles[i])
    if(allowedRoles.includes(roles[i])) {
      return true
    }
  }
  return false
}