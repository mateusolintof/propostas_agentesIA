"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown } from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";
import GaugeChart from "@/components/ui/GaugeChart";

const coverage = { noResponse: 64, responded: 36 };
const conversion = { current: 5, projected: 11 };

export default function DiagnosticoSlide() {
  return (
    <SlideShell
      eyebrow="Diagnóstico & Cenário"
      eyebrowColor="warning"
      title="Análise de Eficiência & Gargalos"
      subtitle="Um diagnóstico explicativo do funil para mostrar onde a receita está escapando."
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

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">
                  O que está acontecendo
                </p>
                <p className="mt-2 text-body text-white/60">
                  O gargalo é velocidade de resposta e cobertura. O lead chega,
                  mas o tempo de retorno não acompanha o volume.
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-white/5 p-2 text-amber-300">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-white">
                        64% chegam fora do horário
                      </p>
                      <p className="text-xs text-white/50">
                        ~320 leads/mês sem resposta imediata
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-white/5 p-2 text-red-400">
                      <TrendingDown className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-white">
                        Conversão atual de 5%
                      </p>
                      <p className="text-xs text-white/50">
                        Parte do interesse esfria antes de ser atendido
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-white/5 p-2 text-amber-300">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-white">
                        Oportunidades perdidas
                      </p>
                      <p className="text-xs text-white/50">
                        Lead sem retorno rápido tende a migrar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Leitura do funil
                </p>
                <p className="mt-2 text-body text-white/60">
                  A mídia gera demanda, mas o atendimento não converte no timing
                  ideal. O problema é capacidade, não volume.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Cobertura de atendimento
                </p>
                <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white/10 flex">
                  <div
                    className="h-full bg-amber-400/80"
                    style={{ width: `${coverage.noResponse}%` }}
                  />
                  <div
                    className="h-full bg-emerald-400/70"
                    style={{ width: `${coverage.responded}%` }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-white/50">
                  <span>64% sem resposta rápida</span>
                  <span>36% respondidos</span>
                </div>
                <p className="mt-3 text-body text-white/60">
                  O lead precisa de resposta em minutos, não horas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Conversão no funil
                </p>
                <div className="mt-4 flex items-end gap-4 h-24">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-10 rounded-xl border border-amber-400/40 bg-amber-400/20"
                      style={{ height: `${conversion.current * 6}px` }}
                    />
                    <span className="text-xs text-white/50">Atual 5%</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-10 rounded-xl border border-emerald-400/40 bg-emerald-400/20"
                      style={{ height: `${conversion.projected * 6}px` }}
                    />
                    <span className="text-xs text-white/50">Meta 10-12%</span>
                  </div>
                </div>
                <p className="mt-3 text-body text-white/60">
                  A queda vem de atrasos, triagem manual e falta de cadência.
                </p>
              </div>
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <GaugeChart
                    value={14}
                    max={50}
                    label="Cenário Atual (5%)"
                    sublabel="~14 vendas/mês"
                    color="amber"
                  />
                  <p className="mt-2 text-xs text-white/50">
                    Conversão limitada por resposta lenta e triagem manual.
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                  <GaugeChart
                    value={32}
                    max={50}
                    label="Cenário IA (10-12%)"
                    sublabel="~32 vendas/mês"
                    color="emerald"
                  />
                  <p className="mt-2 text-xs text-white/60">
                    Atendimento 24/7 + qualificação automática acelera o funil.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
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
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Como a IA muda o cenário
                </p>
                <ul className="mt-3 space-y-2 text-body text-white/60">
                  <li>Atendimento 24/7 reduz o tempo de espera.</li>
                  <li>Qualificação automática elimina curiosos.</li>
                  <li>Handoff rápido entrega lead quente ao vendedor.</li>
                </ul>
              </div>

              <motion.div
                className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 flex items-center justify-between"
                initial={{ opacity: 0, scale: 0.96 }}
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

              <motion.div
                className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <p className="text-red-400 text-xs uppercase tracking-wider mb-1">
                  Risco se nada for feito
                </p>
                <p className="text-white/70 text-body">
                  Sem IA: ~174 leads/mês continuarão sem resposta imediata.
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
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/80 text-body leading-relaxed">
            <strong className="text-[#00FF94]">Diagnóstico:</strong> o gargalo
            é falta de capacidade de processamento.{" "}
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
