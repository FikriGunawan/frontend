import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import imgArrowDownload from '../../assets/images/arrowDownload.png';
import imgResourcesHeader01 from '../../assets/images/resources/resourcesHeader01.png';
import imgResourcesHeaderMobile01 from '../../assets/images/resources/resourcesHeaderMobile01.png';
import imgArrowDownBlack from '../../assets/images/arrowDownBlack.png';
import imgResourcesImages01 from '../../assets/images/resources/resourcesImages01.png';
import imgResourcesImagesMobile01 from '../../assets/images/resources/resourcesImagesMobile01.png';


const FreeResourcesContent = () => {

  // Axios Display API
  const [post, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://ompcms.okular.co.id/resources?_locale=id')
      .then(res =>{
        console.log(res)
        setPosts(res.data)
      })
      .catch()
  })

    return (
      <>
            {/* Header */}
            <div className='col-lg-12 p-0 compHeader'>
              <img className='img-fluid background d-none d-lg-block moveTop' src={imgResourcesHeader01} alt='Okular Mentorship Program' />
              <img className='img-fluid background d-block d-lg-none' src={imgResourcesHeaderMobile01} alt='Okular Mentorship Program' />
              <div className='moveDownHeader moveReWiHeader moveReHeHeader boxc'>
                <div className='circle boxc'></div>
              </div>
              <a id='godown' className='moveTop' href='#resourcesBrief'>
                <img src={imgArrowDownBlack} />
              </a>
            </div>

            {/* Brief */}
            <div id='resourcesBrief' className='col-lg-12 pt-m-20p py-lg-10p px-m-10p px-lg-5p resourcesBrief'>
              <div className='compBrief'>
                <h6>{post.Brief_Sub_Title}</h6>
                <h3>{post.Brief_Title}</h3>
                <div className='brief'>
                  {post.Brief_Desc}
                </div>
              </div>
              <img className='img-fluid image d-none d-lg-block' src={imgResourcesImages01} alt='Okular Mentorship Program' />
            </div>
            <div className='col-12 pb-m-20p px-m-0 resourcesBrief d-inline-block d-lg-none'>
              <img className='img-fluid image' src={imgResourcesImagesMobile01} alt='Okular Mentorship Program' />
            </div>
      </>
    )
}

export default FreeResourcesContent;