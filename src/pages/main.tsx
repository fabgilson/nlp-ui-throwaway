import Requirements from "@/components/requirements";
import Feedback from "@/components/feedback/feedbackWrapper";
import InputFields from "@/components/input";
import { useState } from "react";
import { nlpFormatData } from "@/service/formatDataNLP";
import { FormData } from "@/types/FormData";
import { mlFormatData } from "@/service/formatDataML";
import { useGlobalState } from "@/GlobalState";

const MainPage = () => {
    const { globalState } = useGlobalState();

    const [formData, setFormData] = useState<FormData>({
        us_number: '0',
        us: '',
        ac1: '',
        ac2: '',
        ac3: '',
    });
    let [result, setResult] = useState<any>(null);

    const handleButtonClick = async () => {
        console.log(globalState)
        if (globalState === "nlp") {
            let results = await nlpFormatData(formData);
            setResult(results);
        } else if (globalState === "ml") {
            let results = await mlFormatData(formData);
            setResult(results);
        }
    };
    
    return (
        <div>
            <div className="items-stretch flex flex-col lg:flex-row">
                <div className="p-4 lg:w-1/3 lg:ps-8">
                    <Requirements />
                </div>
                <hr className="lg:invisible lg:mx-0 mx-4" />
                <div className="p-4 lg:w-1/3">
                    <InputFields formData={formData} setFormData={setFormData} />
                </div>
                <hr className="lg:invisible lg:mx-0 mx-4" />
                <div className="p-4 lg:w-1/3 lg:pe-8">
                    <Feedback onButtonClick={handleButtonClick} result={result} />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
