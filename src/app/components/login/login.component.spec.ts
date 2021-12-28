/* tslint:disable:no-unused-variable */
import {
  TestBed, 
  ComponentFixture, 
  inject,
  async 
} from '@angular/core/testing';
import { LoginComponent, User } from './login.component';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { AuthService } from 'src/app/core/auth/auth.service';

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;
  let spy: any;
  let el: DebugElement;
  let authService: AuthService

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    //  get the "a" element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('a'));
  });

  it('Setting enabled to false disabled the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  it('Setting enabled to true enables the submit button', () => {
    component.enabled = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });

  it('Entering email and password emits loggedIn event', () => {
    let user: User;
    loginEl.nativeElement.value = "test@example.com";
    passwordEl.nativeElement.value = "123456";

    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) =>  user = value);

    // This sync emits the event and the subscribe callback gets executed above
    submitEl.triggerEventHandler('click', null);

    // Now we can check to make sure the emitted value is correct
    expect(user.email).toBe("test@example.com");
    expect(user.password).toBe("123456");
  });

  it('needsLogin returns true when the user has not been authenticated', () => {
    authService = TestBed.get(AuthService);
    spy = spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when the user has been authenticated', () => {
    authService = TestBed.get(AuthService);
    spy = spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('login button hidden when the user is authenticated', () => {
    authService = TestBed.get(AuthService);
    // Trigger change detection and this lets the template update to the initial value which is Login since by
    // default we are not authenticated
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    // Change the authetication state to true
    spyOn(authService, 'isAuthenticated').and.returnValue(true);

    // The label is still Login! We need changeDetection to run and for angular to update the template.
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    // Which we can trigger via fixture.detectChange()
    fixture.detectChanges();

    // Now the label is Logout
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });
});


/*
fixture.detectChanges() -  to trigger change detection and update the view
toHaveBeenCalled() -	We can even check to see if the isAuthenticated function was called.
*/