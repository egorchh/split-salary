import '@xyflow/react/dist/style.css';

import {
	addEdge,
	Background,
	BackgroundVariant,
	Connection,
	Controls,
	MiniMap,
	ReactFlow
} from '@xyflow/react';
import { useCallback, useContext, useMemo } from 'react'; 

import { ExpenseNode, SalaryInputNode } from '@/entities/nodes';
import { NodesContext } from '@/shared/context/nodes-context';

import styles from './styles.module.css';

export const Board = () => {
	const {
		nodes,
		edges,
		setEdges,
		onEdgesChange,
		onNodesChange
	} = useContext(NodesContext);
	const nodeTypes = useMemo(() => (
		{
			salaryInputNode: SalaryInputNode,
			expenseNode: ExpenseNode
		}
	), []);

	const onConnect = useCallback(
		(params: Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
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
				<Controls/>
				<MiniMap pannable/>
				<Background variant={BackgroundVariant.Cross} gap={12} size={1}/>
			</ReactFlow>
		</div>
	);
};