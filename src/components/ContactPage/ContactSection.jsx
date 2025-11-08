import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
const ContactSection = () => {
  return (
    <div className="flex items-center gap-14 py-25">
      <ContactLeft />
      <ContactRight />
    </div>
  );
};

export default ContactSection;
