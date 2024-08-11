import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import carousel1 from "../img/carousel-1.jpg";
import carousel2 from "../img/carousel-2.jpg";
import carousel3 from "../img/carousel-3.jpg";
import axios from "axios";
// import posts from "../data";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading,setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get("https://3816e87c-512b-4c0b-bf87-90d4b06d25ff-00-3f90mezg3jhq4.worf.repl.co/api/posts");
        if (response.status === 200) {
            setPosts(response.data);
            setLoading(false);
        } else {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div class="">
            <div class="content">
                <div class="container p-0">
                    <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
                        <h4 class="navbar-brand d-block d-lg-none">Menu</h4>
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
                                <Link to="/" class="nav-item nav-link active">
                                    Home
                                </Link>
                                <Link to="/about" class="nav-item nav-link">
                                    About
                                </Link>

                                <Link to="/contact" class="nav-item nav-link">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>

                <div class="container p-0">
                    <div
                        id="blog-carousel"
                        class="carousel slide"
                        data-ride="carousel"
                    >
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img
                                    class="w-100"
                                    src={carousel1}
                                    alt="Image"
                                />
                                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h2 class="mb-3 text-white font-weight-bold">
                                        Welcome to AdsHub blog
                                    </h2>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img
                                    class="w-100"
                                    src={carousel2}
                                    alt="Image"
                                />
                                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h2 class="text-white font-weight-bold">
                                        About me
                                    </h2>
                                   
                                    <Link
                                        to="/about"
                                        class="btn btn-lg btn-outline-light mt-4"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img
                                    class="w-100"
                                    src={carousel3}
                                    alt="Image"
                                />
                                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h2 class="text-white font-weight-bold">
                                        A place to have latest product Ads
                                    </h2>
                                   
                                    
                                </div>
                            </div>
                        </div>
                        <a
                            class="carousel-control-prev"
                            href="#blog-carousel"
                            data-slide="prev"
                        >
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href="#blog-carousel"
                            data-slide="next"
                        >
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>

                <div class="container bg-white pt-5">
                    {posts.map((post) => (
                        <div key={post._id} class="row blog-item px-3 pb-5">
                            <div class="col-md-5">
                                <img
                                    class="img-fluid mb-4 mb-md-0"
                                    src={post?.img == "" ? "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png" : post.img}
                                    alt="Image"
                                />
                            </div>
                            <div class="col-md-7">
                                <h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">
                                    {post.title}
                                </h3>
                                <div class="d-flex mb-3">
                                    <small class="mr-2 text-muted">
                                        <i class="fa fa-calendar-alt"></i>{" "}
                                        01-Jan-2045
                                    </small>
                                    <small class="mr-2 text-muted">
                                        <i class="fa fa-folder"></i> Web Design
                                    </small>
                                    <small class="mr-2 text-muted">
                                        <i class="fa fa-comments"></i> 15
                                        Comments
                                    </small>
                                </div>
                                <p>{post.body}</p>
                                <Link
                                    class="btn btn-link p-0"
                                    to={`/blog/${post._id}`}
                                >
                                    Read More <i class="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="container py-5 px-4 bg-secondary text-center">
                    <h1 class="text-white font-weight-bold">
                        Subscribe My Newsletter
                    </h1>
                    <p class="text-white">
                        Subscribe and get my latest article in your inbox
                    </p>
                    <form class="form-inline justify-content-center">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Your Email"
                            />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
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

export default Home;
