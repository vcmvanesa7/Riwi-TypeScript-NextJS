// Parte 6: Interfaces para props de componentes
// ===============================

interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

function renderButton(props: ButtonProps): string {
    // Usamos ternario para decidir si está habilitado o no
    return props.disabled ? `[X] ${props.label}` : `[ ] ${props.label}`;
}

console.log(renderButton({ label: "Guardar", disabled: true }));
console.log(renderButton({ label: "Enviar" }));
