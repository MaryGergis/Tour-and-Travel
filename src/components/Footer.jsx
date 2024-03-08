import React from 'react';
import { Row , Col} from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={`bg-light ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
            <Row className=' px-5 pt-5 mx-5 mt-5 border-bottom border-secondary' >
                <Col lg={5} sm={12} md={6}  className='me-auto'>
                    <img src={require('../Images/thousand sunny.png')} alt="" />
                    <p className='mt-4 text-secondary'>{t('Footer.card1Head')} <br /> {t('Footer.card1Head2')} <br /> {t('Footer.card1Head3')} </p>
                    <p className='mt-5 text-secondary'> {t('Footer.card1Paragraph')} </p>
                </Col>

                <Col  sm={12} md={6} lg={2}>
                    <ul style={{listStyleType:'none'}}>
                        <li><h6> {t('Footer.card2Head')} </h6></li>
                        <li className='text-secondary mt-3'>{t('Footer.card2list1')}</li>
                        <li className='text-secondary mt-2'>{t('Footer.card2list2')}</li>
                        <li className='text-secondary mt-2'>{t('Footer.card2list3')}</li>
                        <li className='text-secondary mt-2'>{t('Footer.card2list4')}</li>
                        <li className='text-secondary mt-3'>{t('Footer.card2list5')}</li>
                    </ul>
                </Col>

                <Col sm={12} md={6} lg={3}>
                    <ul style={{listStyleType:'none'}}>
                        <li><h6> {t('Footer.card3Head')} </h6></li>
                        <li className='text-secondary mt-3'> {t('Footer.card3list1')} </li>
                        <li className='text-secondary mt-2'> {t('Footer.card3list2')} </li>
                        <li className='text-secondary mt-2'> {t('Footer.card3list3')} </li>
                        <li className='text-secondary mt-2'>{t('Footer.card3list4')}</li>
                        <li className='text-secondary mt-3'>{t('Footer.card3list5')}</li>
                    </ul>
                </Col>                

                <Col sm={12} md={6} lg={2}>
                    <ul style={{listStyleType:'none'}}>
                        <li><h6> {t('Footer.card4Head')} </h6></li>
                        <li className='text-secondary mt-3'>{t('Footer.card4list1')}</li>
                        <li className='text-secondary mt-2'>{t('Footer.card4list2')}</li>
                        <li className='text-secondary mt-2'>{t('Footer.card4list3')}</li>
                        <li className='text-secondary mt-2'>{t('Footer.card4list4')}</li>
                        <li className='text-secondary mt-3'>{t('Footer.card4list5')}</li>
                    </ul>
                </Col>             
            </Row>

            <div className='d-flex mt-3  mb-3 justify-content-center'>
                <FaTwitter className='fs-4 me-4'/>
                <FaFacebookF className='fs-4 me-4'/>
                <FaInstagram className='fs-4 me-4'/>
                <FaLinkedinIn className='fs-4 me-4'/>
                <FaYoutube className='fs-4 me-4'/>
            </div>
        </div>
    );
};

export default Footer;