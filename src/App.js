import React, { useState, useEffect } from 'react';
import { Search, Star, AlertTriangle } from 'lucide-react';

// コンポーネントのインポート
import Header from './components/Header';
import Footer from './components/Footer';
import ZodiacCard from './components/ZodiacCard';
import AdditiveCard from './components/AdditiveCard';

// データのインポート
import zodiacSigns from './data/zodiacData';
import additiveCategories from './data/additiveData';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Set page title
    useEffect(() => {
        document.title = "伝説の占い師が明かす！食品添加物の真実";
    }, []);

    // Filter additives based on search term
    const filteredAdditives = additiveCategories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.examples.some(example => example.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-indigo-900 text-white font-sans">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-purple-900 to-indigo-800 py-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Star size={40} className="text-yellow-300" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">古来より伝わる秘術と現代科学の英知の融合</h2>
                        <p className="text-sm md:text-base text-indigo-200 mb-6">
                            日々口にする食品添加物には、魂の調和を乱す暗黒のエネルギーが潜んでいます。
                            あなたの食卓から負のエネルギーを取り除き、星座に適した食材で運気を高めましょう。
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Zodiac Signs Section */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Star className="text-yellow-300 mr-2" size={24} />
                        <h2 className="text-xl md:text-2xl font-semibold">12星座別 パワーフードと避けるべき添加物</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {zodiacSigns.map(sign => (
                            <ZodiacCard key={sign.id} sign={sign} />
                        ))}
                    </div>
                </section>

                {/* Additives Section */}
                <section>
                    <div className="flex items-center mb-6">
                        <AlertTriangle className="text-red-400 mr-2" size={24} />
                        <h2 className="text-xl md:text-2xl font-semibold">食品添加物の霊的リスク</h2>
                    </div>

                    {/* Search Box */}
                    <div className="mb-6 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-indigo-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 rounded-lg bg-indigo-700 border border-indigo-600 placeholder-indigo-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="添加物を検索..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Additives List */}
                    <div className="grid grid-cols-1 gap-4">
                        {filteredAdditives.map(category => (
                            <AdditiveCard key={category.id} category={category} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default App;