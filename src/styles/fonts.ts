import localFont from 'next/font/local';
import { Inter, Montserrat_Alternates } from "next/font/google";

export const montserrat_alt = Montserrat_Alternates({
    subsets: ["latin"],
    weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
});

// export const PPNeueMontreal = localFont({
//     src: [
//         {
//             path: '../../public/fonts/PPNeueMontreal-Medium.otf',
//             weight: '500',
//         },
//     ],
// });