// import React from 'react'
// import { Navbar } from './navabr';

// export const Contactpage = () => {
//   return (
//     <>
//     <Navbar></Navbar>
//     <div className='mb-2 mt-10'>
//       <section className="bg-white dark:bg-gray-900">
//   <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//       <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
//       <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
//       <form action="#" className="space-y-8">
//           <div>
//               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//               <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
//           </div>
//           <div>
//               <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
//               <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
//           </div>
//           <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">Submit</button>
//       </form>
//   </div>
// </section>
//     </div>
//     <div className='mt-8'>
//       <section className="cta bg-green-300 py-2 text-center">
//         <div className="container mx-auto">
//           <h2 className="text-2xl font-semibold text-green-800">Join Our Farming Community</h2>
//           <p className="text-lg text-green-700">
//             Get the latest updates on crop trends, farming techniques, and expert advice.
//           </p>
//           <hr className="border-green-900" />
//           <p className="text-center text-green-700 text-base mt-1">Copyright © 2024 CropCare. All rights reserved.</p>
//         </div>
//       </section>
//       </div>
//     </>
//   )
// }

// export default Contactpage;


// import React, { useState } from 'react';
// import { Navbar } from './navabr';
// import emailjs from 'emailjs-com';

// export const Contactpage = () => {
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState(''); // New state for success message

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateParams = {
//       from_email: email,
//       subject: subject,
//       message: message,
//     };

//     emailjs.send('service_x0lz6kv', 'template_3gncnjh', templateParams, 'D4XeibReFY-9dz4TY')
//       .then((response) => {
//         console.log('Email sent successfully!', response.status, response.text);
        
//         setSuccessMessage('Message sent successfully!'); // Show success message
//         setEmail('');
//         setSubject('');
//         setMessage('');

//         setTimeout(() => {
//           setSuccessMessage(''); // Clear success message after a delay
//         }, 3000);
//       }, (error) => {
//         console.error('Failed to send email.', error);
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='mt-2'>
//         <section className="bg-white dark:bg-gray-900">
//           <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//             <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
//             <p className="mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
//             {successMessage && (
//               <p className="text-center text-green-600 font-medium mb-4">{successMessage}</p>
//             )}
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div>
//                 <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
//                   placeholder="example@gmail.com" 
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required 
//                 />
//               </div>
//               <div>
//                 <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
//                 <input 
//                   type="text" 
//                   id="subject" 
//                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
//                   placeholder="Let us know how we can help you" 
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                   required 
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
//                 <textarea 
//                   id="message" 
//                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
//                   placeholder="Write your message here..." 
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   required 
//                 />
//               </div>
//               <div className="flex justify-center">
//                 <button 
//                   type="submit" 
//                   className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </section>
//       </div>
//       <div className='mt-1'>
//         <section className="cta bg-green-300 py-2 text-center">
//           <div className="container mx-auto">
//             <h2 className="text-2xl font-semibold text-green-800">Join Our Farming Community</h2>
//             <p className="text-lg text-green-700">
//               Get the latest updates on crop trends, farming techniques, and expert advice.
//             </p>
//             <hr className="border-green-900" />
//             <p className="text-center text-green-700 text-base mt-1">Copyright © 2024 CropCare. All rights reserved.</p>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Contactpage;



import React, { useState } from 'react';
import { Navbar } from './navabr';
import emailjs from 'emailjs-com';

export const Contactpage = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // New state for error message

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message on new submission

    const templateParams = {
      from_email: email,
      subject: subject,
      message: message,
    };

    // Track if the email was sent successfully
    let emailSent = false;

    // Sending email
    emailjs.send('service_x0lz6kv', 'template_3gncnjh', templateParams, 'D4XeibReFY-9dz4TY')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        emailSent = true; // Mark email as sent

        setSuccessMessage('Message sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');

        setTimeout(() => {
          setSuccessMessage(''); // Clear success message after a delay
        }, 3000);
      })
      .catch((error) => {
        // console.error('Failed to send email.', error);
        setErrorMessage('Failed to send message. Please try again.'); // Show error message
      });

    // Set timeout for checking if email was sent within 5 seconds
    setTimeout(() => {
      if (!emailSent) {
        setErrorMessage('Email sending is taking longer than expected. Please check your connection and try again.'); // Show error message
      }
    }, 5000);
  };

  return (
    <>
      <Navbar />
      <div className='mt-2'>
        <section className="bg-white ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p className="mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>

            {successMessage && (
              <p className="text-center text-green-600 font-medium mb-4">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-center text-red-600 font-medium mb-4">{errorMessage}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="example@gmail.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="Let us know how we can help you" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="Write your message here..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required 
                />
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div className='mt-1'>
        <section className="cta bg-green-300 py-2 text-center">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-green-800">Join Our Farming Community</h2>
            <p className="text-lg text-green-700">
              Get the latest updates on crop trends, farming techniques, and expert advice.
            </p>
            <hr className="border-green-900" />
            <p className="text-center text-green-700 text-base mt-1">Copyright © 2024 CropCare. All rights reserved.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contactpage;
