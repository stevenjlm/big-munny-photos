import { ContactGrid } from '@/utils/contactForm'
import '@testing-library/jest-dom'
 
describe('Test email validator', () => {
  it('Accepts valid emails', () => {
    let validEmails = ["johndoe@gmail.com", "susan.smith@place.org", "mini-me@nowhere.com", "super.valid@abc.merica"]
    validEmails.forEach((email: string) => {
      let val = ContactGrid.validateEmail(email);
      expect(val).toBe(true)
    })
  });
  it('Rejects invalid emails', () => {
    let invalidEmails = ["abc", "noatgmail.com", "#@$@___", "!#$!#$@__.com"]
    invalidEmails.forEach((email: string) => {
      let val = ContactGrid.validateEmail(email);
      expect(val).toBe(false)
    })
  });
})

describe('Test text field validator', () => {
  it('Accepts valid names', () => {
    let validNames = ["Joe", "Ting", "         Sam", "Sammy         ", "王"]
    validNames.forEach((name: string) => {
      let val = ContactGrid.validateName(name);
      expect(val.isValid).toBe(true)
    })
  });
  it('Rejects invalid names', () => {
    let invalidNames = ["   ", ""]
    invalidNames.forEach((name: string) => {
      let val = ContactGrid.validateName(name);
      expect(val.isValid).toBe(false)
    })
  });

  it('Accepts valid subjects', () => {
    let validSubjects = ["Photos", "Photoshoot", "Event", "Reaching out talk about photos", "asdfasfasdf"]
    validSubjects.forEach((subject: string) => {
      let val = ContactGrid.validateSubject(subject);
      expect(val.isValid).toBe(true)
    })
  });
  it('Rejects invalid subjects', () => {
    let invalidSubjects = ["!", "!@#$", "你好我是"]
    invalidSubjects.forEach((subject: string) => {
      let val = ContactGrid.validateSubject(subject);
      expect(val.isValid).toBe(false)
    })
  });

  it('Accepts valid messages', () => {
    let validMsg = ["Hi", "Once upon a time." ,"In a galaxy far far away", "            hi"]
    validMsg.forEach((msg: string) => {
      let val = ContactGrid.validateMessage(msg);
      expect(val.isValid).toBe(true)
    })
  });
  it('Rejects invalid subjects', () => {
    let invalidMessages = ["你好我是", "!@#@!$", "                   !"]
    invalidMessages.forEach((msg: string) => {
      let val = ContactGrid.validateSubject(msg);
      expect(val.isValid).toBe(false)
    })
  });
})
