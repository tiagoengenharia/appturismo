import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <><div>
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className="max-w-lg"
      >
        <AccordionItem value="shipping">
          <AccordionTrigger>TEste</AccordionTrigger>
          <AccordionContent>
            bla bla bla bla bla
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            Returns accepted within 30 days. Items must be unused and in original
            packaging. Refunds processed within 5-7 business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
          <AccordionContent>
            Reach us via email, live chat, or phone. We respond within 24 hours
            during business days.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    <div>
        <Button>Brincar</Button>
        <Button>Brincar</Button>
        <Button>Brincar</Button>
      </div></>
  );
}
