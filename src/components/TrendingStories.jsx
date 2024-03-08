import React, { useEffect } from 'react';
import { Row , Col} from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger); 

const TrendingStories = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
  
    console.log('Starting Trending Stories component');
  
    useEffect(() => {
      const TrendingStoriesAnimation = gsap.timeline();
  
      ScrollTrigger.create({
        trigger: '.TrendingStories', 
        start: 'top center', 
        end: 'bottom center', 
        animation: TrendingStoriesAnimation, 
        scrub: true, 
      });

      gsap.utils.toArray(".TrendingStories").forEach((box) => {
        gsap.from(box, {
          x:30,
          y: 70,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse restart reverse",
          },
        });
      });

      let scrollAnimation = gsap.timeline();
      scrollAnimation.from('TrendingStories', {
        y:100,
        stagger: {
          each: 0.05
        }
      })
    }, []);


    return (
        <div className={`container TrendingStories mt-5 pt-5 mb-5 pb-5 ${i18n.language === 'ar' ? 'rtl' : 'ltr'} ${isRtl ? 'rtl' : 'ltr'}`}>
            
            <div className='mb-4 d-flex'>
                <h2 style={{fontFamily: 'Playfair Display', fontSize: '36px', fontWeight: '700', lineHeight: '50px'}}> {t('TrendingStories.TrendingStoriesHead')} </h2>
                <a href="#hjnbj" className={`${i18n.language === 'ar' ? 'me-auto' : 'ms-auto'} fw-bold`} style={{textDecoration:'none', color: '#FB8F1D'}}> {t('TrendingStories.ViewAll')} {i18n.language === 'ar' ? <IoIosArrowBack /> : <IoIosArrowForward />}  </a>
            </div>

            <Row className='trending-stories'>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <div>
                        <img src={require('../Images/image 12.png')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title mt-3">{t('TrendingStories.card1Head')}</h5>
                            <p class="card-text mt-1 text-secondary">{t('TrendingStories.card1Paragragh')}</p>
                            <a href="#jnmk" style={{textDecoration:'none', color:'#FB8F1D'}} className='mt-4'> {t('TrendingStories.ReadMore')} </a>
                        </div>
                    </div>
                </Col>

                <Col xl={3} lg={3} md={6} sm={12}>
                    <div>
                        <img src={require('../Images/image 13.png')} class="card-img-top" alt="..." height={'350px'}/>
                        <div class="card-body">
                            <h5 class="card-title mt-2">{t('TrendingStories.card2Head')}</h5>
                            <p class="card-text mt-1 text-secondary"> {t('TrendingStories.card2Paragragh')}</p>
                            <a href="#jnmk" style={{textDecoration:'none', color:'#FB8F1D'}} className='mt-4'> {t('TrendingStories.ReadMore')} </a>
                        </div>
                    </div>
                </Col>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <div>
                        <img src={require('../Images/image 14.png')} class="card-img-top" alt="..." height={'350px'}/>
                        <div class="card-body">
                            <h5 class="card-title mt-2">{t('TrendingStories.card3Head')}</h5>
                            <p class="card-text mt-1 text-secondary">{t('TrendingStories.card3Paragragh')}</p>
                            <a href="#jnmk" style={{textDecoration:'none', color:'#FB8F1D'}} className='mt-4'> {t('TrendingStories.ReadMore')} </a>
                        </div>
                    </div>
                </Col>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <div>
                        <img src={require('../Images/image 15.png')} class="card-img-top" alt="..." height={'350px'}/>
                        <div class="card-body">
                            <h5 class="card-title mt-2"> {t('TrendingStories.card4Head')} </h5>
                            <p class="card-text mt-1 text-secondary"> {t('TrendingStories.card4Paragragh')}</p>
                            <a href="#jnmk" style={{textDecoration:'none', color:'#FB8F1D'}} className='mt-4'> {t('TrendingStories.ReadMore')} </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default TrendingStories;