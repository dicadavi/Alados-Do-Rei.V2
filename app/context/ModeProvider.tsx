'use client'
import React, { createContext, useState, ReactNode } from 'react';
import { PaletteMode } from '@mui/material';

interface ModeContextType {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

const initialModeContext: ModeContextType = {
    mode: 'dark',
    toggleColorMode: () => { }
};

const ModeContext = createContext<ModeContextType>(initialModeContext);

interface ModeProviderProps {
    children: ReactNode;
}

const ModeProvider = ({ children }: ModeProviderProps) => {
    const [mode, setMode] = useState<PaletteMode>('dark');

    const toggleColorMode = () => {
        setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    const modeContextValue: ModeContextType = {
        mode,
        toggleColorMode
    };

    return (
        <ModeContext.Provider value={modeContextValue}>
            {children}
        </ModeContext.Provider>
    );
};

export { ModeProvider, ModeContext };
