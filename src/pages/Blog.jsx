import { Link } from "react-router-dom";
import blog1 from "../img/blog-1.jpg";
import blog2 from "../img/blog-2.jpg";
import blog3 from "../img/blog-3.jpg";
import blog4 from "../img/blog-4.jpg";
import blog5 from "../img/blog-5.jpg";
import blog6 from "../img/blog-6.jpg";

const Blog = () => {
  return (
    <div class="wrapper">
      
      <div class="content">
          
          <div class="container p-0">
              <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
                  <a href="" class="navbar-brand d-block d-lg-none">Menu</a>
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                      <div class="navbar-nav m-auto">
                          <Link to="/" class="nav-item nav-link">Home</Link>
                          <Link to="/about" class="nav-item nav-link">About</Link>
                          
                          <Link to="/contact" class="nav-item nav-link">Contact</Link>
                        
                      </div>
                  </div>
              </nav>
          </div>
          
          <div class="container py-5 px-2 bg-primary">
              <div class="row py-5 px-4">
                  <div class="col-sm-6 text-center text-md-left">
                      <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">My Blog</h1>
                  </div>
                  <div class="col-sm-6 text-center text-md-right">
                      <div class="d-inline-flex pt-2">
                          <h4 class="m-0 text-white"><a class="text-white" href="">Home</a></h4>
                          <h4 class="m-0 text-white px-2">/</h4>
                          <h4 class="m-0 text-white">My Blog</h4>
                      </div>
                  </div>
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
                  <div class="row px-3 pb-5">
                      <nav aria-label="Page navigation">
                        <ul class="pagination m-0 mx-3">
                          <li class="page-item disabled">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                          <li class="page-item active"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
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

export default Blog;