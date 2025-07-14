import "./FormComponent.css";

function FormComponent() {

  
  return (
    <>
      <form action="">
        <h1>Contact Us</h1>
        <div className="wrapper">
          <div className="name">
            <label htmlFor="firstName">First Name *</label>
            <input type="firstName" id="firstName" />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name *</label>
            <input type="lastName" id="lastName" />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" />
        </div>
        <p>Query Type *</p>
        <div className="query">
          <aside>
            <input type="radio" name="general" id="general" />
            <label htmlFor="radio">General Enquiry</label>
          </aside>
          <aside>
            <input type="radio" name="support" id="support" />
            <label htmlFor="support">Support Request</label>
          </aside>
        </div>
        <div className="text">
          <label htmlFor="text">Message *</label>
          <input type="text" id="text" />
        </div>
        <div className="agreement">
          <input type="checkbox" name="agreement" id="agreement" />
          <label htmlFor="agreement">
            I consent to being contacted by the team *
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormComponent;
