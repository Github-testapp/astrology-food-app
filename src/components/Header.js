import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-indigo-900 to-purple-900 p-4 shadow-lg">
            <div className="container mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">伝説の占い師が明かす！食品添加物の真実</h1>
                <p className="text-sm md:text-base text-center text-indigo-200">あなたの食卓に忍び寄る見えない運命を変える秘法</p>
            </div>
        </header>
    );
};

export default Header;