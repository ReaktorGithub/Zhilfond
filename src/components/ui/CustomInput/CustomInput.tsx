import { createTheme, Input, MantineProvider } from '@mantine/core';
import { ChangeEvent, FC } from 'react';

import styles from './styles.module.scss';

const theme = createTheme({
	components: {
		Input: Input.extend({
			classNames: {
				input: styles.input,
			},
		}),
	},
});

interface CustomInputProps {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	disabled?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({ onChange, value, placeholder = '', disabled = false }) => {
	return (
		<MantineProvider theme={theme}>
			<Input placeholder={placeholder} value={value} disabled={disabled} onChange={onChange} />
		</MantineProvider>
	);
};

export default CustomInput;
