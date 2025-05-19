import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ZodiacCard = ({ sign }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-indigo-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
            <div
                className="p-4 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div>
                    <h3 className="font-bold text-lg">{sign.name}</h3>
                    <p className="text-indigo-300 text-sm">{sign.period}</p>
                </div>
                <ChevronDown
                    size={24}
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div className="p-4 pt-0 bg-indigo-700 bg-opacity-50">
                    <div className="mb-3">
                        <h4 className="font-semibold text-red-300">避けるべき添加物:</h4>
                        <p className="text-sm mb-1">{sign.avoidAdditive}</p>
                        <p className="text-xs text-indigo-300">{sign.reason}</p>
                    </div>

                    <div className="mb-3">
                        <h4 className="font-semibold text-green-300">パワーフード:</h4>
                        <p className="text-sm">{sign.powerFoods.join('、 ')}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-yellow-300">運気を高める食べ方:</h4>
                        <p className="text-xs">{sign.tip}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ZodiacCard;