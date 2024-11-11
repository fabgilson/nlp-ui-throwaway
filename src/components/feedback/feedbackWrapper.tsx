import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import NLPFeedback from "./feedbackNLP";
import MLFeedback from "./feedbackML";
import { useEffect, useState } from "react";
import { useGlobalState } from "@/GlobalState";

interface ButtonComponentProps {
    onButtonClick: () => void;
    result: any;
}

function getFeedbackContent(result: any, globalState: String) {
    if (globalState === "nlp") {
        return (
            <NLPFeedback result={result}/>
        )
    } else if (globalState === "ml") {
        return (
            <MLFeedback result={result}/>
        )
    }
    return null;
}


const Feedback: React.FC<ButtonComponentProps> = ({ onButtonClick, result }) => {
    const [feedbackContent, setFeedbackContent] = useState<JSX.Element | null>(null);
    const { globalState } = useGlobalState();

    useEffect(() => {
        setFeedbackContent(getFeedbackContent(result, globalState));
    }, [result]);

    const handleButtonClick = () => {
        onButtonClick();
        setFeedbackContent(getFeedbackContent(result, globalState));
    };


    return (
        <Card>
            <CardHeader className="flex justify-between p-2">
                <div>
                    <p className="text-md">Feedback</p>
                </div>
                <div>
                    <Button color="primary" className="p-0 m-0" onClick={handleButtonClick}>
                        Check All
                    </Button>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                {feedbackContent}
            </CardBody>
        </Card>
    );
};

export default Feedback;
