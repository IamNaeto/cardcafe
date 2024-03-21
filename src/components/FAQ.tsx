import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    interface FAQs {
        id: number;
        question: string;
        answer: string;
    }

    const FAQsData: FAQs[] = [
        {
            id: 1,
            question: "What is a credit card generator?",
            answer: "A  credit card generator creates valid credit card numbers that can be used for software data testing and other verification purposes. They cannot be used to purchase anything."
        },
        {
            id: 2,
            question: "How does a credit card generator work?",
            answer: "Credit cards follow a specific format known as the Luhn algorithm (MOD 10). Each credit card issuer like VISA have their own prefixes. A credit card generator uses the Luhn checksum to create a valid card number."
        },
        {
            id: 3,
            question: "Can I buy items with these credit card numbers?",
            answer: "No, generated credit card numbers can only be used for software testing and education purposes. They will NOT work if you try to purchase anything."
        },
        {
            id: 4,
            question: "Do you offer any credit card numbers that have money on them?",
            answer: "No, we do not offer any credit cards that have money on them. There are a number of online banks such as Revolut & Starling Bank which offer virtual credit & debit cards. Our card numbers are for programming and verification purposes only."
        },
        {
            id: 5,
            question: "What does CVV mean?",
            answer: `The CVV Number ("Card Verification Value") is a 3 digit number on VISA, MasterCard and Discover credit/debit cards. On American Express cards it is a 4 digit numeric code. It is used in credit and debit cards for the purpose of verifying the owner's identity & reducing the risk of fraud. The CVV is also known as the card verification code (CVC) or card security code (CSC).`
        },
    ]

    const toggleQuestion = (index: number) => {
        if (expandedIndex === index) {
            // Clicking on the currently expanded question should close it.
            setExpandedIndex(-1);
        } else {
            // Clicking on a different question should expand it.
            setExpandedIndex(index);
        }
    };

    return (
        <main className="relative px-[5%] py-16 grid grid-cols-1 gap-4 items-center justify-center place-items-center bg-white text-[16px] text-dark">
            <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >Frequently Asked Questions</motion.h1>
            <motion.p
                className="leading-relaxed tracking-wide font-light text-center max-w-full lg:max-w-[60%] xl:max-w-[50%]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >If you are not sure weather draft is suitable for you or not, do not worry. We are here to explain everything you might want to know</motion.p>

            <section className="grid gap-4 w-full md:w-[80%]">
                {FAQsData.map((faqs, index) => (
                    <motion.div
                        key={index}
                        className="grid gap-4 p-4 rounded-xl border shadow-xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-[15px] md:text-[18px]">{faqs.question}</h3>

                            {expandedIndex === index ?
                                <Image src={"/img/minus.png"} width={20} height={20} alt="icon" loading="lazy" className="cursor-pointer" onClick={() => toggleQuestion(index)} />
                                :
                                <Image src={"/img/plus.png"} width={20} height={20} alt="icon" loading="lazy" className="cursor-pointer" onClick={() => toggleQuestion(index)} />
                            }
                        </div>
                        {expandedIndex === index && (
                            <p className="text-[13px] md:text-[15px] text-justify">{faqs.answer}</p>
                        )}
                    </motion.div>
                ))}
            </section>
        </main>
    );
}

export default FAQ;