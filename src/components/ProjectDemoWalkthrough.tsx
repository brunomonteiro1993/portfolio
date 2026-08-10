"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getStepImages, type Project } from "@/data/projects";
import { requestScrollToSection } from "@/lib/scroll";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/page.css";
import "./project-demo.css";

type ProjectDemoWalkthroughProps = {
  project: Project;
};

export function ProjectDemoWalkthrough({
  project,
}: ProjectDemoWalkthroughProps) {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const currentStep = project.demoSteps[activeStep];
  const stepImages = getStepImages(currentStep);
  const currentImage = stepImages[activeImage] ?? stepImages[0];
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === project.demoSteps.length - 1;

  useEffect(() => {
    setActiveImage(0);
  }, [activeStep]);

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
            <p className="text-secondary max-w-3xl">{project.demoIntro}</p>
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
                {currentImage ? (
                  <Image
                    key={currentImage.src}
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    className="object-contain object-top p-2"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    quality={95}
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
                    <p className="text-white font-medium">Print em breve</p>
                    <p className="text-secondary text-sm max-w-md">
                      Esta etapa já está documentada. As imagens do fluxo serão
                      adicionadas em seguida.
                    </p>
                  </div>
                )}
              </div>

              {stepImages.length > 1 ? (
                <div className="px-6 pt-4 grid grid-cols-3 gap-2">
                  {stepImages.map((image, imageIndex) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(imageIndex)}
                      className={`project-gallery-thumb relative aspect-video rounded-md overflow-hidden transition-all duration-200 ${
                        activeImage === imageIndex
                          ? "ring-2 ring-accent-primary"
                          : "opacity-70 hover:opacity-100"
                      }`}
                      aria-label={image.alt}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        quality={90}
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 33vw, 220px"
                      />
                    </button>
                  ))}
                </div>
              ) : null}

              <div className="demo-stage-footer p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-secondary">
                  {activeStep + 1} de {project.demoSteps.length}
                  {stepImages.length > 1
                    ? ` · tela ${activeImage + 1}/${stepImages.length}`
                    : ""}
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
