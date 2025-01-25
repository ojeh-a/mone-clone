import Image from "next/image"

const Main = () => {
  return (
    <main data-bs-spy="scroll" data-bs-target=".nav-box">
{/* <div id="cursor" style={{left: "200px", top: "1365px"}}></div> */}
        {/* <div className='py-20  bg-black snap-start'>
            <h1 className='text-center hero-heading display-1 fw-bold mb-0 stroke-text text-5xl'>Agbaje Ojeh</h1>
        </div> */}
        <div id="about" class="hero-section">
            <div className="container text-center">
                <div className="row">
                    <div col-12>
                        <h1 className="hero-heading display-1 fw-bold mb-0 text-9xl">Ojeh Agbaje</h1>
                    </div>
                </div>
            </div>
        </div>


        <div className="container mx-auto px-4">
  <div className="flex flex-wrap gap-4 md:gap-5">
    <div className="w-full lg:w-1/3 lg:order-2 text-center">
      <div className="hero-avatar">
        <Image
          src="/images/323229a122090d2391d9592b5ec1280d.jpg"
          width={240}
          height={240}
          alt="Picture of the author"
          className="rounded-full"
        />
      </div>
    </div>
    <div className="w-full lg:w-1/3 lg:order-1">
      <div className="flex flex-wrap gap-4 lg:gap-5">
        <div className="w-full md:w-1/3 lg:w-full">
          <h6 className="sm-heading">Biography</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-full">
          <h6 className="sm-heading">Skills</h6>
          <ul className="list-disc pl-5">
            <li>Web Development</li>
            <li>UI &amp; UX Design</li>
            <li>Marketing</li>
            <li>SEO</li>
            <li>Management</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-full">
          <h6 className="sm-heading">Connect</h6>
          <ul className="list-none flex space-x-2">
            <li>
              <a className="button-circle button-circle-sm" href="#">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a className="button-circle button-circle-sm" href="#">
                <i className="bi bi-twitter"></i>
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a className="button-circle button-circle-sm" href="#">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/3 lg:order-3 text-lg-end">
      <div className="flex flex-wrap gap-4 lg:gap-5">
        <div className="w-1/3 lg:w-full">
          <h6 className="sm-heading">Projects Done</h6>
          <h1 className="font-light text-4xl mb-0 leading-tight">432</h1>
        </div>
        <div className="w-1/3 lg:w-full">
          <h6 className="sm-heading">Years of Experience</h6>
          <h1 className="font-light text-4xl mb-0 leading-tight">13+</h1>
        </div>
        <div className="w-1/3 lg:w-full">
          <h6 className="sm-heading">Worldwide Clients</h6>
          <h1 className="font-light text-4xl mb-0 leading-tight">900</h1>
        </div>
      </div>
    </div>
  </div>
</div>
        


        <div className="grid grid-rows-1 grid-cols-3 bg-black">
                <div className="text-center">
                    <h1>Biograghy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sunt minima? Itaque eius laboriosam nemo ipsum sint ratione amet rerum omnis expedita fugiat, sed sapiente!
                    </p>
                    <ul>
                        SKILLS
                        <li>Web Development</li>
                        <li>Programming</li>
                        <li>Version Control</li>
                        <li>UX Design</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                <Image
                      src="/images/smile.jpg"
                      width={250}
                      height={400}
                      alt="Picture of the author"
                      className="rounded-full w-400 h-400 aspect-square"
                  />
                </div>
                  

                <div className="flex justify-center items-center">
                    <h1>Projects done</h1>
                    <h1>years of experience</h1>
                    <h1>worldwide clients</h1>

                </div>
        </div>



        <div>
            services
        </div>
        <div>
            portfollio
        </div>
        <div>
            achievements
        </div>

        <div>
            testimonials
        </div>

        <div>
            journal
        </div>

        <div>
            contact
        </div>
        <div>
            map 
        </div>
    </main>
  )
}

export default Main
