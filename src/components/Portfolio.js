import { Fragment, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { portfolioSlider } from "../sliderProps"
import PortfolioModal from "./popup/PortfolioModal"

const Portfolio = () => {
  const [modal, setModal] = useState(false)
  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} />
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Creative <span className="coloring">Portfolio</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/earth.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Earth</h3>
                        <span>Powered by ThreeJS</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://earth-mj.netlify.app/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/ai-text-to-voice.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>AI Text to Voice Generator</h3>
                        <span>Powered by OpenAI</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://ai-text-to-voice.netlify.app/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/ai-img-gen.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>AI Image Generator</h3>
                        <span>Powered by OpenAI</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://ai-image-jm.netlify.app/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/1.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Zinia BSuite</h3>
                        <span>Enterprise Resource Planning</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="http://zinia.tech/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/2.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Netflix Clone</h3>
                        <span>Entertainment</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://netflix-clone-5ea22.web.app/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/3.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Covid-19 Tracker</h3>
                        <span>Healthcare</span>
                      </div>
                      <a
                        className="edrea_tm_full_link soundcloude_link mfp-iframe"
                        href="https://covid-tracker-7fed5.web.app/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/4.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Zea Chat</h3>
                        <span>Social Media</span>
                      </div>
                      <a
                        className="edrea_tm_full_link mfp-iframe"
                        href="https://zea-chat-room.herokuapp.com/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/5.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Amazon Clone</h3>
                        <span>Ecommerce</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://clone-186ce.web.app/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/6.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Instagram Clone</h3>
                        <span>Social Media</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://instagram-clone-2a6a2.web.app/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/7.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Slack</h3>
                        <span>Messaging Platform</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://slack-clone-f421e.web.app/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/8.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Chit Fund</h3>
                        <span>Finance on Blockchain</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://github.com/Jameem/chit-fund"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/10.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Candy Crush</h3>
                        <span>Gaming</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://jameem.me/candy-crush/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/9.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Kickstarter</h3>
                        <span>Crowd funding on Blockchain</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://github.com/Jameem/kickstarter"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/11.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Github Finder</h3>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://github-finder-v1.herokuapp.com/"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/12.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Donate Crypto</h3>
                        <span>Charity on Blockchain</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://github.com/Jameem/donate-crypto"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/13.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Job Chain</h3>
                        <span>Platform for freelancers on Blockchain</span>
                      </div>
                      <a
                        className="edrea_tm_full_link"
                        href="https://github.com/Jameem/job-chain"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Portfolio
