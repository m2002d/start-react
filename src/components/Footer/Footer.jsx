
export default function Footer() {
  return (
    <footer className="text-center text-light secColor">
        <div className="container py-5">
            <div className="row gy-3">
                <div className="col-lg-4">
                    <h4 className="text-uppercase fw-bold py-3">Location</h4>
                    <p>2215 John Daniel Drive<br/> Clark, MO 65243</p>
                </div>
                <div className="col-lg-4">
                    <h4 className="text-uppercase fw-bold py-3">Around the web</h4>
                    <ul className="d-flex align-items-center justify-content-center gap-2 list-unstyled px-3">
                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h4 className="text-uppercase fw-bold py-3">About freelancer</h4>
                    <p className="fw-semibold">Freelance is a free to use, MIT licensed Bootstrap theme created by Mahmoud Mohamed Mansy</p>
                </div>
            </div>
        </div>
        
        <div className="copyRight">
            <p className="m-0 py-4">Copyright © Mahmoud Mohamed 2025</p>
        </div>
      
    </footer>
  )
}
