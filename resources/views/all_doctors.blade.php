<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>medical</title>
    <link rel="icon" href="{{asset('assets/img/favicon.png')}}">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <!-- animate CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/animate.css')}}">
    <!-- owl carousel CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <!-- themify CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/themify-icons.css')}}">
    <!-- flaticon CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/flaticon.css')}}">
    <!-- magnific popup CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
    <!-- nice select CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/nice-select.css')}}">
    <!-- swiper CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/slick.css')}}">
    <!-- style CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />

</head>

<body>
    <!--::header part start::-->
    <header class="main_menu">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="/"> <img src="{{asset('assets/img/logo.png')}}" alt="logo"> </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse main-menu-item justify-content-end"
                            id="navbarSupportedContent">
                            <ul class="navbar-nav align-items-center">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{{route('about')}}">about</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{{route('all.doctors')}}">Doctors</a>
                                </li>

                                <li class="nav-item dropdown">
        
                                <a class="nav-link" href="{{route('all.services')}}">Services</a>

                                </li>

                                <li class="nav-item dropdown">
                                    
                                    <a class="nav-link" href="{{route('blog')}}">Blog</a>

                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="{{route('contact.us')}}">Contact</a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- Header part end-->

    <!-- breadcrumb start-->
    <section class="breadcrumb breadcrumb_bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb_iner">
                        <div class="breadcrumb_iner_item">
                            <h2>Doctors</h2>
                            <p>Home<span>/</span>Doctors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcrumb start-->

    <!--::doctor_part start::-->
    <section class="doctor_part section_padding single_doctor_part">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="section_tittle text-center">
                        <h2> Experienced Doctors</h2>
                        <p>Face replenish sea good winged bearing years air divide wasHave night male also</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="single_blog_item">
                        <div class="single_blog_img">
                        @foreach($doctors as $doctor)
                            <img src="{{asset($doctor->image)}}" alt="doctor">
                        </div>
                        <div class="single_text">
                            <div class="single_blog_text">
                                <h3>{{$doctor->first_name}} {{$doctor->last_name}}</h3>
                                <p>{{$doctor->departments->name}}</p>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--::doctor_part end::-->

    <!-- footer part start-->
    <footer class="footer-area">
        <div class="footer section_padding">
            <div class="container">
                <div class="row">
                    <div class="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Services Link</h4>
                        <ul>
                            <li><a href="#">Eye treatment</a></li>
                            <li><a href="#">Skin Surgery</a></li>
                            <li><a href="#">Diagnosis clinic</a></li>
                            <li><a href="#"> Dental care</a></li>
                            <li><a href="#">Neurology service</a></li>
                            <li><a href="#">Plastic surgery</a></li>
                        </ul>
                    </div>
                    <div class="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Department</a></li>
                            <li><a href="#"> Online payment</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Department</a></li>
                        </ul>
                    </div>

                    <div class="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#">In the community</a></li>
                            <li><a href="#">IU health foundation</a></li>
                            <li><a href="#">Family support </a></li>
                            <li><a href="#">Business solution</a></li>
                            <li><a href="#">Community clinic</a></li>
                        </ul>
                    </div>
                    <div class="col-xl-2 col-sm-4 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Lights were season</a></li>
                            <li><a href="#"> Their is let wherein</a></li>
                            <li><a href="#">which given over</a></li>
                            <li><a href="#">Without given She</a></li>
                            <li><a href="#">Isn two signs think</a></li>
                        </ul>
                    </div>
                    <div class="col-xl-4 col-sm-8 col-md-8 mb-4 mb-xl-0 single-footer-widget">
                        <h4>Newsletter</h4>
                        <p>Seed good winged wherein which night multiply
                            midst does not fruitful</p>
                        <div class="form-wrap" id="mc_embed_signup">
                            <form target="_blank"
                                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                method="get" class="form-inline">
                                <input class="form-control" name="EMAIL" placeholder="Your Email Address"
                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '"
                                    required="" type="email">
                                <button class="click-btn btn btn-default text-uppercase">subscribe</button>
                                <div style="position: absolute; left: -5000px;">
                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""
                                        type="text">
                                </div>

                                <div class="info"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright_part">
            <div class="container">
                <div class="row align-items-center">
                    <p class="footer-text m-0 col-lg-8 col-md-12"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy; All rights reserved | This template is made with by Mohamed Alalamey
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                    <div class="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                        <a href="#"><i class="ti-facebook"></i></a>
                        <a href="#"> <i class="ti-twitter"></i> </a>
                        <a href="#"><i class="ti-instagram"></i></a>
                        <a href="#"><i class="ti-skype"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- footer part end-->

    <!-- jquery plugins here-->

    <script src="js/jquery-1.12.1.min.js"></script>
    <!-- popper js -->
    <script src="js/popper.min.js"></script>
    <!-- bootstrap js -->
    <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
    <!-- easing js -->
    <script src="{{asset('assets/js/jquery.magnific-popup.js')}}"></script>
    <!-- swiper js -->
    <script src="{{asset('assets/js/swiper.min.js')}}"></script>
    <!-- swiper js -->
    <script src="{{asset('assets/js/masonry.pkgd.js')}}"></script>
    <!-- particles js -->
    <script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.nice-select.min.js')}}"></script>
    <!-- swiper js -->
    <script src="{{asset('assets/js/slick.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.counterup.min.js')}}"></script>
    <script src="{{asset('assets/js/waypoints.min.js')}}"></script>
    <!-- contact js -->
    <script src="{{asset('assets/js/jquery.ajaxchimp.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.form.js')}}"></script>
    <script src="{{asset('assets/js/jquery.validate.min.js')}}"></script>
    <script src="{{asset('assets/js/mail-script.js')}}"></script>
    <script src="{{asset('assets/js/contact.js')}}"></script>
    <!-- custom js -->
    <script src="{{asset('assets/js/custom.js')}}"></script>
</body>

</html>