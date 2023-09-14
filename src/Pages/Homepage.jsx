import { Poster,FeaturedMovie, Footer } from "../layout"

const Homepage = () => {
  return (
    <div className="pb-5 md:pb-10">
        <Poster/>
        <FeaturedMovie/>
        <Footer/>
    </div>
  )
}

export default Homepage