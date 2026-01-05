"use client";

import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  MarkerType,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion, useReducedMotion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  HelpCircle,
  CalendarCheck,
  Star,
  Phone,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  Users,
  FileText,
  Send,
  AlertTriangle,
  ThumbsUp,
  BarChart3,
} from "lucide-react";
import { AgentType } from "@/types/modal";

// Icon map for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Bot,
  HelpCircle,
  CalendarCheck,
  Star,
  Phone,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  Users,
  FileText,
  Send,
  AlertTriangle,
  ThumbsUp,
  BarChart3,
};

// Variant styles for different node types
const variantStyles: Record<
  string,
  { border: string; iconBg: string; icon: string; title: string; desc: string }
> = {
  input: {
    border: "border-emerald-400/40",
    iconBg: "bg-emerald-400/15",
    icon: "text-emerald-300",
    title: "text-white",
    desc: "text-white/55",
  },
  primary: {
    border: "border-sky-400/40",
    iconBg: "bg-sky-400/15",
    icon: "text-sky-300",
    title: "text-white",
    desc: "text-white/55",
  },
  decision: {
    border: "border-amber-400/40",
    iconBg: "bg-amber-400/15",
    icon: "text-amber-300",
    title: "text-white",
    desc: "text-white/55",
  },
  output: {
    border: "border-violet-400/40",
    iconBg: "bg-violet-400/15",
    icon: "text-violet-300",
    title: "text-white",
    desc: "text-white/55",
  },
  success: {
    border: "border-emerald-400/50",
    iconBg: "bg-emerald-400/15",
    icon: "text-emerald-300",
    title: "text-white",
    desc: "text-white/55",
  },
  danger: {
    border: "border-rose-400/45",
    iconBg: "bg-rose-400/15",
    icon: "text-rose-300",
    title: "text-white",
    desc: "text-white/55",
  },
  default: {
    border: "border-white/20",
    iconBg: "bg-white/10",
    icon: "text-white/60",
    title: "text-white",
    desc: "text-white/50",
  },
};

interface CustomNodeData {
  label: string;
  description?: string;
  icon?: string;
  variant?: string;
}

// Custom Node Component with animations
function CustomNode({ data }: { data: CustomNodeData }) {
  const shouldReduceMotion = useReducedMotion();
  const variant = data.variant || "default";
  const styles = variantStyles[variant] || variantStyles.default;
  const Icon = data.icon ? iconMap[data.icon] : null;

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative px-4 py-3 rounded-2xl border ${styles.border} bg-[#0b1220]/90 shadow-[0_18px_35px_-28px_rgba(0,0,0,0.9)] min-w-[180px] max-w-[220px] cursor-grab active:cursor-grabbing hover:border-white/30 transition-colors`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-white/40 !border-2 !border-white/70"
      />

      <div className="flex items-start gap-2">
        {Icon && (
          <div className={`p-1.5 rounded-lg ${styles.iconBg} flex-shrink-0`}>
            <Icon className={`w-4 h-4 ${styles.icon}`} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-semibold ${styles.title} leading-tight`}>
            {data.label}
          </p>
          {data.description && (
            <p className={`text-xs mt-0.5 leading-tight ${styles.desc}`}>
              {data.description}
            </p>
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-white/40 !border-2 !border-white/70"
      />
    </motion.div>
  );
}

const nodeTypes = { custom: CustomNode };

// Flow data for each agent type
const flowDataByAgent: Record<AgentType, { nodes: Node[]; edges: Edge[] }> = {
  sdr: {
    nodes: [
      { id: "1", type: "custom", position: { x: 0, y: 100 }, data: { label: "Lead Chega", description: "WhatsApp / Landing", icon: "MessageSquare", variant: "input" } },
      { id: "2", type: "custom", position: { x: 200, y: 100 }, data: { label: "Agente SDR", description: "Qualifica e direciona", icon: "Bot", variant: "primary" } },
      { id: "3", type: "custom", position: { x: 400, y: 0 }, data: { label: "Cliente PF/PJ?", description: "Define perfil", icon: "HelpCircle", variant: "decision" } },
      { id: "4", type: "custom", position: { x: 400, y: 200 }, data: { label: "Cadastro OK?", description: "Valida dados", icon: "FileText", variant: "decision" } },
      { id: "5", type: "custom", position: { x: 600, y: 100 }, data: { label: "Qualificação", description: "Coleta dados", icon: "Users", variant: "primary" } },
      { id: "6", type: "custom", position: { x: 800, y: 100 }, data: { label: "Orçamento/Pedido", description: "Gera proposta", icon: "Calendar", variant: "success" } },
      { id: "7", type: "custom", position: { x: 1000, y: 100 }, data: { label: "Registra CRM", description: "Salva lead", icon: "CheckCircle", variant: "success" } },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e2-3", source: "2", target: "3", animated: true, style: { stroke: "#3b82f6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
      { id: "e2-4", source: "2", target: "4", animated: true, style: { stroke: "#3b82f6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" } },
      { id: "e3-5", source: "3", target: "5", style: { stroke: "#64748b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" } },
      { id: "e4-5", source: "4", target: "5", style: { stroke: "#64748b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" } },
      { id: "e5-6", source: "5", target: "6", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e6-7", source: "6", target: "7", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
    ],
  },
  noshow: {
    nodes: [
      { id: "1", type: "custom", position: { x: 0, y: 100 }, data: { label: "Orçamento/Pedido", description: "Pendente", icon: "Calendar", variant: "input" } },
      { id: "2", type: "custom", position: { x: 200, y: 100 }, data: { label: "Follow-up", description: "Automático", icon: "Clock", variant: "primary" } },
      { id: "3", type: "custom", position: { x: 400, y: 0 }, data: { label: "Responde", description: "Cliente engaja", icon: "CheckCircle", variant: "success" } },
      { id: "4", type: "custom", position: { x: 400, y: 100 }, data: { label: "Ajusta oferta", description: "Preço/prazo", icon: "Calendar", variant: "decision" } },
      { id: "5", type: "custom", position: { x: 400, y: 200 }, data: { label: "Perdido", description: "Sem resposta", icon: "XCircle", variant: "danger" } },
      { id: "6", type: "custom", position: { x: 600, y: 0 }, data: { label: "2º toque", description: "24h", icon: "Clock", variant: "primary" } },
      { id: "7", type: "custom", position: { x: 600, y: 200 }, data: { label: "Escala humano", description: "Vendedor", icon: "Users", variant: "success" } },
      { id: "8", type: "custom", position: { x: 800, y: 0 }, data: { label: "Pedido fechado", description: "Compra OK", icon: "CheckCircle", variant: "success" } },
      { id: "9", type: "custom", position: { x: 1000, y: 0 }, data: { label: "Pós-venda / NPS", description: "Satisfação", icon: "Star", variant: "output" } },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#f87171" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f87171" } },
      { id: "e2-3", source: "2", target: "3", style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e2-4", source: "2", target: "4", style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e2-5", source: "2", target: "5", style: { stroke: "#ef4444" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ef4444" } },
      { id: "e3-6", source: "3", target: "6", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e5-7", source: "5", target: "7", style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e6-8", source: "6", target: "8", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e8-9", source: "8", target: "9", animated: true, style: { stroke: "#8b5cf6" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" } },
    ],
  },
  nps: {
    nodes: [
      { id: "1", type: "custom", position: { x: 0, y: 100 }, data: { label: "Instalação concluída", description: "Projeto entregue", icon: "CheckCircle", variant: "input" } },
      { id: "2", type: "custom", position: { x: 200, y: 100 }, data: { label: "Envia NPS", description: "Pesquisa WhatsApp", icon: "Send", variant: "primary" } },
      { id: "3", type: "custom", position: { x: 400, y: 0 }, data: { label: "Promotor (9-10)", description: "Cliente satisfeito", icon: "ThumbsUp", variant: "success" } },
      { id: "4", type: "custom", position: { x: 400, y: 100 }, data: { label: "Neutro (7-8)", description: "Experiência OK", icon: "HelpCircle", variant: "decision" } },
      { id: "5", type: "custom", position: { x: 400, y: 200 }, data: { label: "Detrator (0-6)", description: "Insatisfeito", icon: "AlertTriangle", variant: "danger" } },
      { id: "6", type: "custom", position: { x: 600, y: 0 }, data: { label: "Convida Review", description: "Google Reviews", icon: "Star", variant: "success" } },
      { id: "7", type: "custom", position: { x: 600, y: 200 }, data: { label: "Alerta Equipe", description: "Ação imediata", icon: "AlertTriangle", variant: "danger" } },
      { id: "8", type: "custom", position: { x: 800, y: 100 }, data: { label: "Dashboard", description: "Insights e métricas", icon: "BarChart3", variant: "output" } },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#eab308" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#eab308" } },
      { id: "e2-3", source: "2", target: "3", style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e2-4", source: "2", target: "4", style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e2-5", source: "2", target: "5", style: { stroke: "#ef4444" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ef4444" } },
      { id: "e3-6", source: "3", target: "6", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e5-7", source: "5", target: "7", animated: true, style: { stroke: "#ef4444" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ef4444" } },
      { id: "e3-8", source: "3", target: "8", style: { stroke: "#64748b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" } },
      { id: "e4-8", source: "4", target: "8", style: { stroke: "#64748b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" } },
      { id: "e7-8", source: "7", target: "8", style: { stroke: "#64748b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#64748b" } },
    ],
  },
};

interface AgentFlowDiagramProps {
  agentType: AgentType;
  agentColor: string;
}

export default function AgentFlowDiagram({ agentType, agentColor }: AgentFlowDiagramProps) {
  const flowData = flowDataByAgent[agentType];
  const [nodes, , onNodesChange] = useNodesState(flowData.nodes);
  const [edges, , onEdgesChange] = useEdgesState(flowData.edges);

  return (
    <div className="w-full h-[520px] bg-[#0b1220]/80 rounded-2xl border border-white/10 overflow-hidden relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: agentColor }}
      />
      {/* Header */}
      <div className="absolute top-4 left-4 z-10 bg-[#0b1220]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 shadow-sm">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: agentColor }}
          />
          <h4 className="text-sm font-semibold text-white">Fluxo de Operação</h4>
        </div>
        <p className="text-xs text-white/50">Arraste nodes para ajustar o layout</p>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3, includeHiddenNodes: false }}
        minZoom={0.5}
        maxZoom={1.8}
        attributionPosition="bottom-left"
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        zoomOnScroll={true}
        panOnScroll={true}
        panOnDrag={true}
        selectNodesOnDrag={false}
      >
        <Background color="rgba(255,255,255,0.08)" gap={22} size={1} />
      </ReactFlow>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-[#0b1220]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 shadow-sm">
        <div className="flex items-center gap-3 text-[11px]">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-white/60">Entrada</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-white/60">Processo</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-white/60">Decisão</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-white/60">Saída</span>
          </div>
        </div>
      </div>
    </div>
  );
}
