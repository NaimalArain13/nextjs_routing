import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
    
      {/* /* Created BY - Sagar Developer*/}
      <section className="bg-gray-900 text-white py-12">
        <nav className="flex items-center justify-between px-4 md:px-16">
          <Link href="/" className="text-2xl font-bold flex items-center hover:text-3xl hover:text-green-300
          cursor-pointer">
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
        <div className="max-w-4xl mx-auto px-4 md:px-0 mt-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold shadow-lg hover:text-indigo-600 cursor-pointer" >GET READY</h2>
            <p className="text-lg" id="headtext hover:text-blue500" >
              TO DISCOVER CAMPUS
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              consequuntur corrupti sapiente aut porro esse blanditiis in quae
              perspiciatis quo.
            </p>
            <Link
              href="#"
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full inline-block"
            >
              Visit Us To Know More
            </Link>
          </div>
        </div>
      

      {/* Course Section Start */}
      <section className="course bg-gray-100 py-12">
        <div className="PageBlock flex items-center justify-center">
          <div className="verticalLine h-12 border-l-2 border-gray-700"></div>
          <div className="Clear"></div>
        </div>
        <h1 className="text-xl md:text-5xl font-bold text-yellow-600 text-center mb-8">
          EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
        </h1>
        <p className="text-lg text-center mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        
        <div className="testimonials-wrapper flex flex-wrap justify-between">
          <div className="course-col  bd-white p-6 rounded-lg md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Undergraduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedi
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col md:w-1/3 px-4 mb-8 mdcourse-col  bd-white p-6 rounded-lg md:mb-0">
            <h3 className="text-xl font-bold mb-2">Graduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col  bd-white p-6 rounded-lg md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              Adult Learning & Degree Completion
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
        </div>
      </section>
      {/* Course Section End */}

      {/* Campus Section Start*/}

      <section className="campus bg-gray-100 py-12">
        <div className="PageBlock flex items-center justify-center">
          <div className="verticalLine h-12 border-l-2 border-gray-700"></div>
          <div className="Clear"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-8">
          TAKE OUR VIRTUAL TOUR
        </h1>
        <p className="text-lg text-center mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="testimonials-wrapper flex flex-wrap justify-between">
          <div className="campus-col md:w-1/3 px-4 mb-8 md:mb-0">
            <Image
              src="/img/Campus1.png"
              alt=""
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="layer bg-gray-800 text-white p-4 text-center rounded-b-lg">
              <h3 className="text-xl font-bold">DELHI</h3>
            </div>
          </div>
          <div className="campus-col md:w-1/3 px-4 mb-8 md:mb-0">
            <Image
              src="/img/Campus2.png"
              alt=""
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="layer bg-gray-800 text-white p-4 text-center rounded-b-lg">
              <h3 className="text-xl font-bold">HYDERABAD</h3>
            </div>
          </div>
          <div className="campus-col md:w-1/3 px-4 mb-8 md:mb-0">
            <Image
              src="/img/Campus3.png"
              alt=""
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="layer bg-gray-800 text-white p-4 text-center rounded-b-lg">
              <h3 className="text-xl font-bold">MUMBAI</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Campus Section End */}

      {/* Facilities Section Start */}
      <section className="facilities bg-gray-100 py-12">
        <div className="PageBlock flex items-center justify-center">
          <div className="verticalLine h-12 border-l-2 border-gray-700"></div>
          <div className="Clear"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-8">
          Our Facilities
        </h1>
        <p className="text-lg text-center mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="testimonials-wrapper flex flex-wrap justify-between">
          <div className="facilities-col md:w-1/3 px-4 mb-8 md:mb-0">
            <Image
              src="/img/libary.png"
              alt=""
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-bold mt-4">Best Library</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col md:w-1/3 px-4 mb-8 md:mb-0">
            <Image
              src="/img/playground.png"
              alt=""
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-bold mt-4">Athletics</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col md:w-1/3 px-4 mb-8 md:mb-0">
            <Image
              src="/img/food.png"
              alt=""
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-bold mt-4">Tasty and Healthy Food</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
        </div>
      </section>
      {/* Facilities Section End */}

      {/* Testimonials Section Start */}
      <section className="testimonials bg-gray-100 py-12">
        <div className="PageBlock flex items-center justify-center">
          <div className="verticalLine h-12 border-l-2 border-gray-700"></div>
          <div className="Clear"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-8">
          What Our Students Say
        </h1>
        <p className="text-lg text-center mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <div className="row max-w-4xl mx-auto mt-8">
          <div className="testimonials-wrapper flex flex-wrap justify-between">
            <div className="testimonials-col md:w-1/2 px-4 mb-8 md:mb-0">
              <Image
                src="/img/user.png"
                alt="oo.."
                width={500}
                height={400}
                className="w-20 h-20 rounded-full object-cover shadow-lg mx-auto mb-4"
              />
              <div className="text-center">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  maiores in nostrum rerum voluptatem praesentium veritatis
                  alias omnis voluptate nisi aperiam, voluptatum quibusdam
                  itaque a deserunt. In quia repellat maxime.
                </p>
                <h3 className="text-xl font-bold mt-4">Student Name</h3>
                <div className="flex justify-center mt-2">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                </div>
              </div>
            </div>
            <div className="testimonials-col md:w-1/2 px-4 mb-8 md:mb-0">
              <Image
                src="/img/user.png"
                alt="oo.."
                width={500}
                height={400}
                className="w-20 h-20 rounded-full object-cover shadow-lg mx-auto mb-4"
              />
              <div className="text-center">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  maiores in nostrum rerum voluptatem praesentium veritatis
                  alias omnis voluptate nisi aperiam, voluptatum quibusdam
                  itaque a deserunt. In quia repellat maxime.
                </p>
                <h3 className="text-xl font-bold mt-4">Student Name</h3>
                <div className="flex justify-center mt-2">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star-half-alt text-yellow-500"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section End */}

      {/* Call To Action Section Start */}
      <section className="cta bg-gray-900 text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          GET READY FOR A BRIGHT FUTURE
        </h1>
        <Link
          href="/contact"
          className="block mt-6 mx-auto px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full"
        >
          CONTACT US
        </Link>
      </section>
      {/* Call To Action Section End  */}

      {/* Footer Section Start */}
      <section className="footer bg-gray-100 text-gray-800 py-8 px-4 md:px-0">
        <hr className="border-t-2 border-gray-300 mb-6" />
        <h4 className="text-xl font-semibold mb-4">About Us</h4>
        <p className="mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
          incidunt odio nam facilis, eligendi Itaque fugiat cupiditate
          consectetur. Aliquid ab deserunt exercitationem, illum molestiae
          dolorem.
        </p>

        <div className="icons flex mb-4">
          <i className="fab fa-facebook-f text-lg mr-4"></i>
          <i className="fab fa-instagram text-lg mr-4"></i>
          <i className="fab fa-twitter text-lg mr-4"></i>
          <i className="fab fa-linkedin text-lg"></i>
        </div>
        <p className="mb-2">
          Made with <i className="fas fa-heart text-red-500"></i> by{" "}
          <Link href="/" className="text-blue-500">
            Sagar Developer
          </Link>
        </p>
        <p>
          Copyright © 2021{" "}
          <Link href="/" className="text-blue-500">
            Xplore Skill
          </Link>
          . All Rights Reserved
        </p>
      </section>
      {/* Footer Section End */}

      <script src="script.js"></script>
    </main>
  );
}
