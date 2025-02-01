import React, { FC } from 'react';
import { TextInput, Button, Group, Select, Flex, Textarea } from '@mantine/core';
// styles
import styles from './contactForm.module.scss'

const ContactForm: FC = () => {
  const isSend = false;

  return (
    <form>
      <div className={styles.form}>
        <TextInput
          className={styles.inputWrap}
          label="First Name"
          required
          // error="This field is required"
        />
        <TextInput
          className={styles.inputWrap}
          label="Last Name"
          required
        />
        <Select
          className={styles.inputWrap}
          label="Select Inquiry Type"
          required
          data={[
            { value: 'question', label: 'Question' },
            { value: 'feedback', label: 'Feedback' },
            { value: 'complaint', label: 'Complaint' },
          ]}
        />
        <TextInput
          className={styles.inputWrap}
          label="Reference Number (if applicable)"
        />
        <TextInput
          className={styles.inputWrap}
          label="Your Email Address"
          required
        />
        <TextInput
          className={styles.inputWrap}
          label="Booking Number (if applicable)"
        />
      </div>
      <Textarea
        className={styles.textArea}
        label="Enter Your Question"
      />
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