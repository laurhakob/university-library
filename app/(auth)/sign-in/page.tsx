// ira codey yntacqum errorov


// "use client";

// import AuthForm from "@/components/AuthForm";
// import { signInSchema } from "@/lib/validations";
// import React from "react";

// const Page = () => (
//   <AuthForm
//     type="SIGN_IN"
//     schema={signInSchema}
//     defaultValue={{
//       email: "",
//       password: "",
//     }}
//     onSubmit={() => {}}    
//   />
// );

// export default Page;


// chat gbt-i codey


"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import React from "react";

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{ // Use `defaultValues` here
      email: "",
      password: "",
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
