export interface FormData {
    us_number: string;
    us: string;
    ac1: string;
    ac2: string;
    ac3: string;
}

export interface TextFieldComponentProps {
    formData: {
        us_number: string;
        us: string;
        ac1: string;
        ac2: string;
        ac3: string;
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        us_number: string;
        us: string;
        ac1: string;
        ac2: string;
        ac3: string;
    }>>;
}