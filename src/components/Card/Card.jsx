import Title from "../Title/Title";

export default function Card({url, name, index}) {
    
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='trigger-modal rounded-3 position-relative overflow-hidden' data-bs-toggle="modal" data-bs-target={`#modal-${index}`}>
        <img className='w-100 d-block' src={url} alt={name}/>
        <div className="overflow end-0 top-0 bottom-0 start-0 position-absolute d-flex align-items-center justify-content-center">
          <i className="fab fa-face-angry fs-1 text-light"></i>
        </div>
      </div>
    
      <div className="modal fade" id={`modal-${index}`} aria-labelledby={`modalLabel-${index}`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
          <button type="button" className="btn-close position-absolute m-1 top-0 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modalHeader border-bottom-0">
              <h1 className="modal-title fs-5 " id={`modalLabel-${index}`}>
                <Title title={name} titleColor={'text-dark mt-3 text-center'}/>
              </h1>
              
            </div>
            <div className="modal-body">
              <img className="w-100 rounded-3 mt-2 mb-3" src={url} alt={name}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            </div>
            <div className="modal-footer border-top-0">
              <button type="button" className="btn btn-secondary mx-auto" data-bs-dismiss="modal">Close Window</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
