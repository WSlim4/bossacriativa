import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'
import api from '../../services/api';

export default function Schedule() {
  const [events, setEvents] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth())
  const [months, setMonths] = useState([])

  useEffect(() => {
    const baseURL = 'https://admin.bossacriativa.art.br/';
    api.get(`/events?month.id=${month}`, { baseURL }).then(({ data }) => setEvents(data));
    api.get('/months', { baseURL }).then(({ data }) => setMonths(data));
  }, []);

  async function handleClick(i) {
    if (month + i < new Date().getMonth() || month + i > 11) return;
    const baseURL = 'https://admin.bossacriativa.art.br/';
    const {data} = await api.get(`/events?month.id=${month + i}`, { baseURL });
    setMonth(old => old + i);
    setEvents(data);  
  }

  return (
    <div className="home-container">
      <Container className="home-content">
        <Row>
          <Col lg={12}>
            <div>
              <h4 className="title max-home">AGENDA MENSAL</h4>
              <div className="slt-buttons">
                <div>
                  <button onClick={() => handleClick(-1)} className="arrow-left">
                    <img src={require('../../assets/seta.svg')} height="20px" />
                  </button>
                </div>
                <div style={{ marginLeft: 10, marginRight: 10, backgroundColor: '#efefef', padding: '3px 15px' }}>
                  {months.length > 0 ? months[month].name : ''}
                </div>
                <div>
                  <button onClick={() => handleClick(1)} className="arrow-right">
                    <img src={require('../../assets/seta.svg')} height="20px" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="home-content list-events">
          {
            events.map(event => (
              <Col xs={12} lg={6} xl={6} key={event.id}>
                <div className="events">
                  <div>
                    <p className="event-day">{new Date(event.date).getDate()}</p>
                  </div>
                  <div>
                    <h5 className="event-title">{event.title}</h5>
                    <p className="event-intro">{event.description}</p>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
        <Row className="home-content">
          <Col lg={12}>
            <div className="slt-buttons">
              <span>
                <button onClick={() => handleClick(-1)} className="arrow-left">
                  <img src={require('../../assets/seta.svg')} height="20px" />
                </button>
              </span>
              <span style={{ marginLeft: 10, marginRight: 10, backgroundColor: '#efefef', padding: '3px 15px' }}>
                {months.length > 0 ? months[month].name : ''}
              </span>
              <span>
                <button onClick={() => handleClick(1)} className="arrow-right">
                  <img src={require('../../assets/seta.svg')} height="20px" />
                </button>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
