import { Button, Flex, Input, Typography } from 'antd';
import { ChangeEvent, useState } from 'react';

import { formatNumber } from '@/shared/lib/format-number.ts';

import styles from './styles.module.css';

type SalaryInputNodeProps = {
	data: {
		salary?: string;
	}
};

export const SalaryInputNode = ({ data: { salary } }: SalaryInputNodeProps) => {
	const [value, setValue] = useState<string | undefined>(salary);

	const handleSalarySubmit = () => {
		console.debug(value);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		let inputValue = e.target.value;

		inputValue = inputValue.replace(/\D/g, '');

		if (inputValue.length > 1 && inputValue[0] === '0') {
			inputValue = inputValue.slice(1);
		}

		const formattedValue = formatNumber(inputValue);

		setValue(formattedValue);
	};

	return (
		<div className={styles.node}>
			<Flex gap='small' vertical>
				<Typography.Title level={4}>Salary Input</Typography.Title>
				<Flex gap='small' vertical align='end'>
					<Input
						value={value}
						allowClear
						placeholder='Slot for your salary'
						size='middle'
						maxLength={15}
						onChange={handleInputChange} />
					<Flex gap='small'>
						<Button>
							Add expense
						</Button>
						<Button disabled={!value} type='primary' onClick={handleSalarySubmit}>
							Save
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</div>
	);
}