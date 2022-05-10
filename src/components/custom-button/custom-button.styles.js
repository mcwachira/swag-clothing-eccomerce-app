import styled, { css } from 'styled-components';


export const basicButtonClasses = css`
	background-color: black;
	color: white;
    	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}

`

export const googleSignInButton = css`

	background-color: #4285f4;
		color: #fff;

		&:hover {
			background-color: #357ae8;
			border: none;
		}
`


export const InvertedButtons = css`
background-color: #fff;
		color: #000;
		border: 1px solid #000;

		&:hover {
			background-color: #000;
			color: #fff;
			border: none;
		}
`

//function to chooser a button based on props

const getButton = (props) => {
    if (props.isGoogleSignIn) {
        return googleSignInButton;
    }
    return props.inverted ? InvertedButtons : basicButtonClasses
}

export const CustomButtonContainer = styled.button`

	min-width: 185px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;

	text-transform: uppercase;
	font-family: 'Open Sans Condensed';

	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;

${getButton}
`