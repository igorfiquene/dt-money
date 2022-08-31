import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #f0f2f5;
		--red: #E52e54;
		--blue: #5429CC;
		--green: #33CC95;

		--blue-light: #6933FF;

		--text-title: #363f5f;
		--text-body: #969cb3;
		--input-background: #e7e9ee;
		--input-border: #d7d7d7;

		--shape: #FFFFFF
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		background-color: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	body,input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}
	
	h1, h2 h3, h4, h5, h6, strong {
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.react-modal-overlay {
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.react-modal-content {
		width: 100%;
		max-width: 576px;
		background-color: var(--background);
		padding: 3rem;
		position: relative;
		border-radius: 0.25rem;
	}

	.react-modal-close {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		background: initial;
		border: none;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.8)
		}
	}
`