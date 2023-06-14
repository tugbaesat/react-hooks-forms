import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const ParentComponent = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }
  return (
    <>
      <Form
        firstName={firstName}
        lastName={lastName}
        newsletter={newsletter}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleNewsletterChange={handleNewsletterChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </>
  );
};

export default ParentComponent;
