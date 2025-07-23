import React from 'react'
import ContactSection from '../components/ContactPage/ContactSection'

const Contact = () => {
  return (
    <>
      <div className="bg-[url(/background.svg)] bg-cover bg-center">
        <div className="container mx-auto">
          <ContactSection />
        </div>
      </div>
    </>
  )
}

export default Contact