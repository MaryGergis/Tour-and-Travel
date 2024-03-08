import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa'; 

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isArabic = i18n.language === 'ar';

  return (
    <div className={`container  ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Row className='my-3 '>
        <Col className='align-middle mt-2'>
          <img src={require('../Images/thousand sunny.png')} alt="" />
        </Col>

        <Col>
          <Row>
            <Col>
              <ul className="d-flex " style={{ listStyleType: 'none' }}>
                <li className="nav-item me-3">
                  <a className="nav-link active" aria-current="page" href="#ghh">{t('navbar.home')}</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link text-secondary" href="#gnn">{t('navbar.destination')}</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link text-secondary" href="#yjnh">{t('navbar.about')}</a>
                </li>

                <li className="nav-item me-">
                  <a className="nav-link text-secondary" href="#yjjn">{t('navbar.partner')}</a>
                </li>
              </ul>
            </Col>

            <Col className='ms-2'>
              <button className={`rounded bg-light ${i18n.language === 'ar' ? 'px-3' : 'px-4'}  py-1`} style={{ border: '1px solid #FB8F1D', color: '#FB8F1D' }}>{t('navbar.login')}</button>
              <button className={`border-0 ${i18n.language === 'ar' ? 'me-3' : 'ms-3'} px-4 py-1 rounded text-light`} style={{ background: '#FB8F1D' }}>{t('navbar.register')}</button>

              {/* Toggle Button */}
              <button className='border-0  ms-3 bg-white' onClick={() => changeLanguage(isArabic ? 'en' : 'ar')}>
                {isArabic ? <FaToggleOff className='fs-2'/> : <FaToggleOn className='fs-2'/> } 
              </button>

            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
