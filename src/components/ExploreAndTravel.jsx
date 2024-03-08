import React, { useEffect } from 'react';
import thousandImage from '../Images/thousand-01 1.png';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 
import { AnimatePresence, motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger); // Register the plugin

const ExploreAndTravel = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  console.log('Starting ExploreAndTravel component');

  useEffect(() => {
    // Set up GSAP timeline
    const exploreAndTravelAnimation = gsap.timeline();

    // Add ScrollTrigger to control when the animations should occur
    ScrollTrigger.create({
      trigger: '.ExploreAndTravel', // Trigger animation when the element with class "ExploreAndTravel" enters the viewport
      start: 'top center', // Start the animation when the top of the trigger element reaches the center of the viewport
      end: 'bottom center', // End the animation when the bottom of the trigger element reaches the center of the viewport
      animation: exploreAndTravelAnimation, // Use the previously defined timeline for the animation
      scrub: true, // Smoothly scrub through the animation as the user scrolls
    });

    exploreAndTravelAnimation
      .from(".ExploreAndTravel img", {
        y: -20,
        x:-80,
        opacity: 1,
        duration: 2,
        ease: "back(4)",
      })

      .from(
        ".ExploreAndTravel .text",
        {
          x:20,
          opacity: 1,
          duration: 1,
          ease: "back(4)",
        },
      )

      let scrollAnimation = gsap.timeline();
      scrollAnimation.from('ExploreAndTravel', {
        y:100,
        stagger: {
          each: 0.05
        }
      })
  }, []);

  return (
    <div className={`container  mt-5  ${isRtl ? 'rtl' : 'ltr'}`}>
      <AnimatePresence>
        <motion.div
          layout
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ type: "spring", damping: 8, stiffness: 50 }}
          className="Hero-info"
        >
      <Row className='ExploreAndTravel'>
        
        <Col className='mt-5 text ' xs={12} sm={12} md={6} lg={6}>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: '64px', fontWeight: '700' }}>{t('exploreAndTravel.explore')}<br />{t('exploreAndTravel.travel')}</h1>

          <h4 className='mt-5' style={{ fontFamily: 'Inter', fontSize: '22px', fontWeight: '600', lineHeight: '27px' }}>{t('exploreAndTravel.holidayFinder')}</h4>

          <hr style={{ width: '8%', border: '2px solid #202336', borderRadius: '4px' }} />

          <Row className='mt-5'>
            <Col>
              <select className='w-75 '> <option>{t('exploreAndTravel.location')}</option> </select>
            </Col>

            <Col >
              <select className='w-75'> <option>{t('exploreAndTravel.activity')}</option> </select>
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col>
              <select className='w-75'> <option>{t('exploreAndTravel.grade')}</option> </select>
            </Col>

            <Col >
              <select className='w-75'> <option>{t('exploreAndTravel.date')}</option> </select>
            </Col>
          </Row>

          <button className='mt-5 border-0 px-5 text-light py-2 rounded' style={{ background: '#FB8F1D' }}>{t('exploreAndTravel.exploreBtn')}</button>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} className='ExploreAndTravel'>
        <img src={thousandImage} alt="" className='img-fluid img m-0 p-0' />
        </Col>
      </Row>
      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExploreAndTravel;