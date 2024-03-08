import React, { useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger); 

const ExploreTheWorld = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
  
    console.log('Starting ExploreTheWorld component');
  
    useEffect(() => {
      const ExploreTheWorldAnimation = gsap.timeline();
  
      ScrollTrigger.create({
        trigger: '.ExploreTheWorld', 
        start: 'top center', 
        end: 'bottom center', 
        animation: ExploreTheWorldAnimation, 
        scrub: true, 
      });
  
      ExploreTheWorldAnimation
        .from(".ExploreTheWorld img", {
          y: -20,
          x:-80,
          opacity: 1,
          duration: 2,
          ease: "back(4)",
        })
  
        .from(
          ".ExploreTheWorld .text",
          {
            x:-100,
            opacity: 1,
            duration: 1,
            ease: "back(4)",
          },
          "<"
        )
  
        let scrollAnimation = gsap.timeline();
        scrollAnimation.from('ExploreTheWorld', {
          y:100,
          stagger: {
            each: 0.05
          }
        })
    }, []);

    return (
        <div className={`container mt-5 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}  ${isRtl ? 'rtl' : 'ltr'}`}>
          <Row className='ExploreTheWorld'>
            <Col xs={12} sm={12} md={6} lg={6}>
              <img src={require('../Images/Thousand-02 1.png')} alt="" className='img-fluid ExploreTheWorld' />
            </Col>

            <Col className='text' xs={12} sm={12} md={6} lg={6} style={{marginTop:'7%'}}>
              <div className={` ${i18n.language === 'ar' ? 'me-lg-5' : 'ms-lg-5'}   ${i18n.language === 'ar' ? 'pe-lg-5' : 'ps-lg-5'} `}>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '36px',  fontWeight: '700', lineHeight: '50px'}} className=' mt-5'> {t('ExploreTheWorld.exploreWorld')} <br /> {t('ExploreTheWorld.exploreWorld2')}</h3>

                <p className='mt-2' style={{fontFamily: 'Muli', fontSize: '22px', fontWeight: '300', lineHeight: '30px', color: '#7D7987'}}> {t('ExploreTheWorld.exploreWorldParagrapgh')}</p>
                <button className='mt-4 border-0 px-5 text-light py-2 rounded' style={{background: '#FB8F1D'}}> {t('ExploreTheWorld.exploreWorldBtn')} </button>
              </div>
            </Col>
          </Row>
        </div>
    );
};

export default ExploreTheWorld;