"use client";

import { motion } from "framer-motion";
import { TrendingDown, Clock, AlertTriangle } from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import GaugeChart from "@/components/ui/GaugeChart";

const metricsAtual = [
  {
    icon: <Clock className="w-5 h-5" />,
    value: "320",
    title: "Leads fora do horário comercial",
    caption: "64% do total mensal",
    color: "text-amber-400",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    value: "5%",
    title: "Taxa de conversão atual",
    caption: "Base histórica do funil",
    color: "text-red-400",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    value: "Alto",
    title: "Oportunidades perdidas",
    caption: "Sem resposta imediata",
    color: "text-amber-400",
  },
];

export default function DiagnosticoSlide() {
  return (
    <SlideShell
      eyebrow="Diagnóstico & Cenário"
      eyebrowColor="warning"
      title="Análise de Eficiência & Gargalos"
      subtitle="Como a cobertura de atendimento 24/7 e Atendimento Qualificado vão destravar sua Taxa de Conversão."
      size="compact"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="w-full space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-300/70">
              01
            </span>
            <h3 className="text-lg font-semibold text-white">
              Diagnóstico Atual (base 500 leads)
            </h3>
          </div>
          <p className="text-body text-white/50">
            O gargalo principal acontece na velocidade e na cobertura do
            atendimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metricsAtual.map((metric, index) => (
              <motion.div
                key={metric.value + metric.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-white/5 rounded-lg ${metric.color}`}>
                    {metric.icon}
                  </div>
                  <span className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </span>
                </div>
                <p className="mt-3 text-white/80 text-body font-medium">
                  {metric.title}
                </p>
                <p className="text-white/40 text-xs mt-1">{metric.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
              02
            </span>
            <h3 className="text-lg font-semibold text-white">
              Projeção com IA (R$ 3.000/mês em mídia)
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <GaugeChart
                  value={14}
                  max={50}
                  label="Cenário Atual (5%)"
                  sublabel="~14 vendas/mês"
                  color="amber"
                />
                <GaugeChart
                  value={32}
                  max={50}
                  label="Cenário IA (10-12%)"
                  sublabel="~32 vendas/mês"
                  color="emerald"
                />
              </div>

              <motion.div
                className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 flex items-center justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <p className="text-emerald-400 font-bold text-3xl">+128%</p>
                  <p className="text-white/60 text-body">
                    Aumento projetado em vendas
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-xs">De 14 para 32 vendas</p>
                  <p className="text-emerald-400 text-body font-medium">
                    +18 vendas/mês
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Base de investimento
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-body text-white/70">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    Custo/lead ~R$11
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    ~272 leads/mês
                  </span>
                </div>
              </div>

              <motion.div
                className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-red-400 text-xs uppercase tracking-wider mb-1">
                  Risco da Inércia
                </p>
                <p className="text-white/70 text-body">
                  Sem IA: ~174 leads/mês (64%) continuarão sem resposta imediata.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/80 text-body leading-relaxed">
            <strong className="text-[#00FF94]">Diagnóstico:</strong> o gargalo é
            falta de capacidade de processamento.{" "}
            <strong className="text-[#00E5FF]">
              A implementação dos agentes
            </strong>{" "}
            recupera a eficiência dos 64% de leads que hoje ficam sem
            atendimento imediato.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
