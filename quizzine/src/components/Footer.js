import React from 'react';
import './Footer.css'; 
import { Table } from 'reactstrap';

const Footer = (props) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th><a href='F.A.Q'>F.A.Q</a></th>
          <th><a href='Contact'>Contact</a></th>
          <th>Last Name</th>
          <th>www.Quizzine.com</th>
        </tr>
      </thead>
    </Table>
  );
}





export default Footer;