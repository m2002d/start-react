import Title from "../Title/Title";

export default function About() {
  return (
    <section className="about text-light py-5 mt-5" id="about">
      <div className="container pt-5">
        <Title title={'about'} titleColor={'text-light text-center'}/>
        <div className="row mx-auto w-75 g-4 mt-2">
            <div className="col-lg-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-lg-6">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
        </div>
      </div>
    </section>
  )
}

