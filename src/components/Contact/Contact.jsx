import Title from "../Title/Title";

export default function Contact() {
  return (
    <section className="contact py-5" id="contact">
    <Title title={'contact us'} titleColor={'text-dark pt-5 text-center'}/>
        <div className="container w-75 py-5">
            <div className="form">
                <input type="text" className="form-control border-0 mb-2" placeholder="Name" />
                <input type="email" className="form-control border-0 mb-2" placeholder="Email Address" />
                <input type="tel" className="form-control border-0 mb-2" placeholder="Phone Number" />
                <textarea type="text" className="form-control border-0 mb-2" placeholder="Message"></textarea>
                <button className="btn text-light px-4 py-3 fw-semibold">Send Message</button>
                </div>
        </div>
      
    </section>
  )
}
