import { Flex, Image } from 'antd';

import { HeaderTab } from '@/shared/ui';

import logoImage from '../assets/logo.webp';
import styles from './styles.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Flex align='start' gap='large'>
				<div className={styles.logo}>
					<Image className={styles.image} height={30} src={logoImage} />
				</div>

				<Flex gap='small'>
					<HeaderTab title='Work Space 1' active />
				</Flex>
			</Flex>
		</header>
	);
};