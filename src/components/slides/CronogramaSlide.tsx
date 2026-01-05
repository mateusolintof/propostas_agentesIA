/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Handshake, Code, CheckCircle, Rocket } from "lucide-react";
import SlideShell from "@/components/ui/SlideShell";

const phases = [
  {
    phase: 1,
    title: "Kick-off",
    desc: "Alinhamento inicial e levantamento de requisitos",
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    phase: 2,
    title: "Desenvolvimento",
    desc: "Construção dos fluxos e integrações",
    icon: <Code className="w-6 h-6" />,
  },
  {
    phase: 3,
    title: "Validação",
    desc: "Testes com a equipe e ajustes finais",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    phase: 4,
    title: "Go-Live",
    desc: "Lançamento oficial e acompanhamento",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function CronogramaSlide() {
  return (
    <SlideShell
      eyebrow="Cronograma"
      title="Cronograma de Execução"
      subtitle="4 fases até o Go-Live"
      align="center"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#00E5FF]/5 via-transparent to-transparent pointer-events-none" />
      }
    >
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 h-full flex flex-col text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#00FF94]/20 border border-[#00E5FF]/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                  <div className="text-[#00E5FF]">{phase.icon}</div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00FF94] text-[#02040A] text-xs font-bold flex items-center justify-center">
                    {phase.phase}
                  </span>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                    Fase {phase.phase}
                  </p>
                  <h3 className="text-base font-semibold text-white">
                    {phase.title}
                  </h3>
                </div>
              </div>
              <p className="text-white/60 text-body leading-relaxed">
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-white/60 mb-4">Pronto para transformar seu atendimento?</p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#00FF94] rounded-full text-[#02040A] font-semibold">
          <span>Vamos começar</span>
          <Rocket className="w-4 h-4" />
        </div>
      </motion.div>

      {/* Agency signature */}
      <motion.div
        className="mt-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-white/30 text-xs uppercase tracking-widest">Desenvolvido por</p>
        <img
          src="/branding/logo-principal-white.svg"
          alt="Convert A.I - Atendimento Personalizado"
          className="h-12 w-auto opacity-60"
        />
      </motion.div>
    </SlideShell>
  );
}
