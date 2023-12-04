"use client"
import { 
    Accordion, 
    AccordionItem, 
    AccordionTrigger, 
    AccordionContent 
} from '@/components/ui/accordion'
import { ArrowLeft, ArrowLeftRight } from 'lucide-react'
import { useRouter } from "next/navigation"

import { faqs } from "@/constants"

const Faqs = () => {
    const router = useRouter()

  return (
    <>
     <ArrowLeft 
      color="#fff" 
      className="mt-[40px] text-[26px] cursor-pointer" 
      onClick={() => router.back() }
      />

    <Accordion type="single" collapsible className='md:w-[70%] w-[90%] mx-auto h-[400px] max-h-[400px] mt-[90px]'>
        { faqs.map(faq => (
        <AccordionItem value={faq.itemNo} key={faq.id}>
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold text-[#fff] text-left"> { faq.question } </AccordionTrigger>
                <AccordionContent className="text-[14px] md:text-[16px] font-normal text-[#9d9292]">
                    { faq.answer }
                </AccordionContent>
         </AccordionItem>
        )) }
    </Accordion>
    
      <h2 className="flex h-[80px] justify-center mt-[40px] items-center gap-[10px] md:text-[24px] text-[20px] text-[#fff] font-extrabold underline">
            <ArrowLeftRight size={30} /> 
            EasyBridge 
      </h2>
    </>
  )
}

export default Faqs