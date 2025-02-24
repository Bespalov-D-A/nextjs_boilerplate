import React, { FC } from 'react';

// styles
import s from './contactForm.module.scss'
// components
import CustomTextInput from './TextInput';
import CustomTextarea from './Textarea';
import CustomSelect from './Select';
import { Button } from '@mantine/core';

const ContactForm:FC = () => {
  return (
    <div className={s.contactWrapper}>
      <span className={s.title}>If you're reading this, you’re likely one of the first visitors to witness the exciting beginning of RentyCars.com’s journey.</span>
      <span className={s.text}>We’d love to hear from you! Whether it’s your experience, suggestions, feedback, or even a desire to collaborate—we warmly invite you to reach out and share it with us directly.</span>
      <form className={s.contactForm}>
        <div className={s.topWrap}>
          <CustomTextInput label="Your name" required/>
          <CustomTextInput label="Company name" required/>
          <div className={s.phoneWrap}>
            <CustomSelect label="Phone" errorMessage="(Required field)" required/>
            <CustomTextInput/>
          </div>
          <CustomTextInput label="Email" required/>
        </div>
        <div className={s.bottomWrap}>
          <CustomTextarea label="Your message:"/>
          <Button type="submit" className={s.submitBtn}>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;