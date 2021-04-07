import { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { Link } from 'react-router-dom'
import { Button } from '../Button';
import './Authorization.css'

export default function Authorization(allowedRoles: string[]) {

  const userSelector = (state: IRootState) => state.user
  const { roles } = useSelector(userSelector)

  return function (WrappedComponent: ComponentType) {
    return function (props: any) {

      if (roles && roles.length > 0) {
        if (validateRoles(roles, allowedRoles)) {
          return <WrappedComponent {...props} />
        }
      }
      return <div className='unauthorized'>
        <h3>Atenção</h3>
        <div className='unauthorized-description'>Para acessar essa tela você deve realizar login</div>
        <Link to="/login"><Button>Login</Button></Link>
      </div>
    };
  };
}

function validateRoles(roles: string[], allowedRoles: string[]): boolean {
  for (let i = 0; i < roles.length; i++) {
    if (allowedRoles.includes(roles[i])) {
      return true
    }
  }
  return false
}