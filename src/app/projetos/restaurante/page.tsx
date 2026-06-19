"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProjectById } from "@/data/projects";
import Image from "next/image";
import { requestScrollToSection } from "@/lib/scroll";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "@/app/page.css";
import "./demo.css";

const project = getProjectById("restaurante");

export default function RestauranteDemoPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  if (!project) {
    return null;
  }

  const currentStep = project.demoSteps[activeStep];
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === project.demoSteps.length - 1;

  return (
    <div className="min-h-screen bg-primary">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            type="button"
            onClick={() => {
              requestScrollToSection("projetos");
              router.push("/");
            }}
            className="demo-back-link inline-flex items-center text-sm text-secondary hover:text-primary transition-colors mb-8"
          >
            ← Voltar aos projetos
          </button>

          <div className="mb-10">
            <p className="period-text text-xs mb-2 uppercase tracking-wide font-semibold">
              Walkthrough do fluxo
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {project.title}
            </h1>
            <p className="text-secondary max-w-3xl">
              Demonstração visual do sistema na ordem em que o processo acontece:
              setup do restaurante, pedido do cliente, operação da cozinha e
              fechamento da conta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 items-start">
            <nav className="demo-steps-nav scroll-fade-in visible">
              <p className="text-xs uppercase tracking-wide text-secondary mb-3 font-semibold">
                Etapas
              </p>
              <ol className="space-y-2">
                {project.demoSteps.map((step, index) => (
                  <li key={step.step}>
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`demo-step-button w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        activeStep === index ? "demo-step-button-active" : ""
                      }`}
                    >
                      <span className="block text-xs text-accent-primary mb-0.5">
                        {step.step}. {step.phase}
                      </span>
                      <span className="block text-white font-medium">
                        {step.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="demo-stage project-card rounded-xl overflow-hidden">
              <div className="demo-stage-header p-6 border-b border-white/10">
                <p className="period-text text-xs mb-2 uppercase tracking-wide font-semibold">
                  Etapa {currentStep.step} — {currentStep.phase}
                </p>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {currentStep.title}
                </h2>
                <p className="text-secondary text-sm leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              <div className="demo-stage-image relative aspect-video bg-black/40">
                <Image
                  key={currentStep.image}
                  src={currentStep.image}
                  alt={currentStep.alt}
                  fill
                  className="object-contain object-top p-2"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  priority
                />
              </div>

              <div className="demo-stage-footer p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-secondary">
                  {activeStep + 1} de {project.demoSteps.length}
                </p>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    disabled={isFirstStep}
                    className="project-link-button flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    disabled={isLastStep}
                    className="download-cv-button flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Próxima
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
