import { ChangeEvent, useState } from 'react';
import { Button, Flex, Input } from 'antd';
import styles from './styles.module.css';

type SalaryInputNodeProps = {
	data: {
		salary: string;
	}
};

export const SalaryInputNode = ({ data: { salary } }: SalaryInputNodeProps) => {
	const [value, setValue] = useState<string | undefined>(salary);

	const handleSalarySubmit = () => {
		console.debug(value);
	};

	const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div className={styles.node}>
			<Flex gap='small' vertical align='end'>
				<Input value={value} allowClear placeholder='Place for your salary' size='middle' onChange={handleInputValueChange} />
				<Button disabled={!value} type='primary' onClick={handleSalarySubmit}>
						Save salary
				</Button>
			</Flex>
		</div>
	);
}