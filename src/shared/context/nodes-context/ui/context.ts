import { OnEdgesChange, OnNodesChange } from '@xyflow/react';
import { createContext, Dispatch, SetStateAction } from 'react';

import { noop } from '../../../lib/noop.ts';

export type Node = {
	id: string;
	type?: string;
	position: {
		x: number;
		y: number;
	}
	data: Record<string, unknown>;
}

export type Edge = {
	id: string;
	source: string;
	target: string;
}

export interface NodesContextProps {
	nodes: Node[];
	edges: Edge[];
	setNodes: Dispatch<SetStateAction<Node[]>>,
	setEdges: Dispatch<SetStateAction<Edge[]>>,
	onNodesChange: OnNodesChange;
	onEdgesChange: OnEdgesChange;
}

export const NodesContext = createContext<NodesContextProps>({
	nodes: [],
	edges: [],
	setNodes: noop,
	setEdges: noop,
	onNodesChange: noop,
	onEdgesChange: noop
});
