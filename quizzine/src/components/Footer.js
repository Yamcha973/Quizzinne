import React from 'react';
import '../style/Footer.css';
import {ReactComponent as Facebook} from '../style/facebook_social_media_icon_127370.svg';
import {ReactComponent as Instagram} from '../style/instagram_social_media_icon_127363.svg';
import {ReactComponent as Twitter} from '../style/twitter_social_media_icon_127368.svg';
import {ReactComponent as Youtube} from '../style/youtube_social_media_icon_127358.svg';
import { Table } from 'reactstrap';
 
const Footer = (props) => {
  return (
    <div className="footer">
      <table>
        <thead>
          <tr>
            <th><a href='F.A.Q'>F.A.Q</a></th>
            <th><a href='Contact'>Contact</a></th>
            <div className="icons">
            <th><Instagram /></th>
            <th><Youtube /></th>
            <th><Facebook /></th>
            <th><Twitter /></th>
            </div>
            <th><a href='www.Quizzine.com©'>www.Quizzine.com©</a> </th>
          </tr>
        </thead>
      </table>
    </div>
    
  );
}





export default Footer;