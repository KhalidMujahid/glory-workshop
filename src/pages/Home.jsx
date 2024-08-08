import { Link } from "react-router-dom";
import carousel1 from "../img/carousel-1.jpg";
import carousel2 from "../img/carousel-2.jpg";
import carousel3 from "../img/carousel-3.jpg";
import blog1 from "../img/blog-1.jpg";
import blog2 from "../img/blog-2.jpg";
import blog3 from "../img/blog-3.jpg";
import blog4 from "../img/blog-4.jpg";
import blog5 from "../img/blog-5.jpg";
import blog6 from "../img/blog-6.jpg";
import profile from "../img/profile.jpg";

const Home = () => {
  return (
    <div class="">
        <div class="content">
            <div class="container p-0">
                <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
                    <h4 class="navbar-brand d-block d-lg-none">
                      Menu
                    </h4>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav m-auto">
                            <Link to="/" class="nav-item nav-link active">Home</Link>
                            <Link to="/about" class="nav-item nav-link">About</Link>
                        
                            <Link to="/contact" class="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
           
            <div class="container p-0">
                <div id="blog-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src={carousel1} alt="Image" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 class="mb-3 text-white font-weight-bold">Lorem ipsum dolor sit amet</h2>
                                <div class="d-flex text-white">
                                    <small class="mr-2"><i class="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                    <small class="mr-2"><i class="fa fa-folder"></i> Web Design</small>
                                    <small class="mr-2"><i class="fa fa-comments"></i> 15 Comments</small>
                                </div>
                                <a href="" class="btn btn-lg btn-outline-light mt-4">Read More</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src={carousel2} alt="Image" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 class="text-white font-weight-bold">Lorem ipsum dolor sit amet</h2>
                                <div class="d-flex">
                                    <small class="mr-2"><i class="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                    <small class="mr-2"><i class="fa fa-folder"></i> Web Design</small>
                                    <small class="mr-2"><i class="fa fa-comments"></i> 15 Comments</small>
                                </div>
                                <a href="" class="btn btn-lg btn-outline-light mt-4">Read More</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src={carousel3} alt="Image" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 class="text-white font-weight-bold">Lorem ipsum dolor sit amet</h2>
                                <div class="d-flex">
                                    <small class="mr-2"><i class="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                    <small class="mr-2"><i class="fa fa-folder"></i> Web Design</small>
                                    <small class="mr-2"><i class="fa fa-comments"></i> 15 Comments</small>
                                </div>
                                <a href="" class="btn btn-lg btn-outline-light mt-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#blog-carousel" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
           
            <div class="container bg-white pt-5">
                <div class="row blog-item px-3 pb-5">
                    <div class="col-md-5">
                        <img class="img-fluid mb-4 mb-md-0" src={blog1} alt="Image" />
                    </div>
                    <div class="col-md-7">
                        <h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex mb-3">
                            <small class="mr-2 text-muted"><i class="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                        <a class="btn btn-link p-0" href="">Read More <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
                <div class="row blog-item px-3 pb-5">
                    <div class="col-md-5">
                        <img class="img-fluid mb-4 mb-md-0" src={blog2} alt="Image" />
                    </div>
                    <div class="col-md-7">
                        <h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex mb-3">
                            <small class="mr-2 text-muted"><i class="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                        <a class="btn btn-link p-0" href="">Read More <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
                <div class="row blog-item px-3 pb-5">
                    <div class="col-md-5">
                        <img class="img-fluid mb-4 mb-md-0" src={blog3} alt="Image" />
                    </div>
                    <div class="col-md-7">
                        <h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex mb-3">
                            <small class="mr-2 text-muted"><i class="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                        <a class="btn btn-link p-0" href="">Read More <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
           
            <div class="container py-5 px-4 bg-secondary text-center">
                <h1 class="text-white font-weight-bold">Subscribe My Newsletter</h1>
                <p class="text-white">Subscribe and get my latest article in your inbox</p>
                <form class="form-inline justify-content-center">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Your Email" />
                        <div class="input-group-append">
                          <button class="btn btn-primary" type="submit">Subscribe</button>
                        </div>
                      </div>
                </form>
            </div>
          
            <div class="container bg-white pt-5">
                <div class="row blog-item px-3 pb-5">
                    <div class="col-md-5">
                        <img class="img-fluid mb-4 mb-md-0" src={blog4} alt="Image" />
                    </div>
                    <div class="col-md-7">
                        <h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex mb-3">
                            <small class="mr-2 text-muted"><i class="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                        <a class="btn btn-link p-0" href="">Read More <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
                <div class="row blog-item px-3 pb-5">
                    <div class="col-md-5">
                        <img class="img-fluid mb-4 mb-md-0" src={blog5} alt="Image" />
                    </div>
                    <div class="col-md-7">
                        <h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex mb-3">
                            <small class="mr-2 text-muted"><i class="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                        <a class="btn btn-link p-0" href="">Read More <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
                <div class="row blog-item px-3 pb-5">
                    <div class="col-md-5">
                        <img class="img-fluid mb-4 mb-md-0" src={blog6} alt="Image" />
                    </div>
                    <div class="col-md-7">
                        <h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                        <div class="d-flex mb-3">
                            <small class="mr-2 text-muted"><i class="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> Web Design</small>
                            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> 15 Comments</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                        </p>
                        <a class="btn btn-link p-0" href="">Read More <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
           
            <div class="container py-4 bg-secondary text-center">
                <p class="m-0 text-white">
                    &copy; <a class="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by <a class="text-white font-weight-bold" href="https://appzeent.netlify.app">AppZeent</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home;