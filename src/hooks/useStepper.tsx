'use client'
import { useState } from 'react';

const useStepper = (initialStep: number, steps: Array<string> | Array<{ title: string; content: unknown }>) => {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  };

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  // const currentStepContent = React.cloneElement(steps[currentStep].content, {
  //   ...steps[currentStep],
  // });

  return {
    currentStep,
    nextStep,
    previousStep,
    goToStep,
    isFirstStep,
    isLastStep,
    // currentStepContent,
  };
};

export default useStepper;
