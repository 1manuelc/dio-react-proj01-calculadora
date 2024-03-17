/* eslint-disable react/prop-types */
import { InputContainer } from './styles';

export default function Input({ value }) {
	return (
		<InputContainer>
			<input type='text' disabled value={value} />
		</InputContainer>
	);
}
