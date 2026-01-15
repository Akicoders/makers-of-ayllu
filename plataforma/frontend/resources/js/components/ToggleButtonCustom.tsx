import React from 'react';
import { classNames } from 'primereact/utils';

interface ToggleButtonCustomProps {
    value: boolean;
    onChange: (value: boolean) => void;
}

const ToggleButtonCustom: React.FC<ToggleButtonCustomProps> = ({ value, onChange }) => {
    const label = value ? "Activo" : "Inactivo";
    const icon = value ? "pi pi-check-circle" : "pi pi-times-circle";

    const toggleClass = classNames(
        'flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all duration-300 transform shadow-md',
        {
            'bg-green-500 hover:bg-green-600 text-white hover:scale-105': value,
            'bg-red-500 hover:bg-red-600 text-white hover:scale-105': !value
        }
    );

    return (
        <button type="button" onClick={() => onChange(!value)} className={toggleClass}>
            <i className={icon}></i>
            <span>{label}</span>
        </button>
    );
};

export default ToggleButtonCustom;
