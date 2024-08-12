import { Link } from "react-router-dom";
import about from "../img/glory.jpg";

const About = () => {
  return (
    <div class="">
      <div class="content">
        <div class="container p-0">
          <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
            <h4 class="navbar-brand d-block d-lg-none">
              Menu
            </h4>
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div class="navbar-nav m-auto">
                <Link to="/" class="nav-item nav-link">
                  Home
                </Link>
                <Link to="/about" class="nav-item nav-link active">
                  About
                </Link>
                
                <Link to="/contact" class="nav-item nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div class="container py-5 px-2 bg-primary">
          <div class="row py-5 px-4">
            <div class="col-sm-6 text-center text-md-left">
              <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">
                About Me
              </h1>
            </div>
            <div class="col-sm-6 text-center text-md-right">
              <div class="d-inline-flex pt-2">
                <h4 class="m-0 text-white">
                  <a class="text-white" href="">
                    Home
                  </a>
                </h4>
                <h4 class="m-0 text-white px-2">/</h4>
                <h4 class="m-0 text-white">About Me</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="container bg-white pt-5">
          <div class="row px-3 pb-5">
            <div class="col-md-12">
              <h2 class="mb-4 font-weight-bold">
                Article writer with 10 years of experience
              </h2>
              <img
                class="img-fluid float-left w-50 mr-4 mb-3"
                src={about}
                alt="Image"
              />
              <p class="m-0">
                Takimata lorem et ut et diam amet dolor gubergren, amet dolor
                eirmod sea sea invidunt, sed no sed diam ipsum ut et. Sit nonumy
                est ut consetetur sed, labore dolor ipsum sed ea dolor lorem
                erat et erat, consetetur sed labore duo voluptua rebum sed
                gubergren. Dolores nonumy sanctus erat clita stet sed, dolore
                justo diam eos aliquyam diam. Clita nonumy rebum dolor dolor eos
                takimata labore diam sed, et voluptua et invidunt sanctus, elitr
                dolor nonumy tempor dolor elitr lorem no dolor ipsum, ut at
                gubergren dolor est aliquyam stet, et sea takimata rebum labore
                erat duo invidunt lorem. At takimata stet diam dolore accusam,
                kasd at diam aliquyam diam sed est dolor takimata. Sadipscing
                rebum diam ea et tempor, eirmod et et invidunt voluptua et dolor
                sit. Labore labore clita et amet sea sit et, est ipsum eirmod
                amet voluptua dolore, diam eirmod kasd lorem gubergren clita at
                amet, sea accusam vero amet lorem eos sed diam sit amet, nonumy
                ipsum et tempor magna dolores aliquyam vero eos ipsum. Ipsum
                ipsum sadipscing diam aliquyam diam et ipsum eos vero, gubergren
                magna elitr elitr clita dolor. Aliquyam vero sed sanctus sed
                dolore sanctus elitr no amet, ea magna ipsum.
              </p>
            </div>
            <div class="col-md-12 pt-4">
              <div class="d-flex flex-column skills">
                <div class="progress w-100 mb-4">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Adaptability
                  </div>
                </div>
                <div class="progress w-100 mb-4">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Research
                  </div>
                </div>
                <div class="progress w-100">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Editing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-4 bg-secondary text-center">
          <p class="m-0 text-white">
            &copy;{" "}
            <a class="text-white font-weight-bold" href="#">
              Your Site Name
            </a>
            . All Rights Reserved. Designed by{" "}
            <a
              class="text-white font-weight-bold"
              href="https://appzeent.netlify.app"
            >
              AppZeent
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
