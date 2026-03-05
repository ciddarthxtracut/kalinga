"use client";

import React from 'react';
import FAQ from './faq';

const StandardFormatFAQ = () => {
    const standardFormatFAQItems = [
        {
            id: 1,
            question: "1. Title & 2. Author(s) Information",
            answer: `
                <div class="space-y-4">
                    <div>
                        <h4 class="font-bold text-[var(--button-red)] mb-1">1. Title</h4>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Concise and descriptive</li>
                            <li>Reflects the main focus of the paper</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-[var(--button-red)] mb-1">2. Author(s) Information</h4>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Names of authors</li>
                            <li>Affiliations (institutions, departments)</li>
                            <li>Contact information (usually corresponding author’s email)</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: 2,
            question: "3. Abstract & 4. Keywords",
            answer: `
                <div class="space-y-4">
                    <div>
                        <h4 class="font-bold text-[var(--button-red)] mb-1">3. Abstract</h4>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Brief summary of the paper (150–250 words)</li>
                            <li>States purpose, methodology, key findings, and conclusions</li>
                            <li>No citations here</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-[var(--button-red)] mb-1">4. Keywords</h4>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>4–6 keywords representing the main topics</li>
                            <li>Helps in indexing and searching</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: 3,
            question: "5. Introduction",
            answer: `
                <ul class="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>Background and context of the study</li>
                    <li>Review of relevant literature</li>
                    <li>Problem statement or research question</li>
                    <li>Objectives and significance of the study</li>
                    <li>Hypothesis or focus (if applicable)</li>
                </ul>
            `
        },
        {
            id: 4,
            question: "6. Methods (or Methodology)",
            answer: `
                <ul class="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>Detailed description of research design</li>
                    <li>Materials, tools, or equipment used</li>
                    <li>Procedures and protocols</li>
                    <li>Data collection techniques</li>
                    <li>Analysis methods (statistical or qualitative)</li>
                    <li>For review papers, explain literature search and selection criteria</li>
                </ul>
            `
        },
        {
            id: 5,
            question: "7. Results & 8. Discussion",
            answer: `
                <div class="space-y-4">
                    <div>
                        <h4 class="font-bold text-[var(--button-red)] mb-1">7. Results</h4>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Presentation of findings without interpretation</li>
                            <li>Use tables, graphs, and figures for clarity</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-[var(--button-red)] mb-1">8. Discussion</h4>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Interpretation and explanation of results</li>
                            <li>Compare with previous studies or literature</li>
                            <li>Discuss implications, limitations, and significance</li>
                            <li>Suggestions for future research</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            id: 6,
            question: "9. Conclusion",
            answer: `
                <ul class="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>Summarize main findings and their importance</li>
                    <li>Final thoughts or recommendations</li>
                    <li>Sometimes combined with Discussion</li>
                </ul>
            `
        },
        {
            id: 7,
            question: "10. Acknowledgments & 11. References & 12. Appendices",
            answer: `
                <div class="space-y-4">
                    <div>
                        <h4 class="font-bold text-[var(--button-red)] mb-1">10. Acknowledgments (optional)</h4>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Credit to funding bodies, institutions, or individuals who contributed but aren’t authors</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-[var(--button-red)] mb-1">11. References</h4>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>List all cited works in a specific citation style (APA, MLA, IEEE, etc.)</li>
                            <li>Follow journal guidelines precisely</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-[var(--button-red)] mb-1">12. Appendices (optional)</h4>
                        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Supplementary material like raw data, extended tables, or questionnaires</li>
                        </ul>
                    </div>
                </div>
            `
        }
    ];

    return (
        <FAQ
            title="Standard Format for a Journal Research / Review Paper"
            subtitle="Paper Structure"
            items={standardFormatFAQItems}
            backgroundColor=""
        />
    );
};

export default StandardFormatFAQ;
