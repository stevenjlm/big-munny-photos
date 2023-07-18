import crypto from 'crypto'

export interface validation {
  isValid: boolean,
  msg: string,
}

export interface lenRange {
  minimum: number,
  maximum: number,
}

export function hashField(field: string) {
    return crypto
        .createHash('sha256')
        .update(field)
        .digest('hex');
}

export class ContactGrid {
  static nameRange: lenRange = {
    minimum: 0,
    maximum: 69
  }
  static subjectRange: lenRange = {
    minimum: 1,
    maximum: 69
  }
  static messageRange: lenRange = {
    minimum: 1,
    maximum: 400
  }
  
  constructor(public name: string,public email: string, public subject: string, public message: string) {
  }

  public validateFormAPI(): validation  {
    this.name = ContactGrid.strip(this.name);

    let stripped = ContactGrid.strip(this.subject);
    this.subject = stripped.replace(/[^a-zA-Z0-9 ]/g, "");

    stripped = ContactGrid.strip(this.message);
    this.message = stripped.replace(/[^a-zA-Z0-9 ]/g, "");

    let validationRes: validation = {
      isValid: false,
      msg: "err"
    }
  
    let nameVal = ContactGrid.validateName(this.name);
    if (!nameVal.isValid) {
      validationRes.msg = "name invalid";
      return validationRes;
    }

    let subjectVal = ContactGrid.validateSubject(this.subject);
    if (!subjectVal.isValid) {
      validationRes.msg = "subject invalid";
      return validationRes;
    }

    let messageVal = ContactGrid.validateMessage(this.message);
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
    return this.checkLength(stripped,
      ContactGrid.nameRange.minimum,
      ContactGrid.nameRange.maximum);
  }

  static validateSubject(subject: string): validation {
    let stripped = this.strip(subject);
    let cleaned = stripped.replace(/[^a-zA-Z0-9 ]/g, "");
    return this.checkLength(cleaned,
      ContactGrid.subjectRange.minimum, ContactGrid.subjectRange.maximum);
  }

  static validateMessage(message: string): validation {
    let stripped = this.strip(message);
    let cleaned = stripped.replace(/[^a-zA-Z0-9 ]/g, "");
    return this.checkLength(cleaned,
      ContactGrid.messageRange.minimum, ContactGrid.subjectRange.maximum);
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
    let trimmed = text.trim();
    let stripped = trimmed.replace(/\s\s+/g, ' ');
    return stripped
  }

}
