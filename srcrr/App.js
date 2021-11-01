import "./style.css";
// import "./js/scripts";

function App() {
  return (
    <section>
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <span className="section-separator"></span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="testimonials-carousel-wrap">
        <div className="listing-carousel-button listing-carousel-button-next">
          <i className="fa fa-caret-right" style={{ color: "#fff"}}></i>
        </div>
        <div className="listing-carousel-button listing-carousel-button-prev">
          <i className="fa fa-caret-left" style={{color: "#fff"}}></i>
        </div>
        <div className="testimonials-carousel">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="testi-avatar">
                    <img alt="avatar img"src="/avatars/21.jpg " />
                  </div>
                  <div className="testimonials-text-before">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <div className="testimonials-text">
                    <div className="listing-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <a href="https://google.com" className="text-link">.</a>
                    <div className="testimonials-avatar">
                      <h3>John Doe</h3>
                      <h4>Owner</h4>
                    </div>
                  </div>
                  <div className="testimonials-text-after">
                    <i className="fa fa-quote-left"></i>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="testi-avatar">
                    <img alt="avatar img"src="/avatars/3.jpg" />
                  </div>
                  <div className="testimonials-text-before">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <div className="testimonials-text">
                    <div className="listing-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <a href="https://google.com" className="text-link">.</a>
                    <div className="testimonials-avatar">
                      <h3>Doe Boe</h3>
                      <h4>Director</h4>
                    </div>
                  </div>
                  <div className="testimonials-text-after">
                    <i className="fa fa-quote-left"></i>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="testi-avatar">
                    <img alt="avatar img" src="/avatars/4.jpg" />
                  </div>
                  <div className="testimonials-text-before">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <div className="testimonials-text">
                    <div className="listing-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <a href="https://google.com" className="text-link">.</a>
                    <div className="testimonials-avatar">
                      <h3>Boe Doe</h3>
                      <h4>Developer</h4>
                    </div>
                  </div>
                  <div className="testimonials-text-after">
                    <i className="fa fa-quote-left"></i>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="testi-avatar">
                    <img alt="avatar img" src="/avatars/6.jpg" />
                  </div>
                  <div className="testimonials-text-before">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <div className="testimonials-text">
                    <div className="listing-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <a href="https://google.com" className="text-link">.</a>
                    <div className="testimonials-avatar">
                      <h3>Doe John</h3>
                      <h4>Designer</h4>
                    </div>
                  </div>
                  <div className="testimonials-text-after">
                    <i className="fa fa-quote-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tc-pagination"></div>
      </div>
    </section>
  );
}

export default App;
