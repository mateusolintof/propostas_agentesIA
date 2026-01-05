"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Link2,
  LayoutDashboard,
  GraduationCap,
  Check,
  Sparkles,
} from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

type Plan = {
  name: string;
  subtitle: string;
  setup: { current: string; previous?: string };
  monthly: { current: string; previous?: string };
  bullets: string[];
  badge?: string;
  featured?: boolean;
};

// Ordem: Follow-up | SDR (centro) | Pós-vendas
const agentPlans: Plan[] = [
  {
    name: "Agente Follow-up Automático",
    subtitle: "Cadência multicanal e recuperação de oportunidades",
    setup: { current: "R$ 5.000" },
    monthly: { current: "R$ 1.000/mês" },
    bullets: [
      "Cadência ativa até fechar ou desqualificar",
      "Alertas no CRM quando o lead reengaja",
      "Recuperação de orçamentos e no-shows",
    ],
  },
  {
    name: "Agente SDR & Qualificação",
    subtitle: "Captação, triagem e passagem quente para vendas",
    setup: { current: "R$ 15.000" },
    monthly: { current: "R$ 2.000/mês" },
    bullets: [
      "Qualificação e agendamento instantâneos",
      "Roteamento inteligente para o vendedor certo",
      "Scripts de vendas 24/7 alinhados ao playbook",
    ],
    badge: "Mais buscado",
    featured: true,
  },
  {
    name: "Agente Pós-vendas & NPS",
    subtitle: "Pesquisa, reativação e expansão da carteira",
    setup: { current: "R$ 5.000" },
    monthly: { current: "R$ 1.000/mês" },
    bullets: [
      "Pesquisa NPS e coleta estruturada de feedback",
      "Reativação de clientes inativos com ofertas",
      "Base de conhecimento viva para respostas consistentes",
    ],
  },
];

const fullPlan: Plan = {
  name: "Ecossistema Full",
  subtitle: "Os 3 agentes + CRM, Dashboard e integrações",
  setup: { current: "R$ 0", previous: "R$ 25.000" },
  monthly: { current: "R$ 4.000/mês" },
  bullets: [
    "Três agentes orquestrados (SDR, Follow-up, Pós-vendas & NPS)",
    "CRM + Dashboard executivo prontos para uso",
    "Integrações, suporte contínuo e otimizações",
  ],
  badge: "Mais completo",
  featured: true,
};

const deliverables = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "3 Agentes Personalizados",
    items: [
      "SDR & Qualificação",
      "Follow-up Automático",
      "Pós-vendas & NPS",
    ],
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Ferramentas e Integrações",
    items: [
      "Leitura de imagens e faturas de energia",
      "Cálculos matemáticos",
      "Escalação para Humano",
      "Notificação Inteligente para vendedor",
    ],
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "CRM & Dashboard",
    items: [
      "Funil de vendas",
      "KPIs em tempo real",
      "Relatórios executivos",
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Treinamento & Suporte",
    items: [
      "Suporte contínuo",
      "30 dias de testes até validação do time",
      "Banco de dados completo e servidor 24/7",
    ],
  },
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const isFeatured = plan.featured;
  return (
    <motion.div
      className={`relative rounded-2xl border bg-white/5 p-6 flex flex-col gap-4 ${
        isFeatured
          ? "border-[#00E5FF]/40 bg-[#00E5FF]/5 shadow-[0_20px_50px_-24px_rgba(0,229,255,0.5)]"
          : "border-white/10"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      {plan.badge ? (
        <div
          className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
            isFeatured ? "bg-[#00E5FF] text-black" : "bg-white/10 text-white"
          }`}
        >
          <Sparkles className="w-3 h-3" />
          {plan.badge}
        </div>
      ) : null}

      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
        <p className="text-white/60 text-body leading-relaxed">{plan.subtitle}</p>
      </div>

      <div className="pt-2 border-t border-white/10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
          Setup
        </p>
        <div className="flex items-baseline gap-2 mt-1">
          {plan.setup.previous ? (
            <span className="text-white/30 line-through text-body">
              {plan.setup.previous}
            </span>
          ) : null}
          <span className="text-3xl font-bold text-white">
            {plan.setup.current}
          </span>
          <span className="text-white/50 text-xs">pagamento único</span>
        </div>
      </div>

      <div className="pt-1">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
          Mensalidade
        </p>
        <div className="flex items-baseline gap-2 mt-1">
          {plan.monthly.previous ? (
            <span className="text-white/30 line-through text-body">
              {plan.monthly.previous}
            </span>
          ) : null}
          <span className="text-3xl font-bold text-[#00FF94]">
            {plan.monthly.current}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {plan.bullets.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 text-white/70 text-body leading-relaxed"
          >
            <Check className="w-4 h-4 text-[#00FF94] mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function InvestimentoSlide() {
  return (
    <SlideShell
      eyebrow="Investimento"
      eyebrowColor="success"
      title="Investimento"
      subtitle="Planos por agente e pacote completo, com economia progressiva"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF94]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-8">
        {/* Linha 1: 3 agentes (Follow-up | SDR centro | Pós-vendas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {agentPlans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Linha 2: Ecossistema Full (largura total) */}
        <motion.div
          className="relative rounded-2xl border border-[#00FF94]/40 bg-gradient-to-r from-[#00FF94]/10 via-[#00E5FF]/10 to-[#00FF94]/10 p-6 shadow-[0_20px_50px_-24px_rgba(0,255,148,0.4)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 bg-[#00FF94] text-black">
            <Sparkles className="w-3 h-3" />
            {fullPlan.badge}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_1fr] gap-6 items-center">
            {/* Info */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                {fullPlan.name}
              </h3>
              <p className="text-white/60 text-body leading-relaxed">
                {fullPlan.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                {fullPlan.bullets.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-white/70 text-body"
                  >
                    <Check className="w-4 h-4 text-[#00FF94] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Setup */}
            <div className="text-center px-6 border-l border-white/10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1">
                Setup
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-white/30 line-through text-body">
                  {fullPlan.setup.previous}
                </span>
                <span className="text-4xl font-bold text-[#00FF94]">
                  {fullPlan.setup.current}
                </span>
              </div>
              <p className="text-white/40 text-xs mt-1">pagamento único</p>
            </div>

            {/* Mensalidade */}
            <div className="text-center px-6 border-l border-white/10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1">
                Mensalidade
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold text-[#00FF94]">
                  {fullPlan.monthly.current}
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-end">
              <div className="bg-[#00FF94]/20 border border-[#00FF94]/40 rounded-2xl px-6 py-4 text-center">
                <p className="text-[#00FF94] font-bold text-2xl">100% OFF</p>
                <p className="text-white/60 text-xs">no setup</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="pt-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 bg-[#00E5FF] rounded-full" />
            <h3 className="text-lg font-semibold text-white">
              Entregáveis Inclusos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-[#00E5FF]/10 rounded-lg text-[#00E5FF]">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {item.items.map((subItem) => (
                    <li
                      key={subItem}
                      className="flex items-center gap-2 text-white/60 text-body"
                    >
                      <Check className="w-4 h-4 text-[#00FF94]" />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
