import React, { useState } from 'react';
import { Generator } from './components/Generator';
import { Scanner } from './components/Scanner';
import { ManualDecoder } from './components/ManualDecoder';
import { Reference } from './components/Reference';

type Tab = 'generate' | 'scan' | 'decode' | 'reference';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('generate');

  const renderContent = () => {
    switch (activeTab) {
      case 'generate': return <Generator />;
      case 'scan': return <Scanner />;
      case 'decode': return <ManualDecoder />;
      case 'reference': return <Reference />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl shadow-xl p-8 mb-8 text-white relative overflow-hidden">
            <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
                    ⚡ Explosion-Proof Marking Tool
                </h1>
                <p className="text-blue-100 text-lg">
                    Generate, Scan, and Decode ATEX / IECEx / NEC Markings
                </p>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-8 p-2 flex overflow-x-auto gap-2">
            <TabButton 
                active={activeTab === 'generate'} 
                onClick={() => setActiveTab('generate')} 
                label="🔧 Generate" 
            />
            <TabButton 
                active={activeTab === 'scan'} 
                onClick={() => setActiveTab('scan')} 
                label="📷 Scan Image" 
            />
            <TabButton 
                active={activeTab === 'decode'} 
                onClick={() => setActiveTab('decode')} 
                label="🔍 Decode Manual" 
            />
            <TabButton 
                active={activeTab === 'reference'} 
                onClick={() => setActiveTab('reference')} 
                label="📚 Reference" 
            />
        </div>

        {/* Content */}
        <div className="transition-opacity duration-300">
            {renderContent()}
        </div>

        <footer className="mt-12 text-center text-slate-400 text-sm">
            <p>© 2025 Explosion-Proof Safety Tools. Designed for industrial safety professionals.</p>
        </footer>

      </div>
    </div>
  );
};

const TabButton: React.FC<{active: boolean, onClick: () => void, label: string}> = ({ active, onClick, label }) => (
    <button
        onClick={onClick}
        className={`flex-1 py-3 px-6 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 ${
            active 
            ? 'bg-blue-600 text-white shadow-md transform scale-[1.02]' 
            : 'text-slate-600 hover:bg-slate-50'
        }`}
    >
        {label}
    </button>
);

export default App;
