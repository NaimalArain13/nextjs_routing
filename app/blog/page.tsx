
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
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
  <h1 className="text-3xl font-bold mt-8 text-center">Our Post</h1>
    {/* Blog Page Section Start */}
    <section className="blog-content">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-2/3 blog-left md:pr-8">
                <h2 className="text-2xl font-bold mb-2">Our Certificate & Online Program</h2>
                <h5 className="text-sm mb-4">Aug 1, 2021</h5>
                <Image src="/img/post.png"
                 alt="" 
                 loading="lazy"
                 width={500}
                 height={400} 
                 decoding="async"
                 className="w-full rounded-lg mb-4" />
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                    dolor consequatur, nobis quae obcaecati delectus at aspernatur,
                    placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit
                    odit cumque, quos doloribus sint id aperiam eius aliquam quo modi
                    sequi rem quia exercitationem laborum, ratione expedita! Deleniti
                    velit officia incidunt illum.
                </p>
                {/* You can repeat the pattern for other paragraphs */}
                <div className="comment-box">
                    <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
                    <form className="comment-form">
                        <input type="text" placeholder="Enter Name" required className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="email" placeholder="Enter Email" required className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <textarea rows={5} placeholder="Your Comment" className="w-full mb-2 p-2 border border-gray-300 rounded"></textarea>
                        <button type="submit" className= "hero_btn btn py-2 px-6 bg-blue-500 text-white rounded-full inline-block hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">POST COMMENT</button>
                    </form>
                </div>
            </div>
            <div className="w-full md:w-1/3 blog-right md:pl-8">
                <h3 className="text-lg font-bold mb-4">Post Categories</h3>
                <div className="mb-2">
                    <span className="mr-2">Business Analytics</span>
                    <span>12</span>
                </div>
                {/* You can repeat the pattern for other categories */}
            </div>
        </div>
    </div>
</section>
     {/* Blog Page Section end */} 
     {/* Footer Section start */}
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
    {/* Footer Section end */} 
  </main>
  );
}

