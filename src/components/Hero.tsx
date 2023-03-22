import { HeroContent } from '@lib/data';

// const HeroTitle = () => {
//     return (
//         <h1 className="my-6 text-5xl md:text-8xl ">
//             {HeroContent.titleTop}
//             <br />
//             {HeroContent.titleBottom}
//         </h1>
//     );
// };

// const HeroSubtitle = () => {
//     return (
//         <p className="mb-12 text-lg">
//             {HeroContent.subtitleTop}
//             <br />
//             {HeroContent.subtitleBottom}
//         </p>
//     );
// };

export const Hero = () => {
    return (
        <div className="text-center">
            <h1 className="my-6 text-6xl md:text-8xl">
                {HeroContent.titleTop} <br className="hidden md:block" />{' '}
                {HeroContent.titleBottom}
            </h1>
            <p className="mb-12 text-lg text-gray-200 md:text-xl">
                {HeroContent.subtitleTop} <br className="hidden md:block" />{' '}
                {HeroContent.subtitleBottom}
            </p>

        </div>
    );
};
