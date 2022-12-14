import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
    margin-bottom:${theme.space[3] }
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family:${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
	body,
	label,
	caption,
	error,
	hint,
};

const Text = styled.Text`
    ${'' /* default styling of text  */}
	${({ theme }) => defaultTextStyles(theme)};
    ${'' /* styling of text base on a choice */}
	${({ variant, theme }) => variants[variant](theme)};
`;

Text.defaultProps = {
	variant: "body",
};

export default Text
