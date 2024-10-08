import { Link } from "react-router-dom";
import profile from "../img/profile.jpg";

const Contact = () => {
  return (
    <div className="">
      
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
                                <Link to="/" class="nav-item nav-link">Home</Link>
                                <Link to="/about" class="nav-item nav-link">About</Link>
                                
                                <Link to="/contact" class="nav-item nav-link active">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>

                <div class="container py-5 px-2 bg-primary">
                    <div class="row py-5 px-4">
                        <div class="col-sm-6 text-center text-md-left">
                            <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Contact Me</h1>
                        </div>
                        <div class="col-sm-6 text-center text-md-right">
                            <div class="d-inline-flex pt-2">
                                <h4 class="m-0 text-white"><a class="text-white" href="">Home</a></h4>
                                <h4 class="m-0 text-white px-2">/</h4>
                                <h4 class="m-0 text-white">Contact Me</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container bg-white pt-5">
                    <div class="row px-3 pb-2">
                        <div class="col-sm-4 text-center mb-3">
                            <i class="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                            <h4 class="font-weight-bold">Address</h4>
                            <p>123 Street, New York, USA</p>
                        </div>
                        <div class="col-sm-4 text-center mb-3">
                            <i class="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                            <h4 class="font-weight-bold">Phone</h4>
                            <p>+012 345 6789</p>
                        </div>
                        <div class="col-sm-4 text-center mb-3">
                            <i class="far fa-2x fa-envelope mb-3 text-primary"></i>
                            <h4 class="font-weight-bold">Email</h4>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div class="col-md-12 pb-5">
                        <div class="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea class="form-control" rows="8" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn btn-primary" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
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

export default Contact