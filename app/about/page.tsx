import Image from "next/image";
import Link from "next/link";
export default function About() {
  
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
{/* <h1 className="text-3xl font-bold mb-8">About Us</h1> */}
{/* About Us Section Start  */}
<section className="about-us bg-gray-100 py-12 px-8">
    <div className="container mx-auto">
        <div className="flex flex-cols-1 lg:flex-row justify-center items-center">
            <div className="about-col lg:w1/2 lg;mr-4 text-center">
                <h1 className="text-3xl font-bold mb-8">We are the world's largest University</h1>
                <p className="text-lg mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <Link href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-600">EXPLORE NOW</Link>
            </div>
            <div className="about-col lg:w-1/2 mt-6 lg:mt-0">
                <Image 
                src="/img/about.png"
                 alt="picture"
                 loading="lazy"
                 width={500}
                 height={400} 
                 decoding="async"
                 className=" rounded-lg shadow-lg"
               />
            </div>
        </div>
    </div>
</section>

     {/* About Us Section end */

     /*Footer Section start  */}
    <section className="footer bg-gray-200 py-8 px-4">
    <hr className= "my-4" />
    <h4 className="text-3lg font-bold mb-8 text-center">About Us</h4>
    <p className="text-lg text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
        <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
    </p>
    <div className="icons flex mb-4">
        <i className="fab fa-facebook-f mr-4"></i>
        <i className="fab fa-instagram mr-4"></i>
        <i className="fab fa-twitter mr-4"></i>
        <i className="fab fa-linkedin"></i>
    </div>
    <p className="text-sm mb-1">Made with <i className="fas fa-heart"></i> by <Link href="#" className="text-blue-400">Sagar Developer</Link></p>
    <p className="text-sm">Copyright © 2021 <Link href="/" className="text-blue-400">Xplore Skill</Link>. All Rights Reserved</p>
</section>
    
      
    </main>
  );
}