import styled from 'styled-components';

export const ButtonContainer = styled.button`
	padding: 2.5rem;

	border: 0.1rem solid #cdcdcd;
  background-color: #8f8f8f;
  color: #fff;

	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;

	font-size: 2.4rem;
	font-weight: 700;

	transition: all 0.2s ease-in-out;

	&:hover {
		opacity: 0.6;
	}
`;
