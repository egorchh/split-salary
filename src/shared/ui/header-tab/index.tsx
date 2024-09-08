import cn from 'classnames'

import styles from './styles.module.css';

export const HeaderTab = ({ title, active }: { title: string; active?: boolean }) => {
	return (
		<div className={cn(styles.tab, { [styles.active]: active })}>
			{title}
		</div>
	);
};