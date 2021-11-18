import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../App.css';
import { Markup } from 'interweave';
import fetch from 'isomorphic-fetch';
import FreeResourcesDownloadLG from './FreeResourcesDownloadLG';



class FreeResourcesCompLG extends React.Component{

  constructor(){
    super()
    this.state={
      blogs: []
    }
  }
  
  componentWillMount(){
    fetch('http://ompcms.okular.co.id/resources?_locale=id').then((response) => {
      if(response.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return response.json();
    }).then((blogs) => {
      this.setState({blogs: blogs});
    })
  }
    
  render(){
    return (
      <>        
        <div className='container-fluid d-none d-lg-block'>
          <div className='row'>
            {
              this.state.blogs.map(({id, Title, Form_Brief, Thumbnail}) => (
                <FreeResourcesDownloadLG 
                  key={id}
                  resourceid={id}
                  Title={Title}
                  Form_Brief={Form_Brief}
                  Thumbnail={Thumbnail}
                />
              ))
            }
          </div>
        </div>
      </>
    )
  }
}

export default FreeResourcesCompLG;