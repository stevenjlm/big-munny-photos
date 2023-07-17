import DOMPurify from 'isomorphic-dompurify';

export interface validation {
  isValid: boolean,
  msg: string,
}


export class ContactGrid {

  constructor(public name: string,public email: string, public subject: string, public message: string) {
  }

  public validateFormAPI(): validation  {
    let validationRes: validation = {
      isValid: false,
      msg: "err"
    }
  
    let nameVal = ContactGrid.validateName(this.name);
    if (!nameVal.isValid) {
      validationRes.msg = "name invalid";
      return validationRes;
    }

    let subjectVal = ContactGrid.validateName(this.subject);
    if (!subjectVal.isValid) {
      validationRes.msg = "subject invalid";
      return validationRes;
    }

    let messageVal = ContactGrid.validateName(this.message);
    if (!messageVal.isValid) {
      validationRes.msg = "message invalid";
      return validationRes;
    }

    if (!ContactGrid.validateEmail(this.email)) {
      validationRes.msg = "email invalid";
      return validationRes;
    }

    validationRes.isValid = true;
    validationRes.msg = "ok";
    return validationRes;
  }

  static validateName(name: string): validation {
    let stripped = this.strip(name);
    return this.checkLength(stripped, 2, 69);
  }

  static validateSubject(subject: string): validation {
    let stripped = this.strip(subject);
    return this.checkLength(stripped, 2, 69);
  }

  static validateMessage(message: string): validation {
    let stripped = this.strip(message);
    return this.checkLength(stripped, 1, 400);
  }

  static checkLength(inString: string, minLen: number, maxLen: number) {
    let longEnough = (inString.length > minLen);
    let notTooLong = (inString.length <= maxLen);

    if (longEnough && notTooLong) {
      let validationRes: validation = {
        isValid: true,
        msg: "ok"
      }
      return validationRes
    } else if (!longEnough) {
      let validationRes: validation = {
        isValid: false,
        msg: "too short"
      }
      return validationRes
    } else if (!notTooLong) {
      let validationRes: validation = {
        isValid: false,
        msg: "too long"
      }
      return validationRes
    } else {
      let validationRes: validation = {
        isValid: false,
        msg: "error"
      }
      return validationRes
    }
  }
    
  static validateEmail(email:string): boolean {
    let match = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (match) {
      return true;
    } else {
      return false;
    }
  }

  static strip(text: string): string {
    let sanitized = DOMPurify.sanitize(text);
    let trimmed = sanitized.trim();
    let stripped = trimmed.replace(/\s\s+/g, ' ');
    return stripped
  }

}
