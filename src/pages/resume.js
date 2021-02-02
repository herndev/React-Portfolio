import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Resume() {

  return (
    <div id="resume">
      <section class="p-3">
        <h4 class="font-weight-bold text-primary-default display-inline">
          Resume
        </h4>
        <div class="row">
          <div class="col-md-6">
            <div class="key-points">
              <ul class="pl-5 pr-2 list-unstyled about">
                <li class="big">
                  <h5 class="font-weight-bold ml-3 underline-primary display-inline">ABOUT ME</h5>
                </li>
                <li>
                  <span class="font-weight-bold">Technical Skills</span><br />
                  <small>Proficient with:</small>
                  <p class="mt-2">HTML/CSS/Javascript, Wordpress, Laravel, ReactJs, Django, Vue, Flutter, Java, React native, Firebase, Mysql, Monggo DB, Postgres SQL, Python3, MEAN, Unix/Linux, Git, Agile [Scrum]</p>
                </li>
                <li>
                  <span class="font-weight-bold">Interests</span><br />
                  <p class="mt-2">Machine learning, Data analysis, Algorithms, Web & Mobile App Development</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="key-points">
              <ul class="pl-5 pr-2 list-unstyled education">
                <li class="big">
                  <h5 class="font-weight-bold ml-3 underline-primary display-inline">EDUCATION</h5>
                </li>
                <li>
                  <span class="font-weight-bold">University of Science and Technology of Southern Philippines</span><br />
                  <small>2018 - Present</small>
                  <p class="mt-2">Bachelor of Science in Information Technology</p>
                </li>
                <li>
                  <span class="font-weight-bold">Liceo de Cagayan University</span><br />
                  <small>2016 - 2018</small>
                  <p class="mt-2">Information and Communication Technologies</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light p-3">
        <div class="row">
          <div class="col-md-6 display-centery">
            <div class="w-100 px-3">
              <h5 class="font-weight-bold underline-primary display-inline">PERSONAL INFO</h5>
              <p class="mt-4 mb-2">
                <span class="font-weight-bold text-orange">Name:</span> <br />Hernie M. Jabien Jr.
                                        </p>
              <p class="mb-2">
                <span class="font-weight-bold text-orange">Phone:</span> <br />+639397724280
                                        </p>
              <p class="mb-2">
                <span class="font-weight-bold text-orange">Email:</span> <br />herniejabien@yes.my
                                        </p>
              <p class="mb-2">
                <span class="font-weight-bold text-orange">Birth date:</span> <br />October 11, 1999
                                        </p>
              <p class="mb-2">
                <span class="font-weight-bold text-orange">Address:</span> <br />Cagayan de Oro, Misamis Oriental Philippines
                                        </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="crv-8 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126293.44490128885!2d124.59075304177426!3d8.434015933820442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d9810e9e81%3A0x2edcd5b84a6de2a2!2sCagayan%20de%20Oro%2C%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1611891257630!5m2!1sen!2sph"
                width="100%" title="location" height="450" aria-hidden="false" tabIndex="0"></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126293.44490128885!2d124.59075304177426!3d8.434015933820442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d9810e9e81%3A0x2edcd5b84a6de2a2!2sCagayan%20de%20Oro%2C%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1611891257630!5m2!1sen!2sph"
                width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
            </div>
          </div>
        </div>
      </section>

      <section class="p-3">
        <h5 class="font-weight-bold ml-3 underline-primary display-inline">CERTIFICATES</h5>
        <div class="px-3 mt-3">
          <OwlCarousel class="carousel-certificates owl-carousel" loop  autoplay autoplayHoverPause autoplayTimeout={10000} margin={10} items={1} nav={false}>
            <div class="item">
              <img src="img/certificates/frontend.png" alt="" class="img-fluid" />
            </div>
            <div class="item">
              <img src="img/certificates/javascript.png" alt="" class="img-fluid" />
            </div>
            <div class="item">
              <img src="img/certificates/sql.jpg" alt="" class="img-fluid" />
            </div>
            <div class="item">
              <img src="img/certificates/python.jpg" alt="" class="img-fluid" />
            </div>
            <div class="item">
              <img src="img/certificates/python2.jpg" alt="" class="img-fluid" />
            </div>
            <div class="item">
              <img src="img/certificates/flutter.jpg" alt="" class="img-fluid" />
            </div>
            <div class="item">
              <img src="img/certificates/react.jpg" alt="" class="img-fluid" />
            </div>
            <div class="item">
              <img src="img/certificates/website.jpg" alt="" class="img-fluid" />
            </div>
            <div class="item">
              <img src="img/certificates/wordpress.jpg" alt="" class="img-fluid" />
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}

export default Resume;
