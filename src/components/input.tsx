import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Textarea, Input } from "@nextui-org/input";
import { TextFieldComponentProps } from "@/types/FormData";

const InputFields: React.FC<TextFieldComponentProps> = ({ formData, setFormData }) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // If it's a number input, ensure the value is correctly parsed

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const cards = [
        {
            title: "User Story",
            name: "us",
            value: formData.us
        },
        {
            title: "Acceptance Criteria 1",
            name: "ac1",
            value: formData.ac1
        },
        {
            title: "Acceptance Criteria 2",
            name: "ac2",
            value: formData.ac2
        },
        {
            title: "Acceptance Criteria 3",
            name: "ac3",
            value: formData.ac3
        },
    ]

    return (
        <>
            {/* First Card for User Story Number */}
            <Card className="mb-3">
                <CardHeader className="flex justify-between p-2">
                    <div>
                        <p className="text-md">{"User Story Number"}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Input
                        placeholder="0"
                        labelPlacement="outside"
                        name="us_number"
                        value={
                            formData.us_number
                        }
                        onChange={handleInputChange}
                    />
                </CardBody>
            </Card>
            {cards.map((card, index) => (
                <Card key={index} className="mb-3">
                    <CardHeader className="flex justify-between p-2">
                        <div>
                            <p className="text-md">{card.title}</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Textarea value={card.value} name={card.name} onChange={handleInputChange}>
                        </Textarea>
                    </CardBody>
                </Card>
            ))}
        </>
    );
  };

export default InputFields;

// export default function InputFields() {
//     const cardTitles = ['User Story', 'Acceptance Criteria 1', 'Acceptance Criteria 2', 'Acceptance Criteria 3'];

//     return (
//         <>
//             {cardTitles.map((title, index) => (
//                 <Card key={index} className="mb-3">
//                     <CardHeader className="flex justify-between p-2">
//                         <div>
//                             <p className="text-md">{title}</p>
//                         </div>
//                     </CardHeader>
//                     <Divider />
//                     <CardBody>
//                         <Textarea>
//                         </Textarea>
//                     </CardBody>
//                 </Card>
//             ))}
//         </>
//     );
// }