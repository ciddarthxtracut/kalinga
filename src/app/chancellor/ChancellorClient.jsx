"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

const ChancellorClient = () => {
    return (
        <ChairmanMessage
            imageSrc="https://cdn.kalingauniversity.ac.in/about/Leadership/Sandeep+Arora.png"
            imageAlt="Dr. Sandeep Arora"
            name="Dr. Sandeep Arora"
            title="Chancellor"
            messageHeading="Chancellor's Message"
            quote="True progress begins when learning inspires responsibility, resilience, and the courage to create change."
            message={[
                "I feel honoured and privileged to lead Kalinga University...",
                "At Kalinga, we surpass conventional learning...",
                "We constantly strive to introduce changes...",
                "I would like to conclude by saying Rabindranath Tagore’s timeless words...",
                "Wishing you all great success!"
            ]}
        />
    );
};

export default ChancellorClient;
