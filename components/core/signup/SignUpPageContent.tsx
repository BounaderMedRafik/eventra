"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";

const SignUpPageContent = () => {
  const [type, setType] = useState("pub");
  const [signed, setSigned] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };
  return (
    <div>
      <div className="h-full">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full  max-w-screen-md flex">
              {signed ? (
                <div className=" flex h-[50vh]  w-full flex-col gap-2 items-center justify-center">
                  <div className=" font-semibold text-xl">
                    {" "}
                    You Registered Succesfully
                  </div>
                  <div>
                    <CheckCircle size={30} />
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-full h-auto  bg-[url('https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg')] bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 border  rounded-l-lg"></div>

                  <div className="w-full lg:w-7/12  p-5 rounded-lg lg:rounded-l-none">
                    <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                      Create an Account!
                    </h3>

                    <form className="px-8 pt-6 pb-8 mb-4 rounded max-w-md mx-auto">
                      <div className="flex items-center  gap-0.5 mb-3">
                        <div
                          onClick={() => {
                            setType("pub");
                          }}
                          className={buttonVariants({
                            variant: "ghost",
                            size: "sm",
                            className: `${cn(
                              "cursor-pointer",
                              type == "pub" ? "bg-accent border" : ""
                            )}`,
                          })}
                        >
                          Public
                        </div>
                        <div
                          onClick={() => {
                            setType("part");
                          }}
                          className={buttonVariants({
                            variant: "ghost",
                            size: "sm",
                            className: `${cn(
                              " cursor-pointer",
                              type == "part" ? "bg-accent border" : ""
                            )}`,
                          })}
                        >
                          Participant
                        </div>
                      </div>
                      <div className="mb-4 md:flex md:justify-between">
                        <div className="mb-4 md:mr-2 md:mb-0">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="md:ml-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="email">Phone Number</Label>
                        <Input
                          id="email"
                          type="tel"
                          placeholder="+213 XX XXXX XXXX"
                        />
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Email" />
                      </div>
                      {type == "part" && (
                        <>
                          <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                              <Label htmlFor="password">Speciality</Label>
                              <Input
                                id="password"
                                type="password"
                                placeholder="Your Speciality"
                              />
                            </div>
                            <div className="md:ml-2">
                              <Label htmlFor="c_password">Portfolio</Label>
                              <Input placeholder="https://yourportfolio.kys" />
                            </div>
                          </div>
                        </>
                      )}
                      <div className="mb-4 md:flex md:justify-between">
                        <div className="mb-4 md:mr-2 md:mb-0">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="******************"
                          />
                        </div>
                        <div className="md:ml-2">
                          <Label htmlFor="c_password">Confirm Password</Label>
                          <Input
                            id="c_password"
                            type="password"
                            placeholder="******************"
                          />
                        </div>
                      </div>
                      <div className="mb-6 text-center">
                        <Button
                          onClick={() => {
                            setSigned(true);
                            handleClick();
                          }}
                          className="w-full "
                          type="button"
                        >
                          Register Account
                        </Button>
                      </div>
                      <hr className="mb-6 border-t" />
                      <div className="mb-6 text-center">
                        <Button
                          onClick={() => {
                            setSigned(true);
                            handleClick();
                          }}
                          className=" w-full"
                          type="button"
                        >
                          <div className=" flex items-center gap-2">
                            <div>Sign Up Using Google</div>
                            <div>
                              <BsGoogle />
                            </div>
                          </div>
                        </Button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageContent;
