import React from 'react';
import './Footer.css';
import {ReactComponent as Facebook} from '../facebook_social_media_icon_127370.svg';
import {ReactComponent as Instagram} from '../instagram_social_media_icon_127363.svg';
import {ReactComponent as Twitter} from '../twitter_social_media_icon_127368.svg';
import {ReactComponent as Youtube} from '../youtube_social_media_icon_127358.svg';
import { Table } from 'reactstrap';
 
const Footer = (props) => {
  return (
    <Table borderless>
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
    </Table>
  );
}





export default Footer;