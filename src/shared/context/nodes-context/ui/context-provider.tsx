import { useEdgesState, useNodesState } from '@xyflow/react';
import { ReactNode } from 'react';

import { Edge, Node,NodesContext } from './context.ts';

export const NodesContextProvider = ({ children }: { children: ReactNode }) => {
	const initialNodes = [
		{ id: '0', type: 'salaryInputNode', position: { x: 0, y: 0 }, data: { salary: '340000' } },
		{ id: '1', type: 'expenseNode', position: { x: 0, y: 100 }, data: { expense: '340000' } },
		{ id: '2', type: 'expenseNode', position: { x: 0, y: 200 }, data: { expense: '340000' } },
		{ id: '3', type: 'expenseNode', position: { x: 0, y: 300 }, data: { expense: '340000' } }
	];
	const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

	const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);

	return (
		<NodesContext.Provider value={{ nodes, edges, setNodes, setEdges, onNodesChange, onEdgesChange }}>
			{children}
		</NodesContext.Provider>
	);
};