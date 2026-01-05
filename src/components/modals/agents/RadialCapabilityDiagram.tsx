"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Eye,
  Target,
  Calculator,
  Globe,
  MessageSquare,
  Users,
  RefreshCw,
  Clock,
  Bell,
  BarChart3,
  Star,
  Gift,
  UserCheck,
  Send,
} from "lucide-react";
import { AgentType } from "@/types/modal";

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  items: string[];
}

interface CapabilityGroup {
  id: string;
  title: string;
  subtitle: string;
  items: CapabilityItem[];
}

interface AgentCapabilities {
  centerTitle: string;
  centerSubtitle: string;
  summary: string;
  groups: CapabilityGroup[];
}

const capabilitiesByAgent: Record<AgentType, AgentCapabilities> = {
  sdr: {
    centerTitle: "Agente SDR",
    centerSubtitle: "Qualificação 24h",
    summary: "Entrada clara, análise inteligente e entrega qualificada.",
    groups: [
      {
        id: "entrada",
        title: "Entrada",
        subtitle: "Capta e entende o lead",
        items: [
          {
            id: "conversacao",
            title: "Conversação natural",
            subtitle: "Atende via WhatsApp",
            icon: MessageSquare,
            items: ["Entende áudios", "Mantém contexto"],
          },
          {
            id: "ocr",
            title: "Leitura de faturas",
            subtitle: "Visão computacional",
            icon: Eye,
            items: ["Extrai consumo kWh e valor", "Valida mínimo R$ 250"],
          },
        ],
      },
      {
        id: "analise",
        title: "Análise",
        subtitle: "Valida e qualifica",
        items: [
          {
            id: "validacoes",
            title: "Validações",
            subtitle: "Pesquisas online",
            icon: Globe,
            items: ["Consulta CPF/CNPJ", "Verifica restrições"],
          },
          {
            id: "qualificacao",
            title: "Qualificação",
            subtitle: "Score automático",
            icon: Target,
            items: ["Atribui score de intenção", "Prioriza leads quentes"],
          },
        ],
      },
      {
        id: "acao",
        title: "Ação",
        subtitle: "Entrega e escala",
        items: [
          {
            id: "simulacoes",
            title: "Simulações",
            subtitle: "Cérebro matemático",
            icon: Calculator,
            items: ["Calcula economia mensal", "Projeta payback"],
          },
          {
            id: "escalacao",
            title: "Handoff inteligente",
            subtitle: "Escala para vendedor",
            icon: Users,
            items: ["Detecta interesse real", "Transfere com contexto"],
          },
        ],
      },
    ],
  },
  noshow: {
    centerTitle: "Agente Follow-up",
    centerSubtitle: "Recuperação automática",
    summary: "Reativa leads, trata objeções e entrega oportunidade quente.",
    groups: [
      {
        id: "reativacao",
        title: "Reativação",
        subtitle: "Retoma conversas perdidas",
        items: [
          {
            id: "recuperacao",
            title: "Recuperação",
            subtitle: "Orçamentos pendentes",
            icon: RefreshCw,
            items: ["Detecta propostas sem resposta", "Retoma conversa após 24h/48h"],
          },
          {
            id: "cadencia",
            title: "Cadência",
            subtitle: "Sequência otimizada",
            icon: Clock,
            items: ["1º toque: lembrete amigável", "2º toque: valor agregado"],
          },
        ],
      },
      {
        id: "negociacao",
        title: "Negociação",
        subtitle: "Enfrenta hesitações",
        items: [
          {
            id: "objecoes",
            title: "Objeções",
            subtitle: "Trata hesitações",
            icon: MessageSquare,
            items: ["Identifica motivo da dúvida", "Responde com argumentos"],
          },
          {
            id: "gatilhos",
            title: "Gatilhos",
            subtitle: "Cria urgência",
            icon: Bell,
            items: ["Vagas limitadas", "Prazo de validade"],
          },
        ],
      },
      {
        id: "entrega",
        title: "Entrega",
        subtitle: "Escala e mede",
        items: [
          {
            id: "handoff",
            title: "Handoff",
            subtitle: "Escala vendedor",
            icon: Users,
            items: ["Detecta interesse real", "Transfere com contexto"],
          },
          {
            id: "metricas",
            title: "Métricas",
            subtitle: "Taxa de recuperação",
            icon: BarChart3,
            items: ["% leads reativados", "Motivos de perda"],
          },
        ],
      },
    ],
  },
  nps: {
    centerTitle: "Agente Pós-vendas",
    centerSubtitle: "Relacionamento contínuo",
    summary: "Mantém o cliente ativo, satisfeito e engajado.",
    groups: [
      {
        id: "relacionamento",
        title: "Relacionamento",
        subtitle: "Contato proativo",
        items: [
          {
            id: "cobranca",
            title: "Cobranças",
            subtitle: "Lembretes automáticos",
            icon: Bell,
            items: ["Aviso de vencimento", "Status de pagamento"],
          },
          {
            id: "informativos",
            title: "Informativos",
            subtitle: "Comunicação proativa",
            icon: Send,
            items: ["Economia gerada no mês", "Status da instalação"],
          },
        ],
      },
      {
        id: "satisfacao",
        title: "Satisfação",
        subtitle: "Percepção do cliente",
        items: [
          {
            id: "nps",
            title: "Pesquisa NPS",
            subtitle: "Satisfação do cliente",
            icon: Star,
            items: ["Pergunta após instalação", "Classifica promotor/detrator"],
          },
          {
            id: "indicacao",
            title: "Indicação",
            subtitle: "Programa de benefícios",
            icon: Gift,
            items: ["Indique e ganhe desconto", "Rastreia indicações"],
          },
        ],
      },
      {
        id: "acao",
        title: "Ação",
        subtitle: "Suporte e insights",
        items: [
          {
            id: "suporte",
            title: "Suporte",
            subtitle: "Dúvidas pós-venda",
            icon: UserCheck,
            items: ["FAQ de cliente ativo", "Escala para atendimento humano"],
          },
          {
            id: "dashboard",
            title: "Dashboard",
            subtitle: "Visão do cliente",
            icon: BarChart3,
            items: ["NPS geral e evolução", "Taxa de indicação"],
          },
        ],
      },
    ],
  },
};

interface RadialCapabilityDiagramProps {
  agentType: AgentType;
  agentColor: string;
}

export default function RadialCapabilityDiagram({
  agentType,
  agentColor,
}: RadialCapabilityDiagramProps) {
  const agentConfig = capabilitiesByAgent[agentType];

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0b1220]/80 p-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="flex flex-col items-center text-center gap-2">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: agentColor }}
          />
          Infográfico do agente
        </div>
        <div className="flex items-center gap-2 text-white">
          <Bot className="w-5 h-5 text-white/70" />
          <span className="text-base font-semibold">
            Mapa do {agentConfig.centerTitle}
          </span>
        </div>
        <p className="text-body text-white/60">{agentConfig.summary}</p>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-40"
            style={{ backgroundColor: agentColor }}
          />
          <div
            className="relative w-28 h-28 rounded-full border border-white/20 flex flex-col items-center justify-center text-white text-center"
            style={{ backgroundColor: agentColor }}
          >
            <Bot className="w-7 h-7 mb-1" />
            <span className="text-xs font-semibold">
              {agentConfig.centerTitle}
            </span>
            <span className="text-[11px] text-white/80">
              {agentConfig.centerSubtitle}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {agentConfig.groups.map((group, index) => (
          <motion.div
            key={group.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white/70 text-sm font-semibold">
                {index + 1}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Etapa {index + 1}
                </p>
                <h4 className="text-base font-semibold text-white">
                  {group.title}
                </h4>
                <p className="text-xs text-white/50">{group.subtitle}</p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-start gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${agentColor}20` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: agentColor }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/50">{item.subtitle}</p>
                      <ul className="mt-2 space-y-1">
                        {item.items.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-xs text-white/60"
                          >
                            <span className="mt-1 h-1 w-1 rounded-full bg-white/40" />
                            <span className="leading-snug">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
