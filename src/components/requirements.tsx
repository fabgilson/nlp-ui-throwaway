import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardBody } from "@nextui-org/card";
import {Tabs, Tab} from "@nextui-org/tabs";

import { getTabs } from "@/resources/requirements";
function getRequirements() {
    let tabs = getTabs()

    return (
        <Tabs aria-label="Dynamic tabs" items={tabs} className="w-full inline">
            {(item) => (
                <Tab key={item.id} title={item.label}>
                    <Card className="max-h-full">
                        <CardBody>
                            <Accordion selectionMode="multiple">
                                {item.items.map((criterion, index) => (
                                    <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={criterion.title}>
                                        {criterion.definition}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardBody>
                    </Card>
                </Tab>
            )}
        </Tabs>
    )
}

export default function Requirements() {
    return (
        getRequirements()
    );
  }