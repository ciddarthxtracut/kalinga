"use client"

import React from 'react'
import Valueadditionsmainintro from '../components/value-additions/valueadditionsmainintro'
import Valueadditionvideointerview from '../components/value-additions/valueadditionvideointerview';
import Valueadditioncards from '../components/value-additions/valueadditionscards';
import Valueadditionsofkalinga from '../components/value-additions/valueadditionsofkalinga';
import Valueadditionskilldev from '../components/value-additions/valueadditionskilldev';
import Valueadditionwhatmakes from '../components/value-additions/valueadditionwhatmakes';
import AdmissionCareer from '../components/general/admission_cta';
import { useEffect } from 'react';


function ValueAddition() {
    
    return (
        <>
            <Valueadditionsmainintro />
            <Valueadditionvideointerview />
            <Valueadditioncards />
            <Valueadditionsofkalinga />
            <Valueadditionskilldev />
            <Valueadditionwhatmakes />
            <AdmissionCareer />
        </>
    )
}

export default ValueAddition