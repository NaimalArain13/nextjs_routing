import Image from "next/image";
import Link from "next/link";
export default function Courses() {
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
   <h1 className="text-3xl font-bold mt-8 text-center">Our Courses</h1>
    {/* <!-- course start --> */}

    <section className="course bg-gray-100 px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Courses We Offer</h1>
    <p className="text-lg mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="course-col bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Undergraduate Programs</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
        </div>
        <div className="course-col bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Graduate Programs</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
        </div>
        <div className="course-col bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Adult Learning & Degree Completion</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
        </div>
    </div>
</section>

    {/* <!-- course end -->

    <!-- best course start --> */}

<section className="facilities bg-gray-100 px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Best Courses</h1>
    <p className="text-lg mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="facilities-col bg-white rounded-lg shadow-lg p-4">
            <Image src="/img/course1.png" 
            alt="" 
            loading="lazy"
            width={500}
            height={400} 
            decoding="async"
            className="w-full mb-4" />
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
        </div>
        <div className="facilities-col bg-white rounded-lg shadow-lg p-4">
            <Image src="/img/course2.png"
             alt=""
             loading="lazy"
             width={500}
             height={400} 
             decoding="async"
             className="w-full mb-4" />
            <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
        </div>
        <div className="facilities-col bg-white rounded-lg shadow-lg p-4">
            <Image src="/img/course3.png"
             alt="" 
             loading="lazy"
             width={500}
             height={400} 
             decoding="async"
             className="w-full mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Science</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
        </div>
    </div>
</section>

    {/* <!-- best courses end -->

    <!-- Footer start --> */}
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
    {/* <!-- Footer end --> */}

    
    </main>
  );
}