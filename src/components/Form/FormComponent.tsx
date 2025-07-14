import "./FormComponent.css";

function FormComponent() {
  return (
    <>
      <form action="">
        <h1>Contact Us</h1>
        <div className="wrapper">
          <div className="name">
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" id="firstName" />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" id="lastName" />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </div>
        <p>Query Type</p>
        <div className="query">
          <aside>
            <label htmlFor="radio">General Enquiry</label>
            <input type="radio" name="general" id="General" />
          </aside>
          <aside>
            <label htmlFor="support">Support Request</label>
            <input type="radio" name="support" id="support" />
          </aside>
        </div>
        <div className="text">
            <label htmlFor="text">Message</label>
            <input type="text" id="text" />
        </div>
        <input type="checkbox" name="agreement" id="agreement" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormComponent;
