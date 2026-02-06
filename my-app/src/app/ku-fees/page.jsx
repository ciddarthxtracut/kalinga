"use client"

import React, { Suspense, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import KUFeesTabSection from '../components/ku-fees/kufeestabs'

import AdmissionCareer from '../components/general/admission_cta';

function KuFees() {
  const pathname = usePathname();

  

  return (
    <div>
      <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 40% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
      <Suspense fallback={<div className="w-full py-4 px-2">Loading...</div>}>
        <KUFeesTabSection />
      </Suspense>
      <AdmissionCareer />
    </div>
  )
}

export default KuFees