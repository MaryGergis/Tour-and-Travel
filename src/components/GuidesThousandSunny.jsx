import React, { useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger); 


const GuidesThousandSunny = () => {

  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  console.log('Starting Guides Thousand Sunny component');
  
    useEffect(() => {
      const GuidesThousandSunnyAnimation = gsap.timeline();
  
      ScrollTrigger.create({
        trigger: '.GuidesThousandSunny', 
        start: 'top center', 
        end: 'bottom center', 
        animation: GuidesThousandSunnyAnimation, 
        scrub: true, 
      });

      gsap.utils.toArray(".GuidesThousandSunny").forEach((box) => {
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
      scrollAnimation.from('GuidesThousandSunny', {
        y:100,
        stagger: {
          each: 0.05
        }
      })
    }, []);

    return (
        <div className={`container GuidesThousandSunny mt-5 ${i18n.language === 'ar' ? 'rtl' : 'ltr'} ${isRtl ? 'rtl' : 'ltr'} `}>
          <Row>
            <Col className={`${i18n.language === 'ar' ? 'ps-5' : 'pe-5'}`} xs={12} sm={12} md={6} lg={6} style={{marginTop:'7%'}}>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '36px',  fontWeight: '700', lineHeight: '50px'}} className='mt-5'> {t('GuidesThousandSunny.GuidesThousandSunnyHead')} <br /> {t('GuidesThousandSunny.GuidesThousandSunnyHead2')} </h3>

                <p className='mt-4' style={{fontFamily: 'Muli', fontSize: '22px', fontWeight: '300', lineHeight: '30px', color: '#7D7987'}}> {t('GuidesThousandSunny.GuidesThousandSunnyParagraph')} </p>

                <button className='mt-4 border-0 px-5 text-light py-2 rounded' style={{background: '#FB8F1D'}}> {t('GuidesThousandSunny.GuidesThousandSunnyBtn')} </button>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6}>
                <img src={require('../Images/Thousand-03.png')} alt="" className={`img-fluid GuidesThousandSunny ${i18n.language === 'ar' ? 'pe-lg-5 me-lg-5' : 'ps-lg-5 ms-lg-5'}`} />
            </Col>
          </Row>
        </div>
    );
};

export default GuidesThousandSunny;