// I have used bootstrap with this SPA to show that I have worked on bootstrap framework as well.

import React from 'react';
import { Card, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { percentageCalculator } from './percentageCalculator'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // initialize with some basic values to give user ateast an idea about installments
    this.state = {
      amount: 10000,
      duration: 1,
      monthlyInstallment: 900,
      amountError: false,
      durationError: false
    }
  }

  onOK = () => {
    console.log('hey')
    const { monthlyInstallment } = percentageCalculator(this.state.amount, this.state.duration)
    this.setState({ monthlyInstallment })
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    this.setState({ amount, amountError: amount > 100000 || amount < 10000 })
  }

  ondurationChange = (e) => {
    const duration = e.target.value
    this.setState({ duration, durationError: duration > 5 || duration < 1 })
  }

  render(){
    const { amount, duration, amountError, durationError, monthlyInstallment } = this.state

    return (
      <div>
        <Card className="cardBody">
          <Card.Header>Loan - Calculator</Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <FormControl className={ amountError ? 'error' : ''} onChange={this.onAmountChange} value={amount} placeholder="Amount" />
              <FormControl className={ durationError ? 'error' : ''} onChange={this.ondurationChange} value={duration} placeholder="duration" />
              <InputGroup.Append>
                <Button onClick={this.onOK} disabled={ amountError || durationError } variant="info">OK</Button>
              </InputGroup.Append>
            </InputGroup>

            <Alert variant="light">
              Percentage : 8%
            </Alert>
            <Alert variant="secondary">
              Monthly Installment : { monthlyInstallment || '-'} EUR
            </Alert>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
