
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<main>
<section className="bg-gray-900 text-white py-12">
        <nav className="flex items-center justify-between px-4 md:px-16">
          <Link href="/" className="text-2xl font-bold flex items-center">
            Xplore
            <i className="ml-1 fab fa-staylinked"></i>kill
          </Link>
          <div className="md:hidden">
            <i className="fas fa-bars text-xl"></i>
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:items-center"
            id="navLinks"
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-blue-500">
                  Course
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
   <h1 className="text-3xl font-bold mt-8 text-center">Contact Us</h1>
  {/* Contact Us Section Start */}
  
  <section className="location">
    <iframe
      className="w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
      height={450}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    />
</section>

<section className="contact-us bg-gray-100 py-8">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="content-col">
                <div className="flex items-center mb-4">
                    <i className="fa fa-home text-xl mr-2" />
                    <div>
                        <h5>NH9 Road, ABC Building</h5>
                        <p>Ghaziabad, Uttar Pradesh, IN</p>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <i className="fa fa-phone text-xl mr-2" />
                    <div>
                        <h5>+91 7445546525</h5>
                        <p>Monday To Saturday, 9AM To 6PM</p>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <i className="fa fa-envelope text-xl mr-2" />
                    <div>
                        <h5>xyz@email.com</h5>
                        <p>Email Us Your Query</p>
                    </div>
                </div>
            </div>
            <div className="content-col">
                <form>
                    <input type="text" placeholder="Enter Name" required className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
                    <input type="email" placeholder="Enter Email" required className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
                    <input type="text" placeholder="Enter Subject" required className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
                    <textarea rows={8} placeholder="Message" required className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"></textarea>
                    <button type="submit" className="hero_btn btn">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>
  
  {/* Contact Us Section End */}
  {/* Footer Section Start */}
  <section className="footer bg-gray-100 text-gray-800 px-4 py-8">
    <hr className="border-gray-400 mb-4" />
    <h4 className="text-lg font-bold mb-2">About Us</h4>
    <p className="text-sm mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
        incidunt odio nam facilis, eligendi
        <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
        exercitationem, illum molestiae dolorem.
    </p>
    <div className="icons flex mb-4">
        <i className="fab fa-facebook-f mr-2"></i>
        <i className="fab fa-instagram mr-2"></i>
        <i className="fab fa-twitter mr-2"></i>
        <i className="fab fa-linkedin"></i>
    </div>
    <p className="text-sm mb-2">
        Made with <i className="fas fa-heart text-red-500"></i> by{" "}
        <Link href="#" className="text-blue-500">Sagar Developer</Link>
    </p>
    <p className="text-sm">
        Copyright © 2021 <Link href="/" className="text-blue-500">Xplore Skill</Link>. All Rights
        Reserved
    </p>
</section>
  {/* Footer Section End */}
</main>
);
}


 

