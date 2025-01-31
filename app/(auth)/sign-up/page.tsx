// ira codey yntacqum errorov

// 'use client'

// import AuthForm from "@/components/AuthForm";
// import { signUpSchema } from "@/lib/validations";
// import React from "react";

// const Page = () => (
//   <AuthForm
//     type="SIGN_UP"
//     schema={signUpSchema}
//     defaultValue={{
//       email: "",
//       password: "",
//       fullName: "",
//       universityId: 0,
//       universityCard: ''
//     }}
//     onSubmit={() => {}}
//   />
// );

// export default Page;


// chat gbt-i codey

"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{ // Use `defaultValues` here
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: ""
    }}
    onSubmit={async (data) => {
      // Handle submit logic here
      console.log(data); // Log the data for testing

      // Return a mock response
      return { success: true }; // Return a success object
    }}
  />
);

export default Page;
