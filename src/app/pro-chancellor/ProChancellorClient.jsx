"use client";

import React from "react";
import ChairmanMessage from "../components/leadership/chairman_message";

const ProChancellorClient = () => {
    return (
        <ChairmanMessage
            imageSrc="https://cdn.kalingauniversity.ac.in/about/Leadership/Sajjan+Singh.png"
            imageAlt="Mr. Sajjan Singh"
            name="Mr. Sajjan Singh"
            title="Pro-Chancellor"
            messageHeading="Pro-Chancellor's Message"
            quote="Education thrives when opportunity meets vision, and talent meets the right guidance."
            message={[
                "As you begin a new journey of academic exploration...",
                "It is a matter of immense pleasure for me...",
                "I am glad that our meritorious students are placed...",
                "The University provides updated knowledge...",
                "May your journey be filled with growth and achievement."
            ]}
        />
    );
};

export default ProChancellorClient;
