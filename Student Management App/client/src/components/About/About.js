import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
export default function About() {
  return (
    <div className='about-h3'>
     <h3>Project done by following students:</h3>
     <div>
        <ListGroup>
            <ListGroupItem>Firoj Anjum</ListGroupItem>
            <ListGroupItem>Oindil Golder</ListGroupItem>
            <ListGroupItem>Sourabh Das</ListGroupItem>
            <ListGroupItem>Rifat Molla</ListGroupItem>
            <ListGroupItem>Udita Das</ListGroupItem>
            <ListGroupItem>Umme Fatema Mullick</ListGroupItem>
            <ListGroupItem>Firoj Sardar</ListGroupItem>
            <ListGroupItem>Avijit Samanta</ListGroupItem>
            <ListGroupItem>Puja Kumari</ListGroupItem>
            <ListGroupItem>Yamina Parvez</ListGroupItem>
            <ListGroupItem>Swarnavo Mukherjee</ListGroupItem>
        </ListGroup>
     </div>
    </div>
  )
}
