'use client';

// imported modules
import dynamic from 'next/dynamic';

// function to disable SSR
const DynamicComponent = dynamic(() => import('./quiz.jsx'), {
  ssr: false,
})

export default function QuizPage() {

    return (
  
      <DynamicComponent/>
  
    );
  
  }