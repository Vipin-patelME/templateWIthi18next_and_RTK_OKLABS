import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import i18n from '../../i18n'

const Header = () => {
    const {t} = useTranslation()

    const onChangeLanguage =(e)=>{
        const lang = e.target.value
        //alert(lang)
        changeLanguage(lang)
    }

  return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                        {/* ***** Logo Start ***** */}
                        <a href="index.html" className="logo">
                            <img src="assets/images/logo.png" alt style={{width: 158}} />
                        </a>
                        {/* ***** Logo End ***** */}
                        {/* ***** Menu Start ***** */}
                        <ul className="nav">
                            <Link className='btnStyel'   to="/" >{t("Home")}</Link>
                            <Link className='btnStyel'  to="/our-shop">{t("Shop")}</Link>
                            <Link className='btnStyel'  to="/product-details">{t("Product Details")}</Link>
                            <Link className='btnStyel'  to="/contact-us">{t("Contact Us")}</Link>
                            <Link className='btnStyel'  to="/calculator">{t("Calculator")}</Link>
                            <select onChange={onChangeLanguage} className='btnStyel'>
                                <option>--{t("Select Language")}--</option>
                                <option value={"en"}>{t("English")}</option>
                                <option value={"hi"}>{t("Hindi")}</option>
                                <option value={"chi"}>{t("Chinese")}</option>
                            </select>
                        </ul>   
                        <a className="menu-trigger">
                            <span>Menu</span>
                        </a>
                        {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>

  )
}

export default Header