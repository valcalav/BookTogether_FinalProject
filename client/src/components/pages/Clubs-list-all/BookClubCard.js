import React from 'react'
import { Col, Card, ButtonGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './bookClubs.css'

function BookClubsCard({ bookClubName, bookTitle, bookAuthor, startDate, participants, imgBookCover, _id }) {

    return (
        <Col>
            <Card className="clubs-card">
                <Card.Img variant="top" src={imgBookCover} />
                <Card.Body>
                    <h6>{bookClubName}</h6>
                    <hr />
                    <p><strong>{bookTitle}</strong> - {bookAuthor} </p>
                    <small>Start date: {startDate.slice(0,10)} </small>
                    <small>Participants: {participants.length} </small>

                    <ButtonGroup size="sm" style={{ width: '100%' }}>
                        <Link to={`/club-details/${_id}`} className="btn btn-dark">Go to Club</Link>
                    </ButtonGroup>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default BookClubsCard
