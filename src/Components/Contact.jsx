import { Form } from "react-router-dom"
export const contactData = async({request}) =>{
  try{
    let res = await request.formData()
    let data = Object.fromEntries(res)
    console.log(data);
    return null;
  }catch(err){
    console.log(err.message);
  }
}

export const Contact = () => {
  return (
    <>
    <section className="container">
      <h1 className="section-common--heading">Contact us</h1>
      <p className="section-common-subheading">
      get in touch with us.
      </p>
      <div className="section-contact">
        <div className="grid grid-two--cols">
          <div className="contact-content">
            <Form method="POST" action="/contact">
            <div className="grid grid-two-cols mb-3">
              <div>
              <label htmlFor="username">Full Name</label>
              <input 
              type="text" 
              name="username" 
              id="username"
              required
              autoComplete="off"
              placeholder="Enter full name"
              />
              </div>
              <div>
              <label htmlFor="email">Email Address</label>
              <input 
              type="email" 
              name="email" 
              id="email"
              required
              autoComplete="off"
              placeholder="Enter valid email"
              />
              </div>
              </div>
              <div>
              <label htmlFor="message">Message</label>
              <textarea 
              type="text" 
              name="message" 
              id="message"
              required
              autoComplete="off"
              placeholder="Enter a message!"
              ></textarea>
              </div>
              <div className="mt-3">
                <button type="submit" className="btn contact-btn">submit</button>
              </div>
            </Form>
          </div>
          <div className="contact-image">
            <figure>
              <img src="email.jpg" alt="" className="contact_image"/>
            </figure>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}