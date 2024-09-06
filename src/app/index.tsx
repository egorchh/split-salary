import { useCallback, useMemo } from 'react';
import {
	addEdge,
	Background,
	BackgroundVariant,
	Connection,
	Controls,
	MiniMap,
	ReactFlow,
	useEdgesState,
	useNodesState,
} from '@xyflow/react';
import { SalaryInputNode } from '../nodes';
import styles from './styles.module.css';

import '@xyflow/react/dist/style.css';

export const RootApp = () => {
	const nodeTypes = useMemo(() => ({ salaryInput: SalaryInputNode }), []);

	const initialNodes = [
		{ id: '0', type: 'salaryInput', position: { x: 0, y: 0 }, data: { salary: '123123' } },
		// { id: '1', position: { x: 0, y: 100 }, data: { label: '1' } },
		// { id: '2', position: { x: 0, y: 200 }, data: { label: '2' } },
	];
	const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params: Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);

	return (
		<div className={styles.root}>
			<ReactFlow
				fitView
				nodeTypes={nodeTypes}
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			>
				<Controls />
				<MiniMap pannable />
				<Background variant={BackgroundVariant.Cross} gap={12} size={1} />
			</ReactFlow>
		</div>
	);
}
