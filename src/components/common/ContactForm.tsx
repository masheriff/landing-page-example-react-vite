import Button from "../ui/Button";

function ContactForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        id="name"
        className="w-full p-2 border border-gray-300 rounded-none"
        placeholder="Name"
        required
      />
      <input
        type="email"
        id="email"
        className="w-full p-2 border border-gray-300 rounded-none"
        placeholder="Email"
        required
      />
      <input
        type="text"
        id="subject"
        className="w-full p-2 border border-gray-300 rounded-none"
        placeholder="Subject"
        required
      />
      <input
        type="text"
        id="comment"
        className="w-full p-2 border border-gray-300 rounded-none"
        placeholder="Comment"
        required
      />
      <Button variant="primary"> SEND MESSAGE</Button>
    </form>
  );
}

export default ContactForm;
