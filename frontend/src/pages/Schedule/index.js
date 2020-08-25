import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'

export default function Schedule() {
  return (
    <div className="home-container">
      <Container className="home-content">
        <Row>
          <Col lg={12}>
            <div>
              <h4 className="title max-home">AGENDA MENSAL</h4>
              <div className="slt-buttons">
                <span>
                  <button>ant</button>
                </span>
                <span style={{ marginLeft: 10, marginRight: 10, backgroundColor: '#efefef', padding: 3 }}>
                  Agosto
                </span>
                <span>
                  <button>next</button>
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="home-content list-events">
          <Col xs={12} lg={6} xl={6}>
            <div className="events">
              <div>
                <p className="event-day">25</p>
              </div>
              <div>
                <h5 className="event-title">Titulo</h5>
                <p className="event-intro">fsjdhfkjsdhfjkshf fjshd fkshdkjf sd fskdjhfs</p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} xl={6}>
            <div className="events">
              <div>
                <p className="event-day">25</p>
              </div>
              <div>
                <h5 className="event-title">Titulo</h5>
                <p className="event-intro">fsjdhfkjsdhfjkshf fjshd fkshdkjf sd fskdjhfs</p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} xl={6}>
            <div className="events">
              <div>
                <p className="event-day">25</p>
              </div>
              <div>
                <h5 className="event-title">Titulo</h5>
                <p className="event-intro">fsjdhfkjsdhfjkshf fjshd fkshdkjf sd fskdjhfs</p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} xl={6}>
            <div className="events">
              <div>
                <p className="event-day">25</p>
              </div>
              <div>
                <h5 className="event-title">Titulo</h5>
                <p className="event-intro">fsjdhfkjsdhfjkshf fjshd fkshdkjf sd fskdjhfs</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="home-content">
          <Col lg={12}>
            <div className="slt-buttons">
              <span>
                <button>ant</button>
              </span>
              <span style={{ marginLeft: 10, marginRight: 10, backgroundColor: '#efefef', padding: 3 }}>
                Agosto
              </span>
              <span>
                <button>next</button>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
