"use client";

import React from 'react';
import ChairmanMessage from '@/app/components/leadership/chairman_message';

const ChairmanClient = () => {
    return (
        <ChairmanMessage
            imageSrc="https://cdn.kalingauniversity.ac.in/about/Leadership/Rajeev+Kumar.png"
            imageAlt="Dr. Rajeev Kumar"
            name="Dr. Rajeev Kumar"
            title="Chairman"
            quote="Education must not only inform minds but ignite purpose and shape responsible leaders of tomorrow."
            message={[
                "It gives me immense pleasure to welcome you to the Kalinga University...",
                "Due to globalisation, the competition has tremendously increased...",
                "We have a multi-cultural campus environment...",
                "At KU, students don’t just earn degrees...",
                "I welcome you all to Kalinga University and wish all the best in your career and life."
            ]}
        />
    );
};

export default ChairmanClient;
