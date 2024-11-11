import { useGlobalState } from "@/GlobalState";

let nlp_tabs = [
    {
        id: "US",
        label: "User Story Requirements",
        items: [
            {
                title: "Well-formed",
                definition: "A user story should describe the role of the entity that wants the feature, the feature that they want, and why they want that feature."
            },
            {
                title: "Uniform",
                definition: "A user story should follow the expected template for the sake of clarity. The format is \"As <a role>, I want <a feature>, so that <reason>\"."
            },
            {
                title: "Full sentences",
                definition: "A user story should be a full sentence for the sake of clarity."
            },
            {
                title: "Atomic",
                definition: "Each user story should focus on a singular feature. Multiple features should be split into multiple stories."
            },
            {
                title: "Length",
                definition: "A user story should be no more than 70 words. Try to keep it concise."
            },
            {
                title: "Minimal",
                definition: "A user story should not contain more information than is necessary to convey the feature that is being requested to the reader."
            },
            {
                title: "Unambiguous",
                definition: "A user story should be written in a way that does not introduce ambiguity so that you and the reader are in agreement about what feature is being requested."
            }
        ]
    },
    {
        id: "AC",
        label: "AC Requirements",
        items: [
            {
                title: "Integrous",
                definition: "Each AC should contain preconditions, an event, and post conditions."
            },
            {
                title: "Singular",
                definition: "Each AC should focus on just one flow; if it focuses on more than one feature then it should be split."
            },
            {
                title: "Essential",
                definition: "Each AC should not contain more information than is necessary to convey it's meaning to the reader."
            },
            {
                title: "Clarity",
                definition: "Each AC should be written in a way that does not introduce ambiguity so that you and the reader are in agreement about what flow is being ."
            }
        ]
    },
];

let ml_tabs = [
    {
        id: "US",
        label: "User Story Requirements",
        items: [
            {
                title: "Well-formed",
                definition: "A user story should describe the role of the entity that wants the feature, the feature that they want, and why they want that feature.\n This should follow the expected template for the sake of clarity. The format is \"As <a role >, I want < a feature >, so that <reason>\".",
            },
            {
                title: "Atomic",
                definition: "Each user story should focus on a singular feature. Multiple features should be split into multiple stories."
            },
            {
                title: "Minimal",
                definition: "A user story should not contain more information than is necessary to convey the feature that is being requested to the reader."
            },
            {
                title: "Conceptually Sound",
                definition: "The feature described is concrete and the rationale is related to the feature"
            },
            {
                title: "Problem-oriented",
                definition: "Only specifies the problem, not the solution to it."
            },
            {
                title: "Unambiguous",
                definition: "A user story should be written in a way that does not introduce ambiguity so that you and the reader are in agreement about what feature is being requested."
            },
            {
                title: "Estimable",
                definition: "A user story should detail a fine-grained requirement that is can be planned and prioritised."
            }
        ]
    },
    {
        id: "AC",
        label: "AC Requirements",
        items: [
            {
                title: "Complete",
                definition: "Each AC should be written in a way that does not introduce ambiguity so that you and the reader are in agreement about what flow is being ."
            },
            {
                title: "Essential",
                definition: "Each AC should not contain more information than is necessary to convey it's meaning to the reader."
            },
            {
                title: "Singular",
                definition: "Each AC should focus on just one flow; if it focuses on more than one feature then it should be split."
            },
            {
                title: "Integrous",
                definition: "Each AC should contain preconditions, an event, and post conditions.\n This should follow the expected template for the sake of clarity. The format is \"Given <a precondition>, When < an event >, Then <post conditions>\". \n (This may contain \"And\" statements denoting another precondition, event or post condition),"
            },
        ]
    },
];

export function getTabs() {
    const { globalState } = useGlobalState();
    
    if (globalState === "nlp") {
        return nlp_tabs;
    } else if (globalState === "ml") {
        return ml_tabs
    }
}