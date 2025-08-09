import ContactContact from "../common/ContactForm";
import SectionHeading from "../common/SectionHeading";

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <SectionHeading
          title="Contact"
          description="Lets get in touch and talk about your next project."
          showDivider={true}
        />
        <ContactContact />
      </div>
    </section>
  );
}

export default Contact;
