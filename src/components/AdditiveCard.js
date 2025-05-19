import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AdditiveCard = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`rounded-lg shadow-lg overflow-hidden border-l-4 ${category.colorClass}`}>
            <div
                className="p-4 bg-indigo-800 flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div>
                    <div className="flex items-center">
                        <span className={`inline-block w-3 h-3 rounded-full ${category.colorClass} mr-2`}></span>
                        <h3 className="font-bold">{category.name}</h3>
                    </div>
                    <p className="text-sm text-indigo-300">{category.riskLevel}</p>
                </div>
                <ChevronDown
                    size={24}
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div className="p-4 bg-indigo-700 bg-opacity-50">
                    <p className="mb-4 text-sm">{category.description}</p>

                    <div className="mb-3">
                        <h4 className="text-sm font-semibold text-red-300 mb-1">代表的な例:</h4>
                        <ul className="list-disc list-inside text-xs space-y-1 pl-2">
                            {category.examples.map((example, index) => (
                                <li key={index}>{example}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-green-300 mb-1">おすすめの代替品:</h4>
                        <ul className="list-disc list-inside text-xs space-y-1 pl-2">
                            {category.alternatives.map((alternative, index) => (
                                <li key={index}>{alternative}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdditiveCard;