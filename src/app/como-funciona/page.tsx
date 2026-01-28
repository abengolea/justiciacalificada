'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    step: 'Primer paso',
    title: 'REGISTRARSE',
    subtitle: 'ES ANÓNIMO, SENCILLO Y PUEDE HACERLO EN UNOS MINUTOS',
    description:
      'Si Ud. es un abogado matriculado con más de 5 años de matriculación, complete el formulario con datos que nos permitan comprobar su identidad.\n\nEsta información no será divulgada y solo será utilizada para acreditar la validez de los datos aportados.',
    buttonText: 'REGISTRARSE',
    buttonLink: '/register',
    imageSrc: 'https://picsum.photos/seed/register/800/600',
    imageAlt: 'Formulario de registro',
    aiHint: 'form registration',
  },
  {
    step: 'Segundo paso',
    title: 'ACCEDER',
    subtitle:
      'ACCEDA A UNA EXTENSA LISTA DE TODAS LAS DEPENDENCIAS JUDICIALES DEL PAIS.',
    description:
      'Podrá comparar y analizar el ranking, producto de las calificaciones hechas por los abogados que forman esta comunidad.',
    buttonText: 'JUZGADOS',
    buttonLink: '/juzgados',
    imageSrc: 'https://picsum.photos/seed/courthouses/800/600',
    imageAlt: 'Lista de juzgados',
    aiHint: 'court list',
  },
  {
    step: 'Tercer paso',
    title: 'CONTRIBUIR',
    subtitle:
      'APORTE SUS VALORACIONES DE ACUERDO A LAS EXPERIENCIAS EMANADAS DE SU LABOR PROFESIONAL',
    description: 'Su identidad será resguardada en cada opinión dada en el sistema.',
    buttonText: 'BASES & CONDICIONES',
    buttonLink: '/terminos-y-condiciones',
    imageSrc: 'https://picsum.photos/seed/contribute/800/600',
    imageAlt: 'Persona calificando su experiencia',
    aiHint: 'review rating',
  },
];

export default function ComoFuncionaPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          ¿CÓMO FUNCIONA?
        </h1>
      </div>

      <div className="space-y-16">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
              index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            <div
              className={`space-y-4 ${
                index % 2 === 1 ? 'md:col-start-2' : ''
              }`}
            >
              <Badge variant="secondary">{step.step}</Badge>
              <h2 className="text-3xl font-headline text-primary">
                {step.title}
              </h2>
              <p className="font-semibold text-muted-foreground">
                {step.subtitle}
              </p>
              <p className="text-foreground/80 whitespace-pre-line">
                {step.description}
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href={step.buttonLink}>{step.buttonText}</Link>
              </Button>
            </div>
            <div
              className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg ${
                index % 2 === 1 ? 'md:col-start-1' : ''
              }`}
            >
              <Image
                src={step.imageSrc}
                alt={step.imageAlt}
                data-ai-hint={step.aiHint}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
