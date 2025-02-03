import React, { FC } from 'react';
import { TextInput, Button, Group, Select, Flex, Textarea } from '@mantine/core';
// styles
import styles from './contactForm.module.scss'
// components
import CustomTextInput from '../TextInput';
import CustomTextarea from '../Textarea';
import CustomSelect from '../Select';

const ContactForm: FC = () => {
  const isSend = false;

  return (
    <form>
      <div className={styles.form}>
        <CustomTextInput label="First Name" errorMessage="(Required field)" error required/>
        <CustomTextInput label="Last Name" errorMessage="(Required field)" required/>
        <CustomSelect label="Select Inquiry Type" errorMessage="(Required field)" required/>
        <CustomTextInput label="Reference Number (if applicable)"/>
        <CustomTextInput label="Your Email Address" required/>
        <CustomTextInput label="Booking Number (if applicable)"/>
      </div>
      <CustomTextarea label="Enter Your Question"/>

      {isSend && (
        <span className={styles.textAfterSend}>Thank you! Your message has been sent. Our support team will get back to you as soon as possible.</span>
      )}
      {!isSend && (
        <>
          <span className={styles.text}>* Indicates required field</span>
          <Flex mt="24px" align="center" justify="space-between" className={styles.flexGroup}>
            <Group>
              <Button type="submit" className={styles.submitBtn}>Відправити</Button>
            </Group>
            <span className={styles.bottomLabel}>Or send us an email to <a className={styles.link} href="#">support@rentycars.com</a></span>
          </Flex>
        </>
      )}
    </form>
  )
}

export default ContactForm;