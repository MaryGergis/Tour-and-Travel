import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 


gsap.registerPlugin(ScrollTrigger); 

const FeaturedDestinations = () => {

    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
  
    console.log('Starting Featured Destinations component');
  
    useEffect(() => {
      const FeaturedDestinationsAnimation = gsap.timeline();
  
      ScrollTrigger.create({
        trigger: '.FeaturedDestinations', 
        start: 'top center', 
        end: 'bottom center', 
        animation: FeaturedDestinationsAnimation, 
        scrub: true, 
      });

      gsap.utils.toArray(".FeaturedDestinations").forEach((box) => {
        gsap.from(box, {
          y: 50,
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
      scrollAnimation.from('FeaturedDestinations', {
        y:100,
        stagger: {
          each: 0.05
        }
      })
    }, []);

    return (
        <div className={`container FeaturedDestinations mt-5 pt-5 mb-5 pb-5 ${i18n.language === 'ar' ? 'rtl' : 'ltr'} ${isRtl ? 'rtl' : 'ltr'}`}>
            <div className='mb-4 d-flex'>
                <h2 style={{fontFamily: 'Playfair Display', fontSize: '36px', fontWeight: '700', lineHeight: '50px'}}>{t('FeaturedDestinations.FeaturedDestinationsHead')} </h2>
                <a href="#hjnbj" className={` ${i18n.language === 'ar' ? 'me-auto' : 'ms-auto'} fw-bold`} style={{textDecoration:'none', color: '#FB8F1D'}}> {t('FeaturedDestinations.FeaturedDestinationsViewAll')}  {i18n.language === 'ar' ? <IoIosArrowBack /> : <IoIosArrowForward />} </a>
            </div>

            <Row className='justify-content-center FeaturedDestinations'>
                <Col xs={10} sm={12} md={4} lg={3} className=''>
                    <div className='image position-relative'>
                        <img src={require('../Images/image 4.png')} alt="" className='rounded w-100'/>

                        <div className='img-text'>
                            <h5 > {t('FeaturedDestinations.RajaAmpat')}  <br /> <span> {t('FeaturedDestinations.Indonesia')}  </span> </h5>
                        </div>
                    </div>
                </Col>

                <Col xs={10} sm={12} md={4} lg={3}>
                    <div className='image position-relative'>
                        <img src={require('../Images/image 7.png')} alt="" className='rounded w-100'/>

                        <div className='img-text'>
                            <h5 > {t('FeaturedDestinations.Fanjingshan')}    <br /> <span> {t('FeaturedDestinations.China')}    </span> </h5>
                        </div>
                    </div>
                </Col>

                <Col xs={10} sm={12} md={4} lg={3}>
                    <div className='image position-relative'>
                        <img src={require('../Images/image 8.png')} alt="" className='rounded w-100'/>

                        <div className='img-text'>
                            <h5 > {t('FeaturedDestinations.Vevey')}    <br /> <span>{t('FeaturedDestinations.Switzerland')}    </span> </h5>
                        </div>
                    </div>
                </Col>

                <Col xs={10} sm={12} md={4} lg={3}>
                    <div className='image position-relative'>
                        <img src={require('../Images/image 9.png')} alt="" className='rounded  w-100'/>

                        <div className='img-text'>
                            <h5 >{t('FeaturedDestinations.Skadar')}     <br /> <span> {t('FeaturedDestinations.Montenegro')}   </span> </h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default FeaturedDestinations;