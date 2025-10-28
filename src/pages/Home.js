import Banner from "../Component/Banner";
import Services from "../Component/Services";
import Marquee from "../Component/Marquee";
import Mission from "../Component/Mission";
import ClientTestimonials from "../Component/Client-Testimonials ";
import bannerbg from "../images/bannerbg.png"
import Contact from "../Component/Contact"
const Home = () => {
    return (
      <>
        <section><Banner/></section>
        <section className="pb-8"><Services/></section>
        <section className='mt-28'><Mission title='About Us'/></section>
        <section> <ClientTestimonials/></section>
        <section className='Contact_section mt-5 mb-28'><Contact/></section>
      </>

    )
}

export default Home;