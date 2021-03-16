import { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

export default function Authorization(allowedRoles: string[]) {

  const userSelector = (state: IRootState) => state.user
  const { roles } = useSelector(userSelector)

  return function(WrappedComponent: ComponentType) {
    return function(props: any) {

      if(roles && roles.length > 0) {
        if (validateRoles(roles, allowedRoles)) {
            return <WrappedComponent {...props} />
        }
      }
      return <div>Unauthorized</div>
    };
  };
}

function validateRoles(roles: string[], allowedRoles: string[]): boolean  {
  for(let i = 0; i < roles.length; i++) {
    if(allowedRoles.includes(roles[i])) {
      return true
    }
  }
  return false
}