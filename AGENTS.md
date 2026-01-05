# Modelo de Proposta Comercial — Guia de Desenvolvimento

## Visao Geral

Apresentacao horizontal interativa para Proposta Comercial da minha agência de Tecnologia - Convert.AI , focada em Agentes de IA para Atendimento Comercial e outras soluções.

**Cliente:** Modelo base
**Documento de negocio:** `public/docs/CONTEUDO.md`
**Porta de desenvolvimento:** 3001

## Stack Tecnica

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| Next.js | 16.1.1 | App Router com Webpack (Turbopack opcional) |
| React | 19.2.3 | UI Library |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | v4 | `@theme inline` |
| Framer Motion | 12.x | Animacoes |
| React Three Fiber | 9.x | Background 3D |
| HeroUI | 2.8.7 | Componentes base |
| Recharts | 3.6.0 | Graficos |
| XYFlow React | 12.10 | Diagramas de fluxo |
| Lucide | 0.562 | Icones |

## Execucao

```bash
npm install
npm run dev             # webpack dev (http://localhost:3001)
npm run dev:turbo       # turbopack dev (opcinal, requer acesso)
npm run build           # producao (webpack)
npm run build:turbo     # producao (turbopack, rede requerida)
npm start -p 3001       # Servir build final
```

## Arquitetura de Componentes

### Container Principal (`src/app/page.tsx`)

- Scroll horizontal com CSS snap
- Gerenciamento de estado para modais (`useState<ModalKind>`)
- Navegacao por teclado (←, →, Space, Home, End)
- Conversao de mouse wheel para scroll horizontal
- Progress bar animada com Framer Motion

### Slides (9 total)

```
src/components/slides/
├── IntroSlide.tsx           # Hero com logo Convert.AI
├── DiagnosticoSlide.tsx     # Diagnostico explicativo + mini graficos
├── ObjetivoProjetoSlide.tsx # Requisitos e diferencais tecnicos
├── SolucaoSlide.tsx         # 3 agentes IA (abre AgentModal)
├── FerramentasSlide.tsx     # CRM + Dashboard (abre modais de preview)
├── GanhosSlide.tsx          # Resultados + Viabilidade (calculadoras)
├── InvestimentoSlide.tsx    # Planos + entregaveis inclusos
├── FAQSlide.tsx             # 6 perguntas frequentes (accordion)
└── CronogramaSlide.tsx      # 4 fases: Kick-off, Dev, Validacao, Go-Live
```

### SlideShell Props

```tsx
interface SlideShellProps {
  eyebrow?: string;        // Label superior (ex: "Solucao")
  eyebrowColor?: "default" | "success" | "warning" | "danger";
  title: string;           // Titulo principal
  subtitle?: string;       // Subtitulo
  align?: "left" | "center";
  size?: "default" | "compact";
  background?: ReactNode;  // Background customizado
  children?: ReactNode;    // Conteudo do slide
}
```

### Sistema de Modais

#### Tipos (`src/types/modal.ts`)

```typescript
export type AgentType = "sdr" | "noshow" | "nps";

export type ModalKind =
  | { type: "agent"; agent: AgentType }
  | { type: "crm" }
  | { type: "dashboard" }
  | { type: "roi" }
  | { type: "costs" }
  | { type: "gains" }
  | { type: "intelligence" }
  | null;
```

#### Modais Disponiveis

| Modal | Arquivo | Aberto por | Descricao |
|-------|---------|------------|-----------|
| AgentModal | `AgentModal.tsx` | SolucaoSlide | Detalhes dos 3 agentes IA |
| CRMPreviewModal | `CRMPreviewModal.tsx` | FerramentasSlide | Preview interativo do CRM |
| DashboardPreviewModal | `DashboardPreviewModal.tsx` | FerramentasSlide | Preview do Dashboard |
| ROICalculatorModal | `ROICalculatorModal.tsx` | GanhosSlide | Calculadora interativa |
| CostReductionModal | `CostReductionModal.tsx` | GanhosSlide | Simulador de economia |
| GainsModal | `GainsModal.tsx` | GanhosSlide | Ganhos operacionais |
| IntelligenceModal | `IntelligenceModal.tsx` | GanhosSlide | Inteligencia de dados |

#### Sub-componentes de Modais

```
src/components/modals/
├── ModalWrapper.tsx              # Base wrapper com overlay e animacoes
├── agents/
│   ├── RadialCapabilityDiagram.tsx  # Infografico em etapas por agente
│   └── AgentFlowDiagram.tsx         # Fluxograma interativo (XYFlow)
├── crm/
│   ├── CRMDashboardView.tsx      # Visao geral do CRM
│   ├── CRMContactsView.tsx       # Lista de contatos/leads
│   ├── CRMPipelineView.tsx       # Pipeline de vendas (kanban)
│   └── CRMInboxView.tsx          # Caixa de mensagens
└── dashboard/
    ├── DashVisaoGeralView.tsx    # KPIs principais
    ├── DashGestaoIAView.tsx      # Metricas dos agentes
    ├── DashClientesView.tsx      # Base de clientes
    └── DashInsightsView.tsx      # Insights e recomendacoes
```

### Agentes IA

| ID | Nome | Funcao | Cor |
|----|------|--------|-----|
| sdr | SDR & Qualificacao | Qualificacao e conversao 24/7 | Cyan |
| noshow | Follow-up Automatico | Cadencia e recuperacao de conversoes | Cyan |
| nps | Pesquisa & NPS | Coleta de feedback pos-compra | Verde |

Cada agente no AgentModal exibe:
- Infografico em etapas (Entrada → Analise → Acao ou equivalente)
- Fluxograma interativo com XYFlow
- Lista de beneficios
- Metricas esperadas

## Tema e Cores

```css
/* Cores principais */
--background: #02040A      /* Fundo escuro */
--accent-tech: #00E5FF     /* Cyan tecnologico */
--accent-success: #00FF94  /* Verde sucesso */

/* Opacidades padrao */
bg-white/5                 /* Cards e containers */
border-white/10            /* Bordas sutis */
text-white/70              /* Texto secundario */
text-white/50              /* Texto terciario */
```

## Background 3D

```tsx
// Importacao dinamica (evita SSR)
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

// Configuracao
- 150 particulas brancas conectadas
- Movimento organico (noise-based)
- Post-processing: Bloom + Vignette
- Opacity 30% + pointer-events-none
- Z-index 0 (abaixo do conteudo)
```

## Navegacao

| Acao | Input |
|------|-------|
| Proximo slide | `→`, `Space`, scroll |
| Slide anterior | `←` |
| Primeiro slide | `Home` |
| Ultimo slide | `End` |
| Slide especifico | Clique no dot |

## Padroes de Codigo

### Guia de padronizacao visual

Consulte `STYLE_GUIDE.md` antes de alterar layout, tipografia, cores ou hierarquia de conteudo.

### Tipografia minima

- Texto legivel: minimo `text-[11px]`
- Labels: `text-xs` (12px)
- Body: `text-body`
- Headings: `text-base` a `text-5xl`

### Animacoes

```tsx
// Entrada de elementos
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}

// Hover em botoes
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Modais com navegacao interna

```tsx
// Estado para abas
const [activeView, setActiveView] = useState<ViewType>("dashboard");

// Tabs com HeroUI ou custom
<button
  onClick={() => setActiveView("dashboard")}
  className={activeView === "dashboard" ? "bg-white/10" : ""}
>
  Dashboard
</button>
```

## Checklist do Projeto

- [x] 9 slides criados e funcionando
- [x] Background 3D integrado
- [x] Navegacao horizontal com snap
- [x] 7 modais interativos
- [x] AgentModal com infografico em etapas e fluxograma
- [x] CRM Preview com 4 abas
- [x] Dashboard Preview com 4 abas
- [x] Calculadoras de ROI e economia
- [x] GainsModal e IntelligenceModal com graficos
- [x] FAQSlide com accordion
- [x] Animacoes Framer Motion
- [x] Responsivo mobile/desktop
- [x] Paleta de cores aplicada

## Conteudo de Negocio

Ver `public/docs/CONTEUDO.md` para detalhes sobre:

1. **Diagnostico:** gargalos de cobertura e conversao
2. **Solucoes:** 3 agentes IA especializados
3. **Ferramentas:** CRM + Dashboard executivo
4. **Metricas:** KPIs e metas esperadas
5. **Investimento:** planos por agente + pacote completo
6. **Cronograma:** 4 fases de implementacao
