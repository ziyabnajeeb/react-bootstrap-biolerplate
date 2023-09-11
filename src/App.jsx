import { Col, Container, Row, Stack } from 'react-bootstrap';
import { H1, Section } from './components/ui/Tag/Tag';
import TestModal from './components/Modal/TestModal';

import './App.css';

const App = () => (
  <Container>
    <Row className="justify-content-center align-items-center vh-100 flex-column">
      <Col lg={8}>
        <Section className="text-test-gray text-center">
          <H1 className="fw-bolder text-white">
            Welcome To React Bootstrap{' '}
          </H1>
        </Section>
      </Col>
      <Col lg={4}>
        <Stack direction="vertical" gap={2} className="mt-4">
          <TestModal />
        </Stack>
      </Col>
    </Row>
  </Container>
);

export default App;
