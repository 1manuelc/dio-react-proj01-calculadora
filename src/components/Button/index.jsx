/* eslint-disable react/prop-types */

import { ButtonContainer } from './styles';

const Button = ({ label, onClickFn }) => {
	return (
		<ButtonContainer onClick={onClickFn} type='button'>
			{label}
		</ButtonContainer>
	);
};

export default Button;
