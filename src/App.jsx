import { Container, Content, Row } from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

function App() {
	const [currentNumber, setCurrentNumber] = useState('0');
	const [firstNumber, setFirstNumber] = useState(null);
	const [operation, setOperation] = useState(null);

	const handleAddNumber = (newNumber) => {
		setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${newNumber}`);
	};

	const handleClear = () => {
		setCurrentNumber('0');
	};

	const handleOperation = (operationType) => {
		if (!firstNumber) {
			setFirstNumber(currentNumber);
			setOperation(`${operationType}`);
			handleClear();
		} else {
			let result;

			if (operationType === '+')
				result = Number(firstNumber) + Number(currentNumber);
			else if (operationType === '-')
				result = Number(firstNumber) - Number(currentNumber);
			else if (operationType === '*')
				result = Number(firstNumber) * Number(currentNumber);
			else if (operationType === '/')
				result = Number(firstNumber) / Number(currentNumber);
			else if (operationType === '**')
				result = Number(firstNumber) ** Number(currentNumber);

			setCurrentNumber(result);
			setFirstNumber(null);
			setOperation(null);
		}
	};

	return (
		<>
			<Container>
				<Content>
					<Input value={currentNumber}></Input>
					<Row>
						<Button label='*' onClickFn={() => handleOperation('*')}></Button>
						<Button label='/' onClickFn={() => handleOperation('/')}></Button>
						<Button label='^' onClickFn={() => handleOperation('**')}></Button>
						<Button label='C' onClickFn={() => handleClear()}></Button>
					</Row>
					<Row>
						<Button label='7' onClickFn={() => handleAddNumber('7')}></Button>
						<Button label='8' onClickFn={() => handleAddNumber('8')}></Button>
						<Button label='9' onClickFn={() => handleAddNumber('9')}></Button>
						<Button label='-' onClickFn={() => handleOperation('-')}></Button>
					</Row>
					<Row>
						<Button label='4' onClickFn={() => handleAddNumber('4')}></Button>
						<Button label='5' onClickFn={() => handleAddNumber('5')}></Button>
						<Button label='6' onClickFn={() => handleAddNumber('6')}></Button>
						<Button label='+' onClickFn={() => handleOperation('+')}></Button>
					</Row>
					<Row>
						<Button label='1' onClickFn={() => handleAddNumber('1')}></Button>
						<Button label='2' onClickFn={() => handleAddNumber('2')}></Button>
						<Button label='3' onClickFn={() => handleAddNumber('3')}></Button>
						<Button
							label='='
							onClickFn={() => handleOperation(operation)}
						></Button>
					</Row>
				</Content>
			</Container>
		</>
	);
}

export default App;
