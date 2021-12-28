import { LoginComponent } from 'src/app/components/login/login.component';
import { AuthService } from './auth.service';

describe('Service: Auth', () => {
  let service: AuthService;
  let component: LoginComponent;
  
  beforeEach(() => {
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('token');
    service = null;
    component = null;
  });

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });

});

/*
  After each test spec is finished we null out our service and also remove any tokens we stored in localStorage.
*/