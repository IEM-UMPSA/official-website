import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const CourseAccordion = () => {

    return(
        <div className="course__curriculum">
            <Accordion className="accodion-style--1" preExpanded={'0'}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h2 className="accordion-header" id="week-01">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#week-01-content" aria-expanded="true" aria-controls="week-01-content">
                                    Phase One (Online)
                                </button>
                            </h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                    <div className="course__curriculum-info">
                  The first phase of the competition requires the participants to submit the initial
innovation proposal, poster, virtual prototype and marketing video (optional) of the
final concept design. All accepted submissions will be judged by professional juries
from industry and academia. The participants are required to submit the required
documents through the Google Form by 12th May 2023, 11.59 pm MYT.
                        </div>
                    </div>
                   
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        <h2 className="accordion-header" id="week-02">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#week-02-content" aria-expanded="true" aria-controls="week-02-content">
                                Phase Two (Physical)
                            </button>
                        </h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                       The second phase is a physical phase. It involves the Physical Pitching to the judges
with the limited time and exhibition booth (with real innovative product/prototype).
The time allocation will be 7 minutes pitching session and 5 minutes Q&A session.
The exhibition booth will be set up by the participants at the exhibition hall before the
pitching session starts.
                    </div>
                 
                   
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default CourseAccordion;





