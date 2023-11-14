import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService{
  private minLength: number = 8;
  getPasswordStrength(password: string): string[] {
    if (password.length === 0) {
      return ['gray', 'gray', 'gray'];
    }
    else if (password.length < this.minLength) {
      return ['red', 'red', 'red'];
    }else{
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (hasLetters && hasNumbers && hasSymbols) {
        return ['green', 'green', 'green'];
      }
      else if (hasLetters && hasNumbers || hasLetters && hasSymbols || hasNumbers && hasSymbols) {
        return ['yellow', 'yellow', 'gray'];
      }
      else {
        return['red', 'gray', 'gray'];
      }
    }
  }
}
