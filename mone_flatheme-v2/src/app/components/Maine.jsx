import Image from "next/image";


const HeroSection = () => {
  return (
    <div className="hero-section py-[130px]">
      <h1 className="hero-heading sm:text-6xl md:text-7xl lg:text-8xl text-center">Ojeh Agbaje</h1>
    </div>        
  )
}

const HeroBanner = () => {
  return (
    <div className="container px-[20px] mx-auto bg-red-500">
      
    </div>
  )
}


const Services = () => {
  return (
    <div id="services" className="section">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 xl:gap-5">
          <div className="w-full xl:w-1/3">
            <span className="title-heading text-gray-400">Services</span>
            <h1 className="text-3xl font-medium mb-0">
              What I <span className="text-gradient">Do</span>
            </h1>
          </div>
          <div className="w-full xl:w-2/3">
            <div className="flex flex-wrap gap-4">
              {/* Service box 1 */}
              <div className="w-full">
                <div className="service-box p-4 border rounded-lg shadow-lg">
                  <div className="service-order">
                    <h3 className="text-xl font-bold">01/</h3>
                  </div>
                  <div className="service-title flex items-center">
                    <i className="bi bi-brush text-2xl mr-2"></i>
                    <h3 className="text-xl font-semibold">Design</h3>
                  </div>
                  <div className="service-text mt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                  </div>
                </div>
              </div>
              {/* Service box 2 */}
              <div className="w-full">
                <div className="service-box p-4 border rounded-lg shadow-lg">
                  <div className="service-order">
                    <h3 className="text-xl font-bold">02/</h3>
                  </div>
                  <div className="service-title flex items-center">
                    <i className="bi bi-code-slash text-2xl mr-2"></i>
                    <h3 className="text-xl font-semibold">Development</h3>
                  </div>
                  <div className="service-text mt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                  </div>
                </div>
              </div>
              {/* Service box 3 */}
              <div className="w-full">
                <div className="service-box p-4 border rounded-lg shadow-lg">
                  <div className="service-order">
                    <h3 className="text-xl font-bold">03/</h3>
                  </div>
                  <div className="service-title flex items-center">
                    <i className="bi bi-laptop text-2xl mr-2"></i>
                    <h3 className="text-xl font-semibold">Marketing</h3>
                  </div>
                  <div className="service-text mt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Clients = () => {
  return (
    <div className="section pt-0">
      <div className="container mx-auto px-4">
        <div className="swiper clients-slider">
          <div className="swiper-wrapper">
            {/* Slider Item 1 */}
            <div className="swiper-slide">
              <div className="client-box">
                <a href="#">
                  <img src="/assets/images/client-1-light.png" alt="Client 1" />
                </a>
              </div>
            </div>
            {/* Slider Item 2 */}
            <div className="swiper-slide">
              <div className="client-box">
                <a href="#">
                  <img src="/assets/images/client-2-light.png" alt="Client 2" />
                </a>
              </div>
            </div>
            {/* Slider Item 3 */}
            <div className="swiper-slide">
              <div className="client-box">
                <a href="#">
                  <img src="/assets/images/client-3-light.png" alt="Client 3" />
                </a>
              </div>
            </div>
            {/* Slider Item 4 */}
            <div className="swiper-slide">
              <div className="client-box">
                <a href="#">
                  <img src="/assets/images/client-4-light.png" alt="Client 4" />
                </a>
              </div>
            </div>
            {/* Slider Item 5 */}
            <div className="swiper-slide">
              <div className="client-box">
                <a href="#">
                  <img src="/assets/images/client-5-light.png" alt="Client 5" />
                </a>
              </div>
            </div>
            {/* Slider Item 6 */}
            <div className="swiper-slide">
              <div className="client-box">
                <a href="#">
                  <img src="/assets/images/client-6-light.png" alt="Client 6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Portfolio = () => {
  return (
    <div id="portfolio" className="section-box">
      <div className="section-sm bg-dark rounded-lg">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <span className="title-heading text-gray-400">Portfolio</span>
              <h1 className="text-3xl font-medium mb-4">
                Recent <span className="text-gradient">Works</span>
              </h1>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
              {/* Slider Nav */}
              <div className="mt-4 flex justify-center space-x-4">
                <div className="swiper-portfolio-prev button-circle cursor-pointer disabled:opacity-50" role="button" aria-label="Previous slide">
                  <i className="bi bi-arrow-left"></i>
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="swiper-portfolio-next button-circle cursor-pointer" role="button" aria-label="Next slide">
                  <i className="bi bi-arrow-right"></i>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              {/* end Slider Nav */}
            </div>
          </div>
          <div className="swiper portfolio-slider mt-4 mt-lg-5">
            <div className="swiper-wrapper">
              {/* Slider Item 1 */}
              <div className="swiper-slide">
                <div className="portfolio-box">
                  {/* Image */}
                  <div className="portfolio-img">
                    <a href="portfolio-single.html">
                      <img src="/assets/images/portfolio-1.jpg" alt="Portfolio 1" />
                    </a>
                  </div>
                  <div className="pt-4">
                    {/* Categories */}
                    <ul className="list-inline-dot sm-heading text-white mb-2">
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Visual Art">Visual Art</span>
                        </a>
                      </li>
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Concept">Concept</span>
                        </a>
                      </li>
                    </ul>
                    {/* Caption */}
                    <h2>
                      <a className="portfolio-caption" href="portfolio-single.html">
                        <i className="bi bi-arrow-right"></i>
                        Fold Twist Abstract
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              {/* Slider Item 2 */}
              <div className="swiper-slide">
                <div className="portfolio-box">
                  {/* Image */}
                  <div className="portfolio-img">
                    <a href="portfolio-single.html">
                      <img src="/assets/images/portfolio-2.jpg" alt="Portfolio 2" />
                    </a>
                  </div>
                  <div className="pt-4">
                    {/* Categories */}
                    <ul className="list-inline-dot sm-heading text-white mb-2">
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="3D Modeling">3D Modeling</span>
                        </a>
                      </li>
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Visual Art">Visual Art</span>
                        </a>
                      </li>
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Concept">Concept</span>
                        </a>
                      </li>
                    </ul>
                    {/* Caption */}
                    <h2>
                      <a className="portfolio-caption" href="portfolio-single.html">
                        <i className="bi bi-arrow-right"></i>
                        Colors of Circle
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              {/* Slider Item 3 */}
              <div className="swiper-slide">
                <div className="portfolio-box">
                  {/* Image */}
                  <div className="portfolio-img">
                    <a href="portfolio-single.html">
                      <img src="/assets/images/portfolio-3.jpg" alt="Portfolio 3" />
                    </a>
                  </div>
                  <div className="pt-4">
                    {/* Categories */}
                    <ul className="list-inline-dot sm-heading text-white mb-2">
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Visual Art">Visual Art</span>
                        </a>
                      </li>
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Concept">Concept</span>
                        </a>
                      </li>
                    </ul>
                    {/* Caption */}
                    <h2>
                      <a className="portfolio-caption" href="portfolio-single.html">
                        <i className="bi bi-arrow-right"></i>
                        Fold Twist Abstract
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              {/* Slider Item 4 */}
              <div className="swiper-slide">
                <div className="portfolio-box">
                  {/* Image */}
                  <div className="portfolio-img">
                    <a href="portfolio-single.html">
                      <img src="/assets/images/portfolio-4.jpg" alt="Portfolio 4" />
                    </a>
                  </div>
                  <div className="pt-4">
                    {/* Categories */}
                    <ul className="list-inline-dot sm-heading text-white mb-2">
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="3D Modeling">3D Modeling</span>
                        </a>
                      </li>
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Visual Art">Visual Art</span>
                        </a>
                      </li>
                    </ul>
                    {/* Caption */}
                    <h2>
                      <a className="portfolio-caption" href="portfolio-single.html">
                        <i className="bi bi-arrow-right"></i>
                        Visual Art of Cubes
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Awards = () => {
  return (
    <div id="awards" className="section pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 xl:gap-5">
          <div className="w-full xl:w-1/3">
            <span className="title-heading text-gray-400">Achievements</span>
            <h1 className="text-3xl font-medium mb-0">
              Awa<span className="text-gradient">rds</span>
            </h1>
          </div>
          <div className="w-full xl:w-2/3">
            <div className="flex flex-wrap gap-4">
              {/* Award box 1 */}
              <div className="w-full md:w-1/2">
                <div className="fancy-box p-4 border rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold">Best Designer of the Month</h4>
                  <h6 className="text-sm text-gray-400 mb-2">2023</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
              {/* Award box 2 */}
              <div className="w-full md:w-1/2">
                <div className="fancy-box p-4 border rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold">The True Gem</h4>
                  <h6 className="text-sm text-gray-400 mb-2">2023</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                </div>
              </div>
              {/* Award box 3 */}
              <div className="w-full md:w-1/2">
                <div className="fancy-box p-4 border rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold">First Class Performer</h4>
                  <h6 className="text-sm text-gray-400 mb-2">2022</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                </div>
              </div>
              {/* Award box 4 */}
              <div className="w-full md:w-1/2">
                <div className="fancy-box p-4 border rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold">Customers Favourite</h4>
                  <h6 className="text-sm text-gray-400 mb-2">2021</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Testimonials = () => {
  return (
    <div id="testimonial" className="section">
      <div className="container mx-auto px-4">
        <div className="swiper testimonial-slider">
          <div className="swiper-wrapper">
            {/* Slider item 1 */}
            <div className="swiper-slide">
              <div className="testimonial-box p-4 border rounded-lg shadow-lg">
                <div className="testimonial-avatar mb-4">
                  <img src="/assets/images/testimonial-1.jpg" alt="Marcella Leonard" className="rounded-full w-24 h-24 mx-auto" />
                </div>
                <div className="testimonial-content text-center">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold">Marcella Leonard</h3>
                    <span className="text-sm text-gray-400">Creative Director</span>
                  </div>
                  <p className="text-lg italic leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
            </div>
            {/* Slider item 2 */}
            <div className="swiper-slide">
              <div className="testimonial-box p-4 border rounded-lg shadow-lg">
                <div className="testimonial-avatar mb-4">
                  <img src="/assets/images/testimonial-2.jpg" alt="Bradley Mendez" className="rounded-full w-24 h-24 mx-auto" />
                </div>
                <div className="testimonial-content text-center">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold">Bradley Mendez</h3>
                    <span className="text-sm text-gray-400">CTO - Company</span>
                  </div>
                  <p className="text-lg italic leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
            </div>
            {/* Slider item 3 */}
            <div className="swiper-slide">
              <div className="testimonial-box p-4 border rounded-lg shadow-lg">
                <div className="testimonial-avatar mb-4">
                  <img src="/assets/images/testimonial-3.jpg" alt="Linda Adams" className="rounded-full w-24 h-24 mx-auto" />
                </div>
                <div className="testimonial-content text-center">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold">Linda Adams</h3>
                    <span className="text-sm text-gray-400">Project Manager</span>
                  </div>
                  <p className="text-lg italic leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
            </div>
          </div>
          {/* Slider Pagination Progress */}
          <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal">
            <span className="swiper-pagination-progressbar-fill"></span>
          </div>
          {/* end Slider Pagination Progress */}
        </div>
      </div>
    </div>
  )
}


const Blog = () => {
  return (
    <div id="blog" className="section-box">
      <div className="section-sm bg-dark rounded-lg">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <span className="title-heading text-gray-400">Journal</span>
              <h1 className="text-3xl font-medium mb-4">
                Blog <span className="text-gradient">Posts</span>
              </h1>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
              {/* Slider Nav */}
              <div className="mt-4 flex justify-center space-x-4">
                <div className="swiper-blog-prev button-circle cursor-pointer disabled:opacity-50" role="button" aria-label="Previous slide">
                  <i className="bi bi-arrow-left"></i>
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="swiper-blog-next button-circle cursor-pointer" role="button" aria-label="Next slide">
                  <i className="bi bi-arrow-right"></i>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              {/* end Slider Nav */}
            </div>
          </div>
          <div className="swiper blog-slider mt-4 mt-lg-5">
            <div className="swiper-wrapper">
              {/* Slide Item 1 */}
              <div className="swiper-slide">
                <div className="blog-post-box p-4 border rounded-lg shadow-lg">
                  <div className="blog-post-img mb-4">
                    <a className="blog-post-img-link" href="blog-single.html">
                      <img src="/assets/images/blog-1.jpg" alt="Blog 1" className="rounded-lg w-full" />
                    </a>
                    <div className="blog-post-category mt-2">
                      <a href="#" className="text-sm text-gray-400">
                        <span data-text="Tips &amp; Tricks">Tips &amp; Tricks</span>
                      </a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <ul className="list-inline-dot sm-heading text-white mb-2">
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="by Admin">by Admin</span>
                        </a>
                      </li>
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Oct 12">Oct 12</span>
                        </a>
                      </li>
                    </ul>
                    <h2 className="mb-0">
                      <a className="blog-caption" href="blog-single.html">
                        <i className="bi bi-arrow-right"></i>
                        The Art of Coffee Making
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              {/* Slide Item 2 */}
              <div className="swiper-slide">
                <div className="blog-post-box p-4 border rounded-lg shadow-lg">
                  <div className="blog-post-img mb-4">
                    <a className="blog-post-img-link" href="blog-single.html">
                      <img src="/assets/images/blog-2.jpg" alt="Blog 2" className="rounded-lg w-full" />
                    </a>
                    <div className="blog-post-category mt-2">
                      <a href="#" className="text-sm text-gray-400">
                        <span data-text="Lifestyle">Lifestyle</span>
                      </a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <ul className="list-inline-dot sm-heading text-white mb-2">
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="by Admin">by Admin</span>
                        </a>
                      </li>
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Oct 11">Oct 11</span>
                        </a>
                      </li>
                    </ul>
                    <h2 className="mb-0">
                      <a className="blog-caption" href="blog-single.html">
                        <i className="bi bi-arrow-right"></i>
                        Optimizing Work Environment
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              {/* Slide Item 3 */}
              <div className="swiper-slide">
                <div className="blog-post-box p-4 border rounded-lg shadow-lg">
                  <div className="blog-post-img mb-4">
                    <a className="blog-post-img-link" href="blog-single.html">
                      <img src="/assets/images/blog-3.jpg" alt="Blog 3" className="rounded-lg w-full" />
                    </a>
                    <div className="blog-post-category mt-2">
                      <a href="#" className="text-sm text-gray-400">
                        <span data-text="Tips &amp; Tricks">Tips &amp; Tricks</span>
                      </a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <ul className="list-inline-dot sm-heading text-white mb-2">
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="by Admin">by Admin</span>
                        </a>
                      </li>
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Oct 10">Oct 10</span>
                        </a>
                      </li>
                    </ul>
                    <h2 className="mb-0">
                      <a className="blog-caption" href="blog-single.html">
                        <i className="bi bi-arrow-right"></i>
                        How I come up with New Ideas
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              {/* Slide Item 4 */}
              <div className="swiper-slide">
                <div className="blog-post-box p-4 border rounded-lg shadow-lg">
                  <div className="blog-post-img mb-4">
                    <a className="blog-post-img-link" href="blog-single.html">
                      <img src="/assets/images/blog-4.jpg" alt="Blog 4" className="rounded-lg w-full" />
                    </a>
                    <div className="blog-post-category mt-2">
                      <a href="#" className="text-sm text-gray-400">
                        <span data-text="Lifestyle">Lifestyle</span>
                      </a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <ul className="list-inline-dot sm-heading text-white mb-2">
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="by Admin">by Admin</span>
                        </a>
                      </li>
                      <li>
                        <a className="link-hover" href="#">
                          <span data-text="Oct 8">Oct 8</span>
                        </a>
                      </li>
                    </ul>
                    <h2 className="mb-0">
                      <a className="blog-caption" href="blog-single.html">
                        <i className="bi bi-arrow-right"></i>
                        Hard work and Patience
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Contact = () => {
  return (
    <div id="contact" className="section pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 xl:gap-5">
          <div className="w-full xl:w-1/3">
            <span className="title-heading text-gray-400">Contact</span>
            <h1 className="text-3xl font-medium mb-0">
              Let's <span className="text-gradient">Talk</span>
            </h1>
          </div>
          <div className="w-full xl:w-2/3">
            <div className="flex flex-wrap gap-4 lg:gap-5">
              <div className="w-full md:w-1/2">
                <h6 className="text-lg font-semibold">Email:</h6>
                <h3 className="mb-0">contact@flatheme.net</h3>
              </div>
              <div className="w-full md:w-1/2">
                <h6 className="text-lg font-semibold">Call:</h6>
                <h3 className="mb-0">+123 456 7890</h3>
              </div>
            </div>
            {/* Contact Form */}
            <div className="contact-form mt-4 mt-lg-5 text-right">
              <form method="post" id="contactform">
                <div className="flex flex-wrap gap-3">
                  <div className="w-full md:w-1/2">
                    <input type="text" id="name" name="name" placeholder="Name" required className="w-full p-2 border rounded" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input type="email" id="email" name="email" placeholder="E-Mail" required className="w-full p-2 border rounded" />
                  </div>
                </div>
                <input type="text" id="subject" name="subject" placeholder="Subject" required className="w-full p-2 border rounded mt-3" />
                <textarea name="message" id="message" placeholder="Message" className="w-full p-2 border rounded mt-3"></textarea>
                <button className="button button-dot mt-3" type="submit">
                  <span data-text="Send Message">Send Message</span>
                </button>
              </form>
              {/* Submit result */}
              <div className="submit-result mt-3">
                <span id="success" className="text-green-500">Thank you! Your Message has been sent.</span>
                <span id="error" className="text-red-500">Something went wrong, Please try again!</span>
              </div>
            </div>
            {/* end contact-form */}
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3963.8987097700747!2d3.391844000000007!3d6.534475000000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzInMDQuMSJOIDPCsDIzJzMwLjYiRQ!5e0!3m2!1sen!2sng!4v1737670811280!5m2!1sen!2sng"

              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 border-0 rounded-lg"
            />
          </div>
        </div>
      </div>

    </div>
  )
}




const Maine = () => {
  return (<>
    <HeroSection />
    <HeroBanner />
    <Services />
    <Clients />
    <Portfolio />
    <Awards />
    <Testimonials />
    <Blog />
    <Contact />
  </>

  )
}

export default Maine

{/* <Image
              src="/images/ojeh-2.jpg"
              width={240}
              height={240}
              alt="Picture of the author"
              className="rounded-full w-80 h-80 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-full lg:h-auto"
            /> */}






    //         <div className="container mx-auto px-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
    //   <div className="flex flex-wrap  -mt-6 w-full px-6">
    //     <div className="flex flex-wrap -mx-3 -mt-6">
    //       <div className="hero-avatar w-full px-3 mt-6">
            
    //       </div>
    //     </div>
    //     <div className="flex flex-wrap -mx-3 -mt-3">
    //       <div className="flex flex-wrap -mx-6 -mt-6">
    //         <div className="flex flex-wrap -mx-3">
    //           <h6 className="text-white font-outfit font-medium text-base mt-0 mb-2 leading-tight">Biography</h6>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    //         </div>
    //         <div className="flex flex-wrap -mx-3">
    //           <h6 className="text-lg font-semibold">Skills</h6>
    //           <ul className="list-disc pl-5">
    //             <li>Web Development</li>
    //             <li>UI &amp; UX Design</li>
    //             <li>Marketing</li>
    //             <li>SEO</li>
    //             <li>Management</li>
    //           </ul>
    //         </div>
    //         <div className="w-1/2 md:w-1/3 lg:w-full">
    //           <h6 className="text-lg font-semibold">Connect</h6>
    //           <ul className="list-none flex space-x-2">
    //             <li>
    //               <a className="button-circle button-circle-sm" href="#">
    //                 <i className="bi bi-facebook"></i>
    //                 <i className="bi bi-facebook"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a className="button-circle button-circle-sm" href="#">
    //                 <i className="bi bi-twitter"></i>
    //                 <i className="bi bi-twitter"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a className="button-circle button-circle-sm" href="#">
    //                 <i className="bi bi-instagram"></i>
    //                 <i className="bi bi-instagram"></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full lg:w-1/3 lg:order-3 text-lg-end">
    //       <div className="flex flex-wrap gap-4 lg:gap-5">
    //         <div className="w-1/3 lg:w-full">
    //           <h6 className="text-lg font-semibold">Projects Done</h6>
    //           <h1 className="font-light text-4xl mb-0 leading-tight">432</h1>
    //         </div>
    //         <div className="w-1/3 lg:w-full">
    //           <h6 className="text-lg font-semibold">Years of Experience</h6>
    //           <h1 className="font-light text-4xl mb-0 leading-tight">13+</h1>
    //         </div>
    //         <div className="w-1/3 lg:w-full">
    //           <h6 className="text-lg font-semibold">Worldwide Clients</h6>
    //           <h1 className="font-light text-4xl mb-0 leading-tight">900</h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
