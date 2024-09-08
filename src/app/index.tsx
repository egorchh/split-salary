import { MainPage } from '@/pages/main';
import { NodesContextProvider } from '@/shared/context/nodes-context';

export const RootApp = () => {
	return (
		<NodesContextProvider>
			<MainPage />
		</NodesContextProvider>
	);
}
