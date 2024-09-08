import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RootApp } from './app'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RootApp />
	</StrictMode>
)
