import { Flex, Typography } from 'antd';

import styles from './styles.module.css'; 

type SalaryInputNodeProps = {
	data: {
		expense?: string;
	}
};

export const ExpenseNode = ({ data: { expense } }: SalaryInputNodeProps) => {
	return (
		<div className={styles.node}>
			<Flex gap='small' vertical>
				<Typography.Text>{expense}</Typography.Text>
			</Flex>
		</div>
	);
}