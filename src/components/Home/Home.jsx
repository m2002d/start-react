import Title from "../Title/Title";
import imgUrl from "./../../assets/images/avatar.svg";
export default function Home() {
  return (
    <>
      <div className="home mt-5 py-5">
        <figure>
          <img src={imgUrl} alt="avatar" className="w-50 mb-4"/>
          <Title title={"start react"} titleColor={'text-light'}/>
          <p className="text-center text-light">Graphic Artist - Web Designer - Illustrator</p>
        </figure>

      </div>
    </>
  )
}
