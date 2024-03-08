import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger); 

const Testimonials = () => {

    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
  
    console.log('Starting Testimonials component');
  
    useEffect(() => {
      const TestimonialsAnimation = gsap.timeline();
  
      ScrollTrigger.create({
        trigger: '.Testimonials', 
        start: 'top center', 
        end: 'bottom center', 
        animation: TestimonialsAnimation, 
        scrub: true, 
      });


      gsap.utils.toArray(".Testimonials").forEach((box) => {
        gsap.from(box, {
            x:30,
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
      scrollAnimation.from('Testimonials', {
        y:100,
        stagger: {
          each: 0.05
        }
      })
    }, []);


    return (
        <div className={`container Testimonials mt-5 pt-5 ${i18n.language === 'ar' ? 'rtl' : 'ltr'} ${isRtl ? 'rtl' : 'ltr'} `}>
            <Row>
            <h2 style={{fontFamily: 'Playfair Displa', fontSize: '36px', fontWeight: '700', lineHeight: '50px', }} > {t('Testimonials.TestimonialsHead')} </h2>

                <Col className='mt-5 pt-5' xl={7} lg={7} md={6} sm={12}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFBB0C" class="bi bi-star-fill mt-5" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFBB0C" class="bi bi-star-fill mt-5" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFBB0C" class="bi bi-star-fill mt-5" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFBB0C" class="bi bi-star-fill mt-5" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFBB0C" class="bi bi-star-fill mt-5" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <p className='mt-5' style={{fontFamily: 'Muli', fontSize: '24px', fontWeight: '400', lineHeight: '36px', }}>
                        {t('Testimonials.TestimonialsParagragh')}                     
                    </p>
                    
                    <h4 style={{fontFamily: 'Inter', fontSize: '22px',  fontWeight: '700', lineHeight: '48px', }}> {t('Testimonials.EdwardNewgate')}  </h4>
                    <h6 style={{fontFamily: 'Inter',  fontSize: '18px', fontWeight: '400', lineHeight: '48px'}}> {t('Testimonials.FounderCircle')}   </h6>
                </Col>

                <Col xl={5} lg={5} sm={12} md={6}>
                    <img src={require('../Images/image6.png')} alt="" className={`${i18n.language === 'ar' ? 'me-lg-5 pe-lg-5' : 'ms-lg-5 ps-lg-5'} Testimonials`} />
                </Col>
            </Row>
        </div>
    );
};

export default Testimonials;