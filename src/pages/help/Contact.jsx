import { Form, useActionData } from "react-router-dom";

function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required />
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export default Contact;
