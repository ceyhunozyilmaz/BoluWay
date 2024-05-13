// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";
// import ConfettiExplosion from "react-confetti-explosion";

// const SuccessPage = () => {
//   const router = useRouter();
// const payment_intent = router.query.payment_intent as string;

//   useEffect(() => {
//     const makeRequest = async () => {
//       try {
//         if (payment_intent) {
//           await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
//             method: "PUT",
//           });
//           setTimeout(() => {
//             router.push("/orders");
//           }, 5000);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     makeRequest();
//   }, [payment_intent, router]);

//   return (
//     <>
//       <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
//         <p className="max-w-[600px]">
//           Ödeme başarılı. Siparişler sayfasına yönlendiriliyorsunuz. Lütfen
//           sayfayı kapatmayın.
//         </p>
//         <ConfettiExplosion className="absolute m-auto" />
//       </div>
//     </>
//   );
// };

// export default SuccessPage;
