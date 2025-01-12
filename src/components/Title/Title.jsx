
export default function Title({title, titleColor}) {
  return (
    <div className={titleColor}>
      <h1 className="h1 mb-0 text-uppercase fw-bold ">{title}</h1>
      <div className="star d-flex align-items-center justify-content-center">
        <div className='mb-2 fw-bolder pe-2'>_____</div>
        <i className="fa-solid fa-star fs-5"></i>
        <div className='mb-2 fw-bolder ps-2'>_____</div>
      </div>
    </div>
  )
}

